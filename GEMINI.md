# Project Guidelines: Playwright Study

이 문서는 프로젝트의 개발 및 협업을 위한 가이드라인을 정의합니다.

## 📋 프로젝트 개요

- **목적**: Playwright 프레임워크를 사용한 웹 자동화 및 E2E 테스트 학습
- **주요 기술 스택**: 
  - Node.js
  - Playwright
  - TypeScript
- **주요 환경 설정**:
  - `.gitignore`: 운영체제, IDE, Node.js 및 Playwright 결과물 제외 설정 완료
  - `README.md`: 설치 및 기본적인 실행 방법 안내

## 📝 커밋 메시지 작성 규칙 (Commit Message Convention)

협업의 일관성을 위해 Conventional Commits 스타일을 따릅니다.

### 기본 형식
```text
<type>(<scope>): <subject>

<body>

<footer>
```

### Type 종류
- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- **docs**: 문서 수정 (README.md, GEMINI.md 등)
- **style**: 코드 포맷팅, 세미콜론 누락 등 (코드 변경 없음)
- **refactor**: 코드 리팩토링
- **test**: 테스트 코드 추가 및 수정
- **chore**: 빌드 업무 수정, 패키지 매니저 설정 등 (프로덕션 코드 변경 없음)

### 작성 원칙
1. **제목(Subject)은 반드시 영어로만 작성**하며, 50자 이내로 마침표 없이 작성합니다.
2. **명령어조(Imperative tone)**를 사용합니다 (예: "Add test" O, "Added test" X).
3. **본문(Body)은 영문을 먼저 작성**한 뒤, 바로 아래에 **한글로 변경 사항을 상세히 기술**합니다.
4. **검증 방법(Test)은 Gemini의 제안을 바탕으로 작성**합니다. `git --no-pager diff --staged` (또는 `amend` 시 `git --no-pager diff HEAD~1`) 결과를 Gemini에게 제공하여 변경 사항에 최적화된 테스트 시나리오를 제안받고, 이를 커밋 메시지 하단에 명시합니다.
5. **커밋 메시지는 실제 변경 내용을 바탕으로 작성**합니다. 스테이징된 변경 사항이 있다면 `git --no-pager diff --staged`를, 기존 커밋을 수정(`amend`)하는 경우라면 `git --no-pager diff HEAD~1` 명령어를 사용하여 내용을 확인합니다. (Generate commit messages based on the actual changes reviewed via `git --no-pager diff --staged` or `git --no-pager diff HEAD~1` for amends).

### 커밋 메시지 예시
```text
feat(login): add validation for email input

- implemented regex check for email format
- 이메일 형식에 대한 정규표현식 검증 로직 구현

[Test]
- Run 'npx playwright test tests/login.spec.ts' and confirm pass
- Manual check: Verify error message "Invalid email" appears in Chromium

- npx playwright test tests/login.spec.ts 실행 및 통과 확인
- Chromium 브라우저에서 잘못된 이메일 입력 시 "Invalid email" 메시지 노출 확인
```

## 🚀 개발 워크플로우

1. 테스트 케이스 작성 (`tests/` 디렉토리)
2. 로컬에서 테스트 실행 (`npx playwright test`)
3. 리포트 확인 및 디버깅
4. 변경 사항 최종 확인: 스테이징된 경우 `git --no-pager diff --staged`, `amend`의 경우 `git --no-pager diff HEAD~1` 실행
5. 확인된 내용을 바탕으로 위 규칙에 맞춰 커밋 작성

## 🧪 변경 사항 테스트 가이드

코드를 변경하거나 새로운 테스트를 추가한 후에는 아래 절차에 따라 검증을 수행합니다.

1. **정적 분석 및 타입 체크** (선택 사항):
   ```bash
   # 프로젝트에 설정된 경우 실행
   npx tsc --noEmit
   ```
2. **개별 테스트 실행**:
   수정한 특정 테스트 파일만 실행하여 의도한 대로 동작하는지 확인합니다.
   ```bash
   npx playwright test tests/example.spec.ts
   ```
3. **전체 회귀 테스트**:
   기존 기능에 영향이 없는지 확인하기 위해 전체 테스트를 수행합니다.
   ```bash
   npx playwright test
   ```
4. **결과 리포트 확인**:
   생성된 HTML 리포트를 통해 모든 단계가 통과했는지 최종 확인합니다.
   ```bash
   npx playwright show-report
   ```
