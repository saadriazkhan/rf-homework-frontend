import { FC } from 'react';
import { BrowserEnumerator } from '../../enumerators/browser.enum';
import { getEnumeratorKeys } from '../../helpers';
import { ITestPlan } from '../../interfaces/test-plan.interface';

export const EditTestPlanDialogComponent: FC<{
    testPlans: ITestPlan[];
    onTestPlanChangeEvent: (value: string, index: number) => void;
    onBrowserChangeEvent: (value: BrowserEnumerator, index: number) => void;
    onDeleteItemButtonClick: (testPlanIndex: number) => void;
}> = ({ testPlans, onBrowserChangeEvent, onDeleteItemButtonClick, onTestPlanChangeEvent }): JSX.Element => {
    return (
        <table className='table table-striped'>
            <tbody>
                {testPlans.map(
                    (testPlan: ITestPlan, index: number) =>
                        <tr key={index}>
                            <td className='row d-flex align-items-center'>
                                <div className='col'>
                                    <input
                                        className='w-100'
                                        type='text'
                                        value={testPlan.test_name}
                                        onChange={
                                            (event) => onTestPlanChangeEvent(event.target.value, index)
                                        }
                                    />
                                </div>

                                <div className='col-md-2'>
                                    <select
                                        value={testPlan.browser}
                                        onChange={
                                            (event) => onBrowserChangeEvent(event.target.value as BrowserEnumerator, index)
                                        }>
                                        {
                                            getEnumeratorKeys(BrowserEnumerator).map(
                                                (value) =>
                                                    <option
                                                        key={value}
                                                        value={BrowserEnumerator[value as keyof typeof BrowserEnumerator]}>
                                                        {value}
                                                    </option>
                                            )
                                        }
                                    </select>
                                </div>

                                <div className='col-md-1'>
                                    <button
                                        type='button'
                                        className='btn'
                                        onClick={
                                            () => onDeleteItemButtonClick(index)
                                        }>
                                        <h3 >&times;</h3>
                                    </button>
                                </div>
                            </td>
                        </tr>
                )}
            </tbody>
        </table>
    );
}