import { FC } from 'react';
import { ITestPlan } from '../interfaces/test-plan.interface';

export const TestPlansComponent: FC<{ testPlans: ITestPlan[] }> = ({ testPlans }): JSX.Element => {
    return (
        <>
            {
                testPlans.map(
                    ({ browser, instruction_count, test_name }, index) =>
                        <div key={index} className='row my-2'>
                            <div className='col-md-5'>
                                {test_name}
                            </div>
                            <div className='col-md-2'>
                                {browser}
                            </div>
                            <div className='col'>
                                {`${instruction_count} ${instruction_count === 1 ? 'step' : 'steps'}`}
                            </div>
                        </div>
                )
            }
        </>
    );
}