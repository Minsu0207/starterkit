import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";

// 마케팅/공개 페이지 레이아웃: 헤더 + 본문 + 푸터
export default function MarketingLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-svh flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
