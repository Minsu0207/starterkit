@AGENTS.md

# 프로젝트 가이드

- 스택: Next.js 16 (App Router), TypeScript, Tailwind CSS v4 (`tailwind.config` 파일을 만들지 않는다), shadcn/ui, lucide-react
- 패키지 매니저: npm
- 코드 주석, 커밋 메시지, 문서는 한국어로 쓰고, 변수명과 함수명은 영어로 쓴다.
- 스타일 커스터마이징은 `src/app/globals.css`의 `@theme`에서 한다.
- UI 컴포넌트는 `npx shadcn@latest add <name>`으로 추가한다. 아이콘은 lucide-react를 쓴다.
- 작업 후 `npm run lint`, `npm run typecheck`, `npm run build`로 검증한다.
