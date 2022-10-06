import { ChangeEvent, useState } from 'react';
import { FC } from 'react';
import { BrowserEnumerator } from '../../enumerators/browser.enum';
import { validateTestSuite } from '../../helpers';
import { ITestPlan } from '../../interfaces/test-plan.interface';
import { ITestSuite } from '../../interfaces/test-suite.interface';
import { BackdropBlackTransparent, DialogBody, DialogWidth } from '../../styles';
import { Translations } from '../../translations/english';
import { EditTestPlanDialogComponent } from './edit-test-plan';

export const EditTestSuiteDialogComponent: FC<{
    testSuite: ITestSuite,
    onClose: () => void,
    onSubmit: (testSuite: ITestSuite) => void
}> = ({ testSuite: incomingTestSuite, onClose, onSubmit }): JSX.Element => {
    const [testSuite, setTestSuite] = useState<ITestSuite>(incomingTestSuite);

    const onTestSuiteNameChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        setTestSuite({
            ...testSuite,
            test_suite_name: event.target.value
        });
    }

    const onAddNewTestPlanButtonClick = (): void => {
        const newEmpltyTestPlan: ITestPlan = {
            browser: BrowserEnumerator.Chrome,
            instruction_count: 1,
            test_name: ''
        }

        setTestSuite({
            ...testSuite,
            test_plans: [...testSuite.test_plans, newEmpltyTestPlan]
        });
    }

    const onTestPlanChangeEvent = (value: string, index: number): void => {
        setTestSuite({
            ...testSuite,
            test_plans: testSuite.test_plans.map(
                (item, itemIndex) => itemIndex === index ? ({ ...item, test_name: value }) : item
            )
        });
    }

    const onBrowserChangeEvent = (value: BrowserEnumerator, index: number): void => {
        setTestSuite({
            ...testSuite,
            test_plans: testSuite.test_plans.map(
                (item, itemIndex) => itemIndex === index ? ({ ...item, browser: value }) : item
            )
        });
    }

    // since I dont have id coming from backend for it atm
    const onDeleteItemButtonClick = (testPlanIndex: number): void => {
        const testplans = [...testSuite.test_plans];

        testplans.splice(testPlanIndex, 1);

        setTestSuite({
            ...testSuite,
            test_plans: testplans
        });
    };

    const onSaveButtonClick = () => {
        if (validateTestSuite(testSuite))
            onSubmit(testSuite);
        else
            console.log('not valid. Show an error bar');
    }

    return (
        <div className='modal d-inline' style={BackdropBlackTransparent}>
            <div className='modal-dialog'>
                <div className='modal-content' style={DialogWidth}>
                    <div className='modal-header'>
                        <h5 className='modal-title'>
                            {Translations.testSuiteDialog.editTestSuite}
                        </h5>
                        <button type='button' className='btn' onClick={onClose}>
                            <h3 >&times;</h3>
                        </button>
                    </div>
                    <div className='modal-body'>
                        
                        <div className='row'>
                            <div className='col'>
                                <span>
                                    {Translations.testSuiteDialog.testSuiteName}:
                                    <input
                                        className='mx-3'
                                        type='text'
                                        value={testSuite.test_suite_name}
                                        onChange={onTestSuiteNameChangeEvent}
                                    />
                                </span>

                            </div>
                        </div>
                        <div className='row mt-4' style={DialogBody}>
                            <div className='col m-2'>
                                <EditTestPlanDialogComponent
                                    testPlans={testSuite.test_plans}
                                    onBrowserChangeEvent={onBrowserChangeEvent}
                                    onDeleteItemButtonClick={onDeleteItemButtonClick}
                                    onTestPlanChangeEvent={onTestPlanChangeEvent}
                                />
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-4'>
                                <button
                                    type='button'
                                    className='btn btn-info'
                                    onClick={onAddNewTestPlanButtonClick}
                                >
                                    {Translations.testSuiteDialog.addNewTestPlan}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='modal-footer'>
                        <button
                            type='button'
                            className='btn btn-primary'
                            onClick={onSaveButtonClick}
                            disabled={!validateTestSuite(testSuite)}
                        >
                            {Translations.save}
                        </button>
                        <button
                            type='button'
                            className='btn btn-secondary'
                            onClick={onClose}
                        >
                            {Translations.cancel}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}