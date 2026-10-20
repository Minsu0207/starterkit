import type { Metadata } from "next";

import { LoginForm } from "@/components/features/auth/login-form";
import { ContactForm } from "@/components/features/examples/contact-form";
import { ProfileForm } from "@/components/features/settings/profile-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = { title: "폼 예제" };

export default function FormsExamplePage() {
  return (
    <Tabs defaultValue="contact">
      <TabsList>
        <TabsTrigger value="contact">문의하기</TabsTrigger>
        <TabsTrigger value="profile">프로필</TabsTrigger>
        <TabsTrigger value="login">로그인</TabsTrigger>
      </TabsList>

      <TabsContent value="contact" className="space-y-4 pt-4">
        <p className="text-sm text-muted-foreground">
          Input, Select, Textarea, Checkbox와 필수 동의 검증(zod refine)을 사용합니다.
        </p>
        <ContactForm />
      </TabsContent>

      <TabsContent value="profile" className="space-y-4 pt-4">
        <p className="text-sm text-muted-foreground">
          기본값이 채워진 폼과 Switch 사용 예시입니다. 대시보드 설정 화면과 같은 컴포넌트입니다.
        </p>
        <ProfileForm />
      </TabsContent>

      <TabsContent value="login" className="space-y-4 pt-4">
        <p className="text-sm text-muted-foreground">
          Card로 감싼 인증 폼 예시입니다. 로그인 페이지와 같은 컴포넌트입니다.
        </p>
        <div className="max-w-sm">
          <LoginForm />
        </div>
      </TabsContent>
    </Tabs>
  );
}
