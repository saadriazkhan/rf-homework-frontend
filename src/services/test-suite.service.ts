import { Environment } from '../environment/environment';
import { ITestSuite } from '../interfaces/test-suite.interface';

export const fetchTestSuitesData = async (): Promise<ITestSuite[]> => {
    const testSuites: ITestSuite[] = await fetch(`${Environment.api}/test_suites`, {
        method: 'GET'
    }).then(
        (data: Response) => data.json()
    ).catch(
        () => []
    );

    return testSuites;
}

export const updateTestSuiteData = async (testSuite: ITestSuite): Promise<ITestSuite> => {
    // const testSuites: ITestSuite[] = await fetch(`${Environment.api}/test_suites`, {
    //     method: 'POST'
    // }).then(
    //     (data: Response) => data.json()
    // ).catch(
    //     () => []
    // );
    console.log(JSON.stringify(testSuite));

    return testSuite;
}