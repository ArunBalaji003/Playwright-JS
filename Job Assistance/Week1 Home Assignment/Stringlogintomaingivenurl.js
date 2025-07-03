import { chromium } from 'playwright';

(async ()=> {
    const originalUrl = "http://leaftaps.com/crmsfa/control/login";
    const targetUrl = originalUrl.replace("login", "main");
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto(targetUrl);
    console.log("Navigated to:", page.url());
    await browser.close();
})();