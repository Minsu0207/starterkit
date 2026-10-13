# Next.js Starter Kit

Next.js, TypeScript, Tailwind CSS v4, shadcn/ui, lucide-react로 구성된 웹 개발 스타터 킷입니다.

## 기술 스택

| 기술 | 버전 | 비고 |
|---|---|---|
| Next.js | 16.4 | App Router, Turbopack, Cache Components |
| React | 19.3 | |
| TypeScript | 5.x | |
| Tailwind CSS | 4.3 | `tailwind.config` 없음, `@tailwindcss/postcss` 사용 |
| shadcn/ui | CLI 4.x (radix-nova) | `components.json` 참고 |
| lucide-react | 1.x | 아이콘 |
| next-themes | 0.4 | 다크 모드 |

## 시작하기

```bash
npm install
npm run dev      # http://localhost:3000
```

## 스크립트

| 명령어 | 설명 |
|---|---|
| `npm run dev` | 개발 서버 |
| `npm run build` / `npm start` | 프로덕션 빌드 / 실행 |
| `npm run lint` / `npm run lint:fix` | ESLint |
| `npm run typecheck` | 타입 검사 |
| `npm run format` | Prettier (Tailwind 클래스 정렬 포함) |

## 폴더 구조

```
src/
├─ app/                 # 라우트 (layout, page, error, loading, not-found)
├─ components/
│  ├─ ui/               # shadcn/ui 컴포넌트
│  ├─ layout/           # Header, Footer
│  ├─ theme-provider.tsx
│  └─ theme-toggle.tsx
├─ config/site.ts       # 사이트명, 설명, 네비게이션
└─ lib/utils.ts         # cn 유틸
```

## shadcn/ui 컴포넌트 추가

```bash
npx shadcn@latest add dialog
```

## Tailwind 커스터마이징

설정 파일 없이 `src/app/globals.css`의 `@theme` 블록에서 테마 변수를 정의합니다.

## 환경변수

`.env.example`을 `.env.local`로 복사해서 사용합니다.
