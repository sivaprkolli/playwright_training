import {expect, test as base} from '@playwright/test';

type AuthFixture ={
    authenticatedPage:any;
}

export const authTest = base.extend<AuthFixture>({
    authenticatedPage: async({browser}, use) => {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://www.saucedemo.com/");
        await page.fill("#user-name","performance_glitch_user");
        await page.locator("#password").fill("secret_sauce");
        await page.click("#login-button");
        await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
        await use(page);
         await context.close();
    }
})