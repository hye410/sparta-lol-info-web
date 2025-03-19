# 🎮 LoL Info Web

LoL Info Web은 리그 오브 레전드(LoL)의 챔피언 및 아이템 정보를 제공하는 간단한 웹 애플리케이션입니다.<br />
<a href="https://sparta-lol-info-web.vercel.app/">보러가기</a>

## 🚀 기술 스택

🖥 Framework: Next.js

🎨 Styling: Tailwind CSS

📦 State Management: Zustand

⚡ Data Fetching & Caching: TanStack Query

💡 Language: TypeScript

## 📂 프로젝트 구조

<details>
<summary>펼쳐보기</summary>
lol-info-web<br />
├─ .eslintrc.json<br />
├─ LICENSE<br />
├─ README.md<br />
├─ next.config.mjs<br />
├─ package.json<br />
├─ pnpm-lock.yaml<br />
├─ postcss.config.mjs<br />
├─ public<br />
│ ├─ champions.webp<br />
│ ├─ items.webp<br />
│ └─ rotation.webp<br />
├─ src<br />
│ ├─ app<br />
│ │ ├─ api (API 라우트)<br />
│ │ ├─ champions (챔피언 목록 및 상세 페이지)<br />
│ │ ├─ error.tsx (공통 에러 페이지)<br />
│ │ ├─ items (아이템 목록 페이지)<br />
│ │ ├─ layout.tsx (기본 레이아웃)<br />
│ │ ├─ loading.tsx (공통 로딩 UI)<br />
│ │ ├─ rotation (로테이션 챔피언 페이지)<br />
│ ├─ components (UI 컴포넌트 모음)<br />
│ ├─ constants (상수 관리)<br />
│ ├─ data (데이터 관리)<br />
│ ├─ provider (Tanstack Query Provider)<br />
│ ├─ store (Zustand 상태 관리)<br />
│ ├─ types (TypeScript 타입 정의)<br />
│ ├─ utils (API 요청 및 커스텀 훅)<br />
├─ tailwind.config.ts<br />
└─ tsconfig.json
</details>

## 📦 설치 및 실행

1️⃣ 레포지토리 클론 <br />

```
git clone https://github.com/hye410/sparta-lol-info-web.git
```

2️⃣ 패키지 설치<br />

```
pnpm install
```

3️⃣ 개발 서버 실행 <br />

```
pnpm dev
```

4️⃣ 빌드 및 배포 <br />

```
pnpm build && pnpm start
```

## 🛠 주요 기능

✔️ 챔피언 목록 및 개별 챔피언 상세 정보 제공<br />
✔️ 아이템 목록<br />
✔️ 주간 로테이션 챔피언 정보 제공<br />
✔️ 다크 모드 지원 <br />
✔️ 태블릿, 모바일 지원

### 📜 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다.
