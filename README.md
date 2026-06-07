# Playwright Study Project

이 저장소는 Playwright를 이용한 웹 자동화 및 E2E(End-to-End) 테스트 학습을 위한 프로젝트입니다.

## 🚀 시작하기

### 사전 요구 사항

- [Node.js](https://nodejs.org/) (버전 16 이상 권장)

### 설치

프로젝트에 필요한 패키지를 설치하고 Playwright 전용 브라우저를 다운로드합니다.

```bash
npm install
npm install @playwright/test
npx playwright install
```

## 🛠️ 주요 명령어

### 테스트 실행

- **모든 테스트 실행:**
  ```bash
  npx playwright test
  ```
- **UI 모드로 실행 (디버깅 시 유용):**
  ```bash
  npx playwright test --ui
  ```
- **특정 브라우저에서 실행:**
  ```bash
  npx playwright test --project=chromium
  ```

### 리포트 확인

테스트 실행 후 생성된 HTML 리포트를 확인하려면 다음 명령어를 사용하세요.
```bash
npx playwright show-report
```

## 📁 프로젝트 구조

- `tests/`: 테스트 케이스 파일들 (.spec.ts)
- `playwright.config.ts`: Playwright 전역 설정 파일
- `test-results/`: 실패한 테스트의 스크린샷이나 비디오 저장 (Git 제외)
- `playwright-report/`: 생성된 테스트 결과 리포트 (Git 제외)
