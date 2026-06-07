import { test, expect } from '@playwright/test';

// 테스트 1: 로그인 성공 케이스
test('올바른 계정으로 로그인 성공 확인하기', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  const alertMessage = page.locator('#flash');
  await expect(alertMessage).toContainText('You logged into a secure area!');
});

// 테스트 2: 로그인 실패 케이스 (비밀번호 틀림)
test('잘못된 비밀번호 입력 시 에러 메시지 확인하기', async ({ page }) => {
  // 1. 로그인 페이지로 이동
  await page.goto('https://the-internet.herokuapp.com/login');
  
  // 2. 아이디는 맞게, 비밀번호는 틀리게 입력
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'WrongPassword!');
  
  // 3. 로그인 버튼 클릭
  await page.click('button[type="submit"]');

  // 4. 에러 메시지 검증
  const alertMessage = page.locator('#flash');
  await expect(alertMessage).toContainText('Your password is invalid!');
});