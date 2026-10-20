"use client";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";

// sonner 토스트 종류별 호출 예시
export function ToastDemo() {
  return (
    <>
      <Button variant="outline" onClick={() => toast("기본 알림입니다.")}>
        기본
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("저장되었습니다.", { description: "변경 사항이 반영됐어요." })}
      >
        성공
      </Button>
      <Button variant="outline" onClick={() => toast.error("요청에 실패했습니다.")}>
        에러
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("파일을 삭제했습니다.", {
            action: { label: "되돌리기", onClick: () => toast.info("삭제를 취소했습니다.") },
          })
        }
      >
        액션 포함
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
            loading: "업로드 중...",
            success: "업로드 완료",
            error: "업로드 실패",
          })
        }
      >
        Promise
      </Button>
    </>
  );
}
