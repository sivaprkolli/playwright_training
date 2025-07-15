import {test, expect, Page} from "@playwright/test"

test("Verify testIdAttribute locator", async({page})=>{

        await page.goto("https://www.saucedemo.com/")
        await page.waitForTimeout(5000)
        await page.getByTestId("username").fill("performance_glitch_user");
        await page.getByTestId("password").fill("secret_sauce")
        await page.getByTestId("login-button").click();
        await page.waitForTimeout(5000)
})