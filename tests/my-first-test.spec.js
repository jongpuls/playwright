const { test } = require('@playwright/test');
const fs = require('fs'); // 파일 저장을 위한 Node.js 기본 모듈 불러오기

test('책 데이터를 수집하여 CSV 파일로 저장하기', async ({ page }) => {
  await page.goto('https://books.toscrape.com/');

  const books = page.locator('.product_pod');
  const bookCount = await books.count();

  // 1. CSV 파일의 첫 번째 줄(헤더) 준비
  let csvContent = '제목,가격\n';

  for (let i = 0; i < bookCount; i++) {
    const book = books.nth(i);
    const title = await book.locator('h3 a').getAttribute('title');
    const price = await book.locator('.price_color').innerText();

    // 2. 제목에 쉼표가 있을 때를 대비해 큰따옴표로 감싸기
    const safeTitle = `"${title.replace(/"/g, '""')}"`; 
    
    // 3. 한 줄씩 누적하기
    csvContent += `${safeTitle},${price}\n`;
  }

  // 4. 프로젝트 폴더에 파일 쓰기 (파일명: result.csv)
  fs.writeFileSync('result.csv', csvContent, 'utf-8');
  console.log('\n🎉 result.csv 파일로 저장이 완료되었습니다!');
});