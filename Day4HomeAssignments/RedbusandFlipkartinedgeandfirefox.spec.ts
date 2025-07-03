import{test,expect,chromium,firefox}from"@playwright/test"; 
test("Redbus",async({page})=>{
    // Launch chrome browser
    const browser = await chromium.launch({channel: 'chrome', headless: false})
    const context = await browser.newContext()
    const page1 = await context.newPage()
    await page.goto("https://www.redbus.in/")
    await expect(page).toHaveTitle(/redbus/i)
    await expect(page).toHaveURL('https://www.redbus.in/')
    await browser.close()
    
});
test('Flipkart in Firefox - verify title and URL', async () => {
  const browser = await firefox.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.flipkart.com/');
  // Verify title and URL
  await expect(page).toHaveTitle(/flipkart/i);
  await expect(page).toHaveURL(/flipkart\.com/);
  await browser.close();
});