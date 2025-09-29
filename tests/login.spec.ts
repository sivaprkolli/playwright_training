import {test,expect, chromium, firefox} from "@playwright/test";


test.describe("Verify login success", async ()=> {
        test("verify login with valid credentials", async ()=>{

            const browser = await firefox.launch();
            const context = await browser.newContext();
            const page = await context.newPage();

            await page.goto("https://subseastudioqa.lab.technipfmc.com/");
            await page.waitForTimeout(10000);
            await page.fill("#login_name","ssfd-testing-user-3");
            await page.locator("#login_password").fill("iep");
            await page.click("#login_submitBtn");
        
            await page.waitForTimeout(10000);
            await page.click("[title='New Project']");
            await page.fill("#projectEdit_nameInput","TestProject1");
            await page.click("#projectEdit_saveBtn");

        })
})