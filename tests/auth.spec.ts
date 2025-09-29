import { expect, Page} from "@playwright/test";
import { authTest } from "../fixtures/auth.fixture";
import { myTest } from "../fixtures/my.fixtures";
import { test as base } from '@playwright/test';
//import { customMessage } from "../fixtures/fixtures";


export const test = base.extend({ ...authTest, ...myTest });
test.describe("Validate login test", async()=> {
    authTest("Verify login to application", async({authenticatedPage}) =>{
            console.log(authenticatedPage)
    })
})