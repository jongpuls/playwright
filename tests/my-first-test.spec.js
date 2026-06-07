const { test, expect } = require('@playwright/test');

// 1. 시각적 검증: 로그인 성공 화면 캡처 및 저장하기
test('로그인 성공 화면 스크린샷 캡처 및 저장하기', async ({ page }) => {
  // 로그인 과정 (기본 코드를 복사해서 사용)
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  // 2. 로그인이 완료될 때까지 잠시 대기 (캡처가 너무 빠르면 로딩 중인 화면이 찍힐 수 있음)
  await page.waitForTimeout(2000); // 2초 대기

  // 3. [핵심 추가] 로그인이 완료된 현재 화면을 스크린샷으로 캡처
  // 프로젝트 폴더에 'screenshots' 폴더가 자동으로 생기고 그 안에 파일이 저장됩니다.
  await page.screenshot({ path: 'screenshots/login-success.png' });

  // 4. 기존 검증도 그대로 유지
  const alertMessage = page.locator('#flash');
  await expect(alertMessage).toContainText('You logged into a secure area!');
});