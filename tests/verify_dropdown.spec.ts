import {test, expect, Page} from "@playwright/test";


test.describe("Validate dropdown test", async()=> {

    test("Verify dropdown options", async({page}) =>{

        await page.goto("https://the-internet.herokuapp.com/dropdown");
        await page.selectOption("#dropdown", "Option 2")
        await page.waitForTimeout(2000)
        await expect(page.locator("#dropdown")).toHaveValue("2")

        const drop_down = page.locator("#dropdown");
        await drop_down.selectOption({index:1});
        await page.waitForTimeout(2000)
        await expect(page.locator("#dropdown")).toHaveValue("1")
        await page.screenshot({path: "test.png"})

    })
    


})
