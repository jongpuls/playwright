// @ts-check
import { test, expect } from '@playwright/test';

// 1. 시각적 검증: 로그인 성공 화면 캡처 및 저장하기
test('로그인 성공 화면 스크린샷 캡처 및 저장하기', async ({ page }) => {
  // 로그인 과정 (기본 코드를 복사해서 사용)
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.click('button[type="submit"]');

  // 2. 로그인이 완료되어 요소가 나타날 때까지 자동 대기
  // locator와 assertion을 사용하면 요소가 나타날 때까지 Playwright가 기다려줍니다.
  const alertMessage = page.locator('#flash');
  await expect(alertMessage).toBeVisible();

  // 3. [핵심 추가] 로그인이 완료된 현재 화면을 스크린샷으로 캡처
  await page.screenshot({ path: 'screenshots/login-success.png', fullPage: true });
  await expect(alertMessage).toContainText('You logged into a secure area!');
});