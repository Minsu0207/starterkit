"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactValues } from "@/lib/validations/contact";

const categories = [
  { value: "general", label: "일반 문의" },
  { value: "bug", label: "버그 신고" },
  { value: "feature", label: "기능 제안" },
] as const;

// 문의하기 폼: 필수 체크박스(refine)와 Select 기본값 없음 검증 예시
export function ContactForm() {
  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      // Select는 선택 전 상태를 보여주기 위해 빈 값으로 시작한다
      category: undefined,
      message: "",
      agree: false,
    },
  });

  async function onSubmit(values: ContactValues) {
    // TODO: 문의 접수 API 또는 Server Action 연동
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success("문의가 접수되었습니다.", { description: `${values.name} · ${values.email}` });
    form.reset();
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="max-w-xl">
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-name">이름</FieldLabel>
              <Input {...field} id="contact-name" aria-invalid={fieldState.invalid} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-email">이메일</FieldLabel>
              <Input
                {...field}
                id="contact-email"
                type="email"
                placeholder="name@example.com"
                aria-invalid={fieldState.invalid}
              />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="category"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-category">문의 유형</FieldLabel>
              <Select name={field.name} value={field.value ?? ""} onValueChange={field.onChange}>
                <SelectTrigger id="contact-category" aria-invalid={fieldState.invalid}>
                  <SelectValue placeholder="유형 선택" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="contact-message">내용</FieldLabel>
              <Textarea
                {...field}
                id="contact-message"
                rows={5}
                placeholder="문의 내용을 입력하세요"
                aria-invalid={fieldState.invalid}
              />
              <FieldDescription>{field.value.length}/500</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="agree"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field orientation="horizontal" data-invalid={fieldState.invalid}>
              <Checkbox
                id="contact-agree"
                checked={field.value}
                onCheckedChange={(checked) => field.onChange(checked === true)}
                aria-invalid={fieldState.invalid}
              />
              <FieldContent>
                <FieldLabel htmlFor="contact-agree">개인정보 수집 및 이용에 동의합니다</FieldLabel>
                <FieldDescription>문의 답변을 위해 이름과 이메일을 수집합니다.</FieldDescription>
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </FieldContent>
            </Field>
          )}
        />
        <Field orientation="horizontal">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && <Spinner />}
            보내기
          </Button>
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            초기화
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
