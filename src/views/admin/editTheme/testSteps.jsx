/* eslint-disable react/prop-types */
// import { useState } from 'react';
import { Steps } from 'antd';

const TestSteps = ({ current, setCurrent }) => {
    // const [current, setCurrent] = useState(0);

    const onChange = (value) => {
        console.log('onChange:', value);
        setCurrent(value);
    };

    return (
        <>
            <Steps
                current={current}
                onChange={onChange}
                direction="vertical"
                items={[
                    {
                        title: 'Step 1',
                        description: 'Create a description',
                    },
                    {
                        title: 'Step 2',
                        description: 'Add relevant audio files',
                    },
                    {
                        title: 'Step 3',
                        description: 'Confirm Exercise',
                    },
                ]}
            />
        </>
    );
};

export default TestSteps;