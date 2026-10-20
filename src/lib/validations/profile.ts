import { z } from "zod";

export const profileSchema = z.object({
  name: z.string().min(2, "이름은 2자 이상이어야 합니다."),
  email: z.email("올바른 이메일 주소를 입력하세요."),
  role: z.enum(["developer", "designer", "manager"], "역할을 선택하세요."),
  bio: z.string().max(160, "소개는 160자 이하로 입력하세요."),
  marketing: z.boolean(),
});

export type ProfileValues = z.infer<typeof profileSchema>;
