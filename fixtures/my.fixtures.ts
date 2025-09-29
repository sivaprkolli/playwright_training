import {test as base} from '@playwright/test';

type MyFixtures = {
    customMessage: string;
}

export const myTest = base.extend<MyFixtures>({
    customMessage: async({}, use)=>{
        const message = "This is a custom message";
        await use(message);
    }
})
