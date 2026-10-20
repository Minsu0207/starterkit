"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
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
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { profileSchema, type ProfileValues } from "@/lib/validations/profile";

const roles = [
  { value: "developer", label: "개발자" },
  { value: "designer", label: "디자이너" },
  { value: "manager", label: "매니저" },
] as const;

// 프로필 설정 폼: Input, Select, Textarea, Switch를 react-hook-form과 연결하는 예시
export function ProfileForm() {
  const form = useForm<ProfileValues>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "홍길동",
      email: "hong@example.com",
      role: "developer",
      bio: "",
      marketing: false,
    },
  });

  async function onSubmit(values: ProfileValues) {
    // TODO: 저장 API 또는 Server Action 연동
    await new Promise((resolve) => setTimeout(resolve, 500));
    toast.success("프로필이 저장되었습니다.", { description: `${values.name} · ${values.email}` });
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} noValidate className="max-w-xl">
      <FieldGroup>
        <Controller
          name="name"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="profile-name">이름</FieldLabel>
              <Input {...field} id="profile-name" aria-invalid={fieldState.invalid} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="profile-email">이메일</FieldLabel>
              <Input {...field} id="profile-email" type="email" aria-invalid={fieldState.invalid} />
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="role"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="profile-role">역할</FieldLabel>
              <Select name={field.name} value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="profile-role" aria-invalid={fieldState.invalid}>
                  <SelectValue placeholder="역할 선택" />
                </SelectTrigger>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem key={role.value} value={role.value}>
                      {role.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="bio"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="profile-bio">소개</FieldLabel>
              <Textarea
                {...field}
                id="profile-bio"
                placeholder="간단한 자기소개를 입력하세요"
                aria-invalid={fieldState.invalid}
              />
              <FieldDescription>{field.value.length}/160</FieldDescription>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
        <Controller
          name="marketing"
          control={form.control}
          render={({ field }) => (
            <Field orientation="horizontal">
              <FieldContent>
                <FieldLabel htmlFor="profile-marketing">마케팅 이메일 수신</FieldLabel>
                <FieldDescription>새 기능과 소식을 이메일로 받습니다.</FieldDescription>
              </FieldContent>
              <Switch
                id="profile-marketing"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </Field>
          )}
        />
        <Field orientation="horizontal">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting && <Spinner />}
            저장
          </Button>
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            초기화
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
