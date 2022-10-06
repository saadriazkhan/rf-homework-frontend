import { BrowserEnumerator } from '../enumerators/browser.enum';

export interface ITestPlan {
    test_name: string;
    browser: BrowserEnumerator;
    instruction_count: number;
};