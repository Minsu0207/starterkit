import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("올바른 이메일 주소를 입력하세요."),
  password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
});

export const signupSchema = z
  .object({
    name: z.string().min(2, "이름은 2자 이상이어야 합니다."),
    email: z.email("올바른 이메일 주소를 입력하세요."),
    password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
    confirmPassword: z.string(),
    terms: z.boolean().refine((value) => value, "약관에 동의해야 합니다."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirmPassword"],
  });

export type LoginValues = z.infer<typeof loginSchema>;
export type SignupValues = z.infer<typeof signupSchema>;
