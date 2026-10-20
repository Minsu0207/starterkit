import { PageHeader } from "@/components/common/page-header";
import { ExamplesNav } from "@/components/features/examples/examples-nav";

// 예제 페이지 공통 레이아웃: 제목 + 하위 탭
export default function ExamplesLayout({ children }: LayoutProps<"/examples">) {
  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-10">
      <PageHeader title="예제" description="스타터 킷에 포함된 컴포넌트와 폼 사용 예시입니다." />
      <ExamplesNav />
      {children}
    </div>
  );
}
