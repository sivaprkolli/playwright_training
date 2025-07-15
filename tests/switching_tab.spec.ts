import {test,expect, chromium} from "@playwright/test";


test.describe("Verify Switching window", async ()=> {
        test("verify switching tab", async ({page})=>{

            page.goto("https://the-internet.herokuapp.com/windows");

            page.waitForTimeout(5000);

            const [page2] = await Promise.all([
                    page.context().waitForEvent("page"),
                    page.locator("//a[text()='Click Here']").click()
            ]);            

            await page2.waitForTimeout(5000);
            await expect(page2.locator("div > h3")).toBeVisible();

            await page2.screenshot({path: "page2.png"})

        })
})