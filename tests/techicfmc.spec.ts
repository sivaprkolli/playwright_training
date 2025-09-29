import {test, Page, expect} from "@playwright/test";

test.describe("Techinc FMC", async()=> {
    test("Techinc FMC login", async({page}) =>{
        await page.goto("https://subseastudioqa.lab.technipfmc.com/");
       // await page.waitForTimeout(10000);
        await page.fill("#login_name","ssfd-testing-user-3");
        await page.locator("#login_password").fill("iep");
        await page.click("#login_submitBtn");
        await page.waitForTimeout(10000);
        await page.click("[title='New Project']");
        await page.fill("#projectEdit_nameInput","TestProject1");
        await page.click("#projectEdit_saveBtn");
    })
})