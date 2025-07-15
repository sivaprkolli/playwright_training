import {test, expect, Page} from "@playwright/test";

test.describe("Click uisng Javascript test", async()=> {

    test("JS test", async({page}) =>{
        await page.goto("https://www.prettylittlething.com/dark-grey-marl-knit-distressed-detail-chunky-cable-jumper.html");

        await page.waitForTimeout(5000);

        await page.evaluate(()=>{
            const whislist = document.querySelector("[title='Wishlist']") as HTMLInputElement;
            whislist.click();
        });

        await page.waitForTimeout(10000)
        
    })
    
})
