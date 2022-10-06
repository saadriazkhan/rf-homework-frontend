import { FC } from 'react';
import { IconRight } from '../styles/icons/icon-right';
import { ITestSuite } from '../interfaces/test-suite.interface';
import { CursorPointer } from '../styles';
import { Translations } from '../translations/english';
import { useState } from 'react';
import { TestPlansComponent } from './test-plans';
import { IconDown } from '../styles/icons/icon-down';
import { EditTestSuiteDialogComponent } from '../dialogs/edit-test-suite/edit-test-suite';
import { updateTestSuiteData } from '../services/test-suite.service';

export const TestSuiteDetailComponent: FC<{ testSuite: ITestSuite }> = ({ testSuite }): JSX.Element => {
    const [showTestPlans, setShowTestPlans] = useState<boolean>(false);
    const [openEditDialog, setOpenEditDialog] = useState<boolean>(false);
    const { test_plans, test_suite_name } = testSuite;

    const onTestPlanRowClick = (): void => {
        setShowTestPlans(!showTestPlans);
    };

    const onEditButtonClick = (): void => {
        setOpenEditDialog(true);
    };

    const onDialogCloseEvent = (): void => {
        setOpenEditDialog(false);
    };

    const onEditDialogSubmitEvent = (testSuite: ITestSuite): void => {
        // do the api call here and then close the dialog or else throw error
        updateTestSuiteData(testSuite)
            .then(
                () => {
                    onDialogCloseEvent();
                }
            ).catch(
                () => console.log('handler error')
            );
    }

    return (
        <td className='row d-flex align-items-center px-4'>
            <div className='row col' style={CursorPointer} onClick={onTestPlanRowClick}>
                <div className='col-md-1'>
                    {
                        showTestPlans ?
                            <IconDown />
                            :
                            <IconRight />
                    }
                </div>
                <div className='col'>
                    <strong>
                        {test_suite_name || ''}
                    </strong>
                </div>

                <div className='col-md-2'>
                    {
                        `${test_plans.length} ${test_plans.length === 1 ? 'test' : 'tests'}`
                    }
                </div>
            </div>

            <div className='col-md-1'>
                <button className='btn btn-primary' onClick={onEditButtonClick} >
                    {Translations.edit}
                </button>
            </div>

            <div className='row'>
                <div className='offset-md-1'>
                    {showTestPlans ? <TestPlansComponent testPlans={test_plans} /> : null}
                </div>
            </div>

            {
                openEditDialog ?
                    <EditTestSuiteDialogComponent
                        testSuite={testSuite}
                        onClose={onDialogCloseEvent}
                        onSubmit={onEditDialogSubmitEvent}
                    />
                    :
                    null
            }
        </td>
    );
}