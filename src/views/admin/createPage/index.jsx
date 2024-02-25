import { useState } from "react";
import { TreeSelect, Form, Input, Button } from "antd";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

const CreatePage = () => {
  const [activeView, setActiveView] = useState(0);

  const views = {
    0: <SelectPageName />,
    1: <SelectPageWord onBack={() => setActiveView(0)} />,
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <Form.Provider
        onFormFinish={(name) => {
          name === "page_name" && setActiveView(1);
        }}
        className="h-full"
      >
        <p className="mt-14 text-4xl font-semibold text-center">
          {activeView === 0 ? "Enter Page Name" : "Select Words"}
        </p>
        {views[activeView]}
      </Form.Provider>
    </div>
  );
};

export default CreatePage;

const SelectPageName = () => {
  const [form] = Form.useForm();

  return (
    <div className="-mt-32 flex flex-col h-full overflow-x-hidden justify-center items-center w-full">
      <Form form={form} name="page_name" layout="inline">
        <Form.Item
          name="page_name"
          rules={[
            {
              required: true,
              message: "Please input a page name",
            },
          ]}
        >
          <Input
            placeholder="Enter page name"
            className="min-w-[29rem] border text-lg text-[#1f2937] h-14 rounded-2xl placeholder:text-lg"
          />
        </Form.Item>
        <button
          type="submit"
          className="h-14 text-white rounded-2xl shadow  hover:scale-105 duration-200 text-xl font-open-sans min-w-36 from-purple-500 to-purple-700 bg-gradient-to-br hover:!bg-purple-800"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};
const SelectPageWord = ({ onBack }) => {
  const [value, setValue] = useState("");
  const onChange = (value) => {
    setValue(value);
  };
  console.log({ value });
  const treeData = [
    {
      value: "parent 1",
      title: "parent 1",
      children: [
        {
          value: "parent 1-0",
          title: "parent 1-0",
          children: [
            {
              value: "leaf1",
              title: "leaf1",
            },
            {
              value: "leaf2",
              title: "leaf2",
            },
          ],
        },
        {
          value: "parent 1-1",
          title: "parent 1-1",
          children: [
            {
              value: "leaf3",
              title: (
                <b
                  style={{
                    color: "#08c",
                  }}
                >
                  leaf3
                </b>
              ),
            },
          ],
        },
      ],
    },
  ];
  return (
    <div className="min-w-80">
      <TreeSelect
        showSearch
        style={{
          width: "100%",
        }}
        value={value}
        dropdownStyle={{
          maxHeight: 400,
          overflow: "auto",
        }}
        placeholder="Please select"
        allowClear
        //   treeDefaultExpandAll
        onChange={onChange}
        treeData={treeData}
        size="large"
      />
      <div className="flex items-center gap-x-28 mx-auto">
        <Button onClick={onBack} icon={<IoMdArrowBack />}>
          Back
        </Button>
        <Button icon={<IoMdArrowForward />}>Next</Button>
      </div>
    </div>
  );
};
