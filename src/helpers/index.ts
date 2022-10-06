import { BrowserEnumerator } from '../enumerators/browser.enum';
import { ITestSuite } from '../interfaces/test-suite.interface';

export function getEnumeratorValues(enumerator: Record<string, string>): string[] {
    return Object.values(enumerator);
}

export function getEnumeratorKeys(enumerator: Record<string, string>): string[] {
    return Object.keys(enumerator);
}

const BrowserEnumeratorKeys = getEnumeratorValues(BrowserEnumerator);

export function validateTestSuite(testSuite: ITestSuite): boolean {
    return (
        testSuite.test_suite_name.trim().length > 0 &&
        testSuite.test_plans.length > 0 &&
        testSuite.test_plans.every(
            item =>
                item.test_name.trim().length > 0 &&
                BrowserEnumeratorKeys.includes(item?.browser) &&
                item.instruction_count > 0
        )
    );
}