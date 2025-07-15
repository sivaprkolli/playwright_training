import {test, expect, Page} from "@playwright/test"

test("Verify testIdAttribute locator", async({page})=>{

        await page.goto("https://www.saucedemo.com/")
        await page.waitForTimeout(5000)
        await page.getByRole("heading", {name : "Swag Labs"}).isVisible();

        await page.getByPlaceholder("Username").fill("performance_glitch_user")
        await page.getByPlaceholder("Password").fill("secret_sauce")
        await page.getByRole("button", {name : "Login"}).click();
        await page.waitForTimeout(5000)
})