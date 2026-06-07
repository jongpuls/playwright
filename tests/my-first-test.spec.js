const { test } = require('@playwright/test');

test('연습용 쇼핑몰에서 책 제목과 가격 긁어오기', async ({ page }) => {
  // 1. 연습용 세계 도서 쇼핑몰로 이동
  await page.goto('https://books.toscrape.com/');

  // 2. 책 한 권 한 권이 담긴 구역(태그)들을 타겟팅
  // HTML 구조상 각 책들은 <article class="product_pod"> 안에 담겨 있습니다.
  const books = page.locator('.product_pod');

  // 3. 화면에 노출된 책의 총 개수 세기
  const bookCount = await books.count();
  console.log(`\n📚 화면에서 찾아낸 총 도서 개수: ${bookCount}개`);

  console.log('======================================');
  console.log('★ 오늘 판매 중인 도서 목록 및 가격 ★');
  console.log('======================================');

  // 4. 반복문을 돌며 각 책의 제목(h3 안의 a 태그)과 가격(.price_color) 추출하기
  for (let i = 0; i < bookCount; i++) {
    const book = books.nth(i); // i번째 책 선택

    const title = await book.locator('h3 a').getAttribute('title'); // hidden title 속성 가져오기
    const price = await book.locator('.price_color').innerText(); // 가격 텍스트 가져오기

    console.log(`${i + 1}. [제목] ${title} -> [가격] ${price}`);
  }
  console.log('======================================');
});