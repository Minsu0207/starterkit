"use client";

import { Button } from "@/components/ui/button";

// 라우트 세그먼트 에러 경계
export default function Error({ unstable_retry }: { error: Error; unstable_retry: () => void }) {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-2xl font-bold">문제가 발생했습니다</h1>
      <p className="text-muted-foreground">잠시 후 다시 시도해 주세요.</p>
      <Button onClick={() => unstable_retry()}>다시 시도</Button>
    </div>
  );
}
