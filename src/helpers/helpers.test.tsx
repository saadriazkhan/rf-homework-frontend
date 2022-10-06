import { BrowserEnumerator } from '../enumerators/browser.enum';
import { validateTestSuite } from './index';

test('should be true with valid input', () => {
    expect(validateTestSuite({
        id: 1,
        test_suite_name: 'Suite Mix Save Mental',
        test_plans: [
            {
                test_name: 'Test Plan Stiff Any Main',
                browser: BrowserEnumerator.Firefox,
                instruction_count: 33
            }
        ]
    })).toBeTruthy();
});

test('should be false with no test plans', () => {
    expect(validateTestSuite({
        id: 1,
        test_suite_name: 'Suite Mix Save Mental',
        test_plans: []
    })).toBeFalsy();
});

test('should be false with no test plan name', () => {
    expect(validateTestSuite({
        id: 1,
        test_suite_name: 'Suite Mix Save Mental',
        test_plans: [
            {
                test_name: '',
                browser: BrowserEnumerator.Firefox,
                instruction_count: 33
            }
        ]
    })).toBeFalsy();
})

test('should be false with instruction count zero', () => {
    expect(validateTestSuite({
        id: 1,
        test_suite_name: 'Suite Mix Save Mental',
        test_plans: [
            {
                test_name: 'sdasdasd',
                browser: BrowserEnumerator.Firefox,
                instruction_count: 0
            }
        ]
    })).toBeFalsy();
});

test('should be false with test suite name empty', () => {
    expect(validateTestSuite({
        id: 1,
        test_suite_name: '',
        test_plans: [
            {
                test_name: 'sdasdasd',
                browser: BrowserEnumerator.Firefox,
                instruction_count: 1
            }
        ]
    })).toBeFalsy();
});