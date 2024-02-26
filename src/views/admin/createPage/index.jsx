import { useState } from "react";
import { TreeSelect, Form, Input, Button } from "antd";
import {
  IoMdArrowForward,
  IoIosArrowDown,
  IoIosCloseCircle,
} from "react-icons/io";
import { TbBookOff } from "react-icons/tb";

const CreatePage = () => {
  return (
    <div className="w-full">
      <Form.Provider
        onFormFinish={(name, { values, forms }) => {
          if (name === "page_name") {
            const { page_name } = forms;
            const pageName = page_name.getFieldValue("page_name") || "";
            console.log({ pageName, values });
            page_name.setFieldsValue({ page_name: values?.page_name });
          }
        }}
      >
        <Form.Item
          name="page_name"
          rules={[
            {
              required: true,
              message: "Please input a page name",
            },
          ]}
          className="mx-auto mt-6 w-fit"
        >
          <Input
            placeholder="Enter page name"
            className="h-14 text-4xl font-semibold text-[#151b24] placeholder:text-4xl placeholder:text-[#686e79]"
            variant="borderless"
            autoFocus
          />
        </Form.Item>
        <div>
          <SelectPageWord />
        </div>
        {/* <p className="mt-14 text-center text-4xl font-semibold">Select Words</p> */}
        {/* {views[activeView]} */}
      </Form.Provider>
    </div>
  );
};

export default CreatePage;

// const SelectPageName = () => {
//   const [form] = Form.useForm();

//   return (
//     <div className="-mt-32 flex h-full w-full flex-col items-center justify-center overflow-x-hidden">
//       <Form form={form} name="page_name" layout="inline">
//         <Form.Item
//           name="page_name"
//           rules={[
//             {
//               required: true,
//               message: "Please input a page name",
//             },
//           ]}
//         >
//           <Input
//             placeholder="Enter page name"
//             className="h-14 min-w-[29rem] rounded-2xl border text-lg text-[#1f2937] placeholder:text-lg"
//           />
//         </Form.Item>
//         <button
//           type="submit"
//           className="h-14 min-w-36 rounded-2xl bg-gradient-to-br  from-purple-500 to-purple-700 font-open-sans text-xl text-white shadow duration-200 hover:scale-105 hover:!bg-purple-800"
//         >
//           Submit
//         </button>
//       </Form>
//     </div>
//   );
// };
const SelectPageWord = () => {
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
    <div className="pl-12">
      <p className="mb-1 text-sm font-medium text-gray-800">Select word</p>
      <TreeSelect
        showSearch
        className="!h-11 w-full max-w-[43%]"
        value={value}
        dropdownStyle={{
          maxHeight: 400,
          overflow: "auto",
        }}
        placeholder={"Select"}
        suffixIcon={<IoIosArrowDown size={22} />}
        allowClear={{
          clearIcon: <IoIosCloseCircle size={17} />,
        }}
        notFoundContent={
          <div className="flex flex-col items-center justify-center gap-y-2 text-lg">
            <TbBookOff size={26} />
            <span>Word not available</span>
          </div>
        }
        onChange={onChange}
        treeData={treeData}
        size="large"
        // loading={true}
      />
      <div className="mt-52 flex items-center justify-around">
        <Button
          icon={<IoMdArrowForward className="-mb-0.5" />}
          className="h-12 min-w-32 rounded-xl border border-[black] text-xl"
        >
          Next
        </Button>
      </div>
    </div>
  );
};
