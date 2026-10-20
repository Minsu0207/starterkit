# Next.js Starter Kit

Next.js, TypeScript, Tailwind CSS v4, shadcn/ui, lucide-react로 구성된 웹 개발 스타터 킷입니다.

## 기술 스택

| 기술         | 버전                 | 비고                                                |
| ------------ | -------------------- | --------------------------------------------------- |
| Next.js      | 16.4                 | App Router, Turbopack, Cache Components             |
| React        | 19.3                 |                                                     |
| TypeScript   | 5.x                  |                                                     |
| Tailwind CSS | 4.3                  | `tailwind.config` 없음, `@tailwindcss/postcss` 사용 |
| shadcn/ui    | CLI 4.x (radix-nova) | `components.json` 참고                              |
| lucide-react | 1.x                  | 아이콘                                              |
| next-themes  | 0.4                  | 다크 모드                                           |

### 유틸리티 라이브러리

| 라이브러리                            | 용도                                       |
| ------------------------------------- | ------------------------------------------ |
| react-hook-form + @hookform/resolvers | 폼 상태 관리 (`Controller` + shadcn Field) |
| zod (v4)                              | 스키마 검증, 폼 타입 추론                  |
| date-fns                              | 날짜 포맷 (`src/lib/format.ts`, ko 로케일) |
| sonner                                | 토스트 알림                                |
| cn                                    | Tailwind 클래스 병합 (shadcn 공식)         |

## 시작하기

```bash
npm install
npm run dev      # http://localhost:3000
```

## 스크립트

| 명령어                              | 설명                                 |
| ----------------------------------- | ------------------------------------ |
| `npm run dev`                       | 개발 서버                            |
| `npm run build` / `npm start`       | 프로덕션 빌드 / 실행                 |
| `npm run lint` / `npm run lint:fix` | ESLint                               |
| `npm run typecheck`                 | 타입 검사                            |
| `npm run format`                    | Prettier (Tailwind 클래스 정렬 포함) |

## 레이아웃

라우트 그룹으로 화면 골격을 나눕니다. 루트 `layout.tsx`는 html/body와 `Providers`(테마, 툴팁, 토스트)만 담당합니다.

| 그룹          | 레이아웃                      | 페이지                              |
| ------------- | ----------------------------- | ----------------------------------- |
| `(marketing)` | 헤더 + 본문 + 푸터            | `/`                                 |
| `(auth)`      | 화면 중앙 카드                | `/login`, `/signup`                 |
| `(dashboard)` | 사이드바 + 상단바(브레드크럼) | `/dashboard`, `/dashboard/settings` |

새 페이지는 알맞은 그룹 폴더 아래에 만들면 해당 레이아웃이 자동으로 적용됩니다.
메뉴는 `src/config/site.ts`의 `mainNav`(헤더), `dashboardNav`(사이드바, 브레드크럼)에 추가합니다.

## 컴포넌트 계층

상위 계층은 하위 계층만 import 합니다.

| 계층 | 위치                            | 역할                                                     |
| ---- | ------------------------------- | -------------------------------------------------------- |
| L0   | `config/`, `lib/`, `hooks/`     | 사이트 설정, 유틸, 검증 스키마, 훅                       |
| L1   | `components/ui/`                | shadcn/ui 프리미티브 (CLI 생성물, 직접 수정 지양)        |
| L2   | `components/common/`            | 전역 공통 조합 (`Logo`, `PageHeader`)                    |
| L3   | `components/layout/`            | 화면 골격 (`Header`, `Footer`, `AppSidebar` 등)          |
| L4   | `components/features/<도메인>/` | 도메인 기능 (`auth/login-form`, `settings/profile-form`) |
| L5   | `app/(group)/`                  | 라우트. L2~L4를 조립만 한다                              |

## 폴더 구조

```
src/
├─ app/
│  ├─ (marketing)/      # 공개 페이지
│  ├─ (auth)/           # 로그인, 회원가입
│  ├─ (dashboard)/      # 대시보드, 설정
│  └─ layout.tsx, error.tsx, loading.tsx, not-found.tsx
├─ components/
│  ├─ ui/               # shadcn/ui 컴포넌트
│  ├─ common/           # Logo, PageHeader
│  ├─ layout/           # Header, Footer, MainNav, MobileNav, AppSidebar, DashboardHeader, UserNav
│  ├─ features/         # auth, settings 폼
│  ├─ providers.tsx
│  ├─ theme-provider.tsx
│  └─ theme-toggle.tsx
├─ config/site.ts       # 사이트명, 설명, 네비게이션
├─ hooks/use-mobile.ts
└─ lib/
   ├─ utils.ts          # cn
   ├─ format.ts         # 날짜 포맷
   └─ validations/      # zod 스키마
```

## shadcn/ui 컴포넌트

설치된 컴포넌트:

- **핵심**: button, card, input, label, textarea, select, checkbox, switch, field, badge, avatar, separator, skeleton, spinner, tooltip, dialog, alert, alert-dialog, empty, dropdown-menu, sheet, sonner
- **레이아웃/네비게이션**: sidebar, breadcrumb, tabs, scroll-area, collapsible
- **데이터 표시**: table, pagination, popover

필요할 때 추가할 만한 컴포넌트: `calendar`(날짜 선택), `chart`(recharts), `command`(검색 팔레트), `carousel`, `accordion`, `radio-group`, `progress`, `input-otp`

```bash
npx shadcn@latest add calendar
```

> `src/hooks/use-mobile.ts`는 react-hooks 린트 규칙을 지키도록 `useSyncExternalStore`로 수정했습니다. `sidebar`를 다시 설치하면 덮어써지므로 주의하세요.

## Cache Components 주의점

`next.config.ts`에서 `cacheComponents`가 켜져 있습니다.

- 서버 컴포넌트에서 `new Date()`, `Math.random()`, `cookies()` 등을 쓰면 정적 프리렌더가 깨지거나 동적 렌더링으로 바뀝니다.
- `usePathname`을 쓰는 컴포넌트(MainNav, AppSidebar, DashboardHeader)는 동적 param 라우트에서 `Suspense`로 감싸야 할 수 있습니다.

## Tailwind 커스터마이징

설정 파일 없이 `src/app/globals.css`의 `@theme` 블록에서 테마 변수를 정의합니다.

## 환경변수

`.env.example`을 `.env.local`로 복사해서 사용합니다.
