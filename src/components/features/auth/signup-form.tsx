"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldDescription, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { signupSchema, type SignupValues } from "@/lib/validations/auth";

// 텍스트 입력 필드 정의 (반복되는 Controller 마크업을 줄인다)
const textFields = [
  { name: "name", label: "이름", type: "text", autoComplete: "name" },
  { name: "email", label: "이메일", type: "email", autoComplete: "email" },
  { name: "password", label: "비밀번호", type: "password", autoComplete: "new-password" },
  {
    name: "confirmPassword",
    label: "비밀번호 확인",
    type: "password",
    autoComplete: "new-password",
  },
] as const;

// 회원가입 폼: react-hook-form + zod 검증
export function SignupForm() {
  const form = useForm<SignupValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: "", email: "", password: "", confirmPassword: "", terms: false },
  });

  async function onSubmit(values: SignupValues) {
    // TODO: 회원가입 API 또는 Server Action 연동
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success(`${values.name}님, 가입을 환영합니다.`);
    form.reset();
  }

  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle className="text-xl">회원가입</CardTitle>
        <CardDescription>새 계정을 만들어 시작하세요</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} noValidate>
          <FieldGroup>
            {textFields.map(({ name, label, type, autoComplete }) => (
              <Controller
                key={name}
                name={name}
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor={`signup-${name}`}>{label}</FieldLabel>
                    <Input
                      {...field}
                      id={`signup-${name}`}
                      type={type}
                      autoComplete={autoComplete}
                      aria-invalid={fieldState.invalid}
                    />
                    {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                  </Field>
                )}
              />
            ))}
            <Controller
              name="terms"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field orientation="horizontal" data-invalid={fieldState.invalid}>
                  <Checkbox
                    id="signup-terms"
                    checked={field.value}
                    onCheckedChange={(checked) => field.onChange(checked === true)}
                    aria-invalid={fieldState.invalid}
                  />
                  <FieldLabel htmlFor="signup-terms" className="font-normal">
                    이용약관 및 개인정보 처리방침에 동의합니다
                  </FieldLabel>
                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />
            <Field>
              <Button type="submit" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting && <Spinner />}
                가입하기
              </Button>
              <FieldDescription className="text-center">
                이미 계정이 있으신가요? <Link href="/login">로그인</Link>
              </FieldDescription>
            </Field>
          </FieldGroup>
        </form>
      </CardContent>
    </Card>
  );
}
