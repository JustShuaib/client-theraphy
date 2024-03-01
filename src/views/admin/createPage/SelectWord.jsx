import { Form, Select, Spin } from "antd";
import { useFetchSubCategoryOrWord } from "../../../services/admin/admin.api";
import { IoIosArrowDown } from "react-icons/io";

const SelectWord = ({ data, setWords }) => {
  const { isPending } = useFetchSubCategoryOrWord();
  const filterOption = (input, option) =>
    (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const handleChange = (value) => {
    const selectedWords = value.map((val) =>
      data.find((word) => val === word.id),
    );
    setWords(selectedWords);
  };

  return (
    <div className="mt-6">
      <p className="mb-0.5 font-open-sans text-[13px]">Select Word</p>
      <Form.Item
        name="word"
        rules={[{ required: true, message: "Field is required" }]}
        className="w-[60%]"
      >
        <Select
          showSearch
          mode="multiple"
          placeholder="Select Word"
          optionFilterProp="children"
          suffixIcon={isPending ? <Spin /> : <IoIosArrowDown size={22} />}
          filterOption={filterOption}
          options={data.map((category) => ({
            label: category.name,
            value: category.id,
          }))}
          size="large"
          loading={isPending}
          onChange={handleChange}
        />
      </Form.Item>
    </div>
  );
};

export default SelectWord;
