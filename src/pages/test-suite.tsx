import { useEffect, useState } from 'react';
import { ITestSuite } from '../interfaces/test-suite.interface';
import { TestSuiteDetailComponent } from '../components/test-suite-detail';
import { Translations } from '../translations/english';
import { fetchTestSuitesData } from '../services/test-suite.service';

export const TestSuitePageComponent = (): JSX.Element => {
    const [testSuites, setTestSuites] = useState<ITestSuite[]>([]);

    const fetchInitialData = async () => {
        const testSuites = await fetchTestSuitesData();
        setTestSuites(testSuites);
    };

    useEffect(
        () => {
            fetchInitialData();
        },
        []
    );

    return (
        <div className='row mx-5 px-5'>
            <div className='column'>
                {
                    !testSuites.length ?
                        <h6>
                            {Translations.noData}
                        </h6>
                        :
                        <table className='table  table-striped'>
                            <tbody>
                                {
                                    testSuites.map(
                                        (testSuite: ITestSuite) =>
                                            <tr key={testSuite.id}>
                                                <TestSuiteDetailComponent testSuite={testSuite} />
                                            </tr>
                                    )
                                }
                            </tbody>
                        </table>
                }
            </div>
        </div >
    );
}