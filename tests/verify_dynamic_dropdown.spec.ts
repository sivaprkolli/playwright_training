import {test, expect, Page} from "@playwright/test";

test.describe("Validate Dynamic dropdown test", async()=> {

    test("Move to element and click test", async({page}) =>{
        await page.goto("https://www.flipkart.com/");
        await page.waitForTimeout(5000);

        const mobiles_menu = await page.locator("//span[text()='Mobiles & Tablets']");

        await mobiles_menu.click();
        await page.waitForTimeout(5000);

        const appliences_menu = await page.locator("//span[text()='TVs & Appliances']");
        await appliences_menu.hover();
        await page.click("//a[text()='Fully Automatic Front Load']")
        await page.waitForTimeout(5000);

 
    })
    
})
