const {test} =require('@playwright/test');

test('Browser context Playwright test',async ({browser,page})=>  //browser=Playwright fixture
{
const context=await browser.newContext();
const page=await context.newPage(); 
await page.goto("https://rahulshettyacademy.com/locatorspractice/");

});

test('Page Playwright test',async ({browser,page})=>  //browser=Playwright fixture
{
await page.goto("https://www.google.com/");

});
