import { ITestPlan } from './test-plan.interface';

export interface ITestSuite {
    id: number;
    test_suite_name: string;
    test_plans: ITestPlan[];
}