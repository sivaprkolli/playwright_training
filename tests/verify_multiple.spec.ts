import {test, expect, Page} from "@playwright/test";

test.describe("Validate multiple values test", async()=> {

    test("Verify prodcuts list", async({page}) =>{
        await page.goto("https://www.saucedemo.com/");
        await page.fill("#user-name","performance_glitch_user");
        await page.fill("#password","secret_sauce");
        await page.click("#login-button");
        const products_page_heading = await page.locator("[data-test='title']").innerText();
        console.log(products_page_heading)
        await expect(products_page_heading).toBe("Products")

        const products_list = await page.locator("[class*='inventory_item_name']").allInnerTexts();
        const products_list2 = await page.locator("[class*='inventory_item_name']").allTextContents();


        // console.log(products_list);
        // console.log(products_list2);

        for(let i=0; i<products_list.length; i++){
                console.log(products_list[i])
        }

        await expect(products_list.length).toBe(6)
    })
    
})
