import {test,expect, chromium, firefox} from "@playwright/test";


test.describe("Verify login success", async ()=> {
        test("verify login with valid credentials", async ()=>{

            const browser = await firefox.launch();
            const context = await browser.newContext();
            const page = await context.newPage();

            await page.goto("https://www.saucedemo.com/");
            await page.fill("#user-name","performance_glitch_user");
            await page.locator("#password").fill("secret_sauce");
            await page.click("#login-button");
            await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
            await page.screenshot();

        })
})