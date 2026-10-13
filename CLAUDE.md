# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

# 프로젝트 가이드

- 스택: Next.js 16 (App Router), TypeScript, Tailwind CSS v4 (`tailwind.config` 파일을 만들지 않는다), shadcn/ui, lucide-react
- 패키지 매니저: npm
- 코드 주석, 커밋 메시지, 문서는 한국어로 쓰고, 변수명과 함수명은 영어로 쓴다.
- 스타일 커스터마이징은 `src/app/globals.css`의 `@theme`에서 한다.
- UI 컴포넌트는 `npx shadcn@latest add <name>`으로 추가한다. 아이콘은 lucide-react를 쓴다.
- 커밋 메시지, PR 설명 등 git/GitHub에 Claude 흔적(`Co-Authored-By: Claude`, `Generated with Claude Code` 등)을 넣지 않는다.
- 작업 후 `npm run lint`, `npm run typecheck`, `npm run build`로 검증한다.

## 명령어

- `npm run dev`: 개발 서버 (http://localhost:3000)
- `npm run build` / `npm start`: 프로덕션 빌드 / 실행
- `npm run lint` (`lint:fix`로 자동 수정), `npm run typecheck`, `npm run format` (Prettier + Tailwind 클래스 정렬)
- 테스트 러너는 설정되어 있지 않다. 단일 테스트 실행 명령은 없다.

## 아키텍처

- `src/app/layout.tsx`가 루트 레이아웃이다. `ThemeProvider`(next-themes, `class` 속성 방식, 시스템 테마 기본) → `Header` / `main` / `Footer` / `Toaster`(sonner) 순으로 감싼다. `html`에 `lang="ko"`와 Geist 폰트 변수가 설정되어 있다.
- `src/config/site.ts`의 `siteConfig`가 사이트명, 설명, 네비게이션 항목의 단일 출처다. 메타데이터 title 템플릿(`%s | 사이트명`)과 Header/Footer가 이를 참조하므로 값은 여기서만 바꾼다.
- `next.config.ts`에서 `cacheComponents`와 `partialPrefetching`이 켜져 있다. 캐싱/동적 렌더링 동작이 기존 Next.js와 다르므로 데이터 fetching이나 라우트 코드를 쓰기 전에 `node_modules/next/dist/docs/`의 해당 가이드를 읽는다.
- `LayoutProps<"/">` 같은 라우트 타입 헬퍼를 전역 타입으로 사용한다 (별도 import 없음).
- `src/components/ui/`는 shadcn 생성물(radix-nova 스타일, `components.json`)이므로 직접 수정보다 CLI 재생성을 우선한다. 커스텀 컴포넌트는 `src/components/` 하위(`layout/` 등)에 둔다.
- 경로 별칭은 `@/*` → `src/*`. 클래스 병합은 `@/lib/utils`의 `cn`을 쓴다.
- 환경변수는 `.env.example`을 `.env.local`로 복사해서 쓰고, 브라우저에 노출할 값만 `NEXT_PUBLIC_` 접두사를 붙인다.
- Prettier: 세미콜론 사용, `printWidth` 100.
