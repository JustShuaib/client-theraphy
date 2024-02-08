/* eslint-disable react/prop-types */
import { Flex, Input } from 'antd';

const { TextArea } = Input;
const FirstPane = ({ onChange }) => {
    return (
        <div>
            <h3 className="pb-2">Template description</h3>
            <Flex vertical gap={32}>
                <TextArea
                    allowClear
                    showCount
                    maxLength={200}
                    onChange={onChange}
                    placeholder="This is a greeting exercise"
                    autoSize
                    style={{ height: 60, width: 280, resize: 'none' }} />
            </Flex>
        </div>
    )
}

export default FirstPane