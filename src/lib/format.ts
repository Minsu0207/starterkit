import { format } from "date-fns";
import { ko } from "date-fns/locale";

// 한국어 로케일 날짜 포맷 (예: 2026년 10월 20일)
// 주의: 서버 컴포넌트에서 new Date()로 현재 시각을 넘기면 cacheComponents 프리렌더가 깨진다.
export function formatDate(date: Date | string | number, pattern = "PPP") {
  return format(new Date(date), pattern, { locale: ko });
}
