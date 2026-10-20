import { Logo } from "@/components/common/logo";

// 인증 페이지 레이아웃: 화면 중앙에 로고와 폼 카드를 배치한다
export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Logo className="self-center" />
        {children}
      </div>
    </div>
  );
}
