import {test,Page} from "@playwright/test";
//import { authenticatedPage } from "../fixtures/authenticatedPage";
import { authTest } from "../fixtures/auth.fixture";
import {myTest} from "../fixtures/my.fixtures";

test.describe("Validate login test", async()=> {
    authTest("Verify login to application", async({authenticatedPage}) =>{
            console.log(authenticatedPage)
    })
})