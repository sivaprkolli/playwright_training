import {test, expect, Page} from "@playwright/test"


test("Verify locator", async({page})=>{

        await page.goto("https://www.saucedemo.com/")
        await page.waitForTimeout(5000)
        await page.fill("id=user-name", "Siva")

        await page.click("id=login-button");

        await page.waitForTimeout(5000)
});