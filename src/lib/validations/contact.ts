import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다."),
  email: z.email("올바른 이메일 주소를 입력하세요."),
  category: z.enum(["general", "bug", "feature"], "문의 유형을 선택하세요."),
  message: z
    .string()
    .min(10, "내용은 10자 이상 입력하세요.")
    .max(500, "내용은 500자 이하로 입력하세요."),
  agree: z.boolean().refine((value) => value, "개인정보 수집에 동의해야 합니다."),
});

export type ContactValues = z.infer<typeof contactSchema>;
