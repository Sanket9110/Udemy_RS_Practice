const {test, expect} =require('@playwright/test');

test('Browser context Playwright test',async ({browser})=>  //browser=Playwright fixture
{
const context=await browser.newContext();
const page=await context.newPage(); 
await page.goto("https://rahulshettyacademy.com/locatorspractice/");
console.log(await page.title());

});

test('Page Playwright test',async ({browser,page})=>  //browser=Playwright fixture
{
await page.goto("https://www.google.com/");
// get the title- assertion

console.log(await page.title());
await expect(page).toHaveTitle("Google");
});
