import { useState } from "react";
import { Button, Form, Input } from "antd";
import MediaSelection from "./MediaSelection";
import CategoryAndSubSelection from "./CategoryAndSubSelection";
import { useSavePage } from "../../../services/admin/admin.api";
import { useLocation } from "react-router-dom";

const CreatePage = () => {
  const location = useLocation();
  const themeName = location.state ? location.state.themeName : null;
  const [words, setWords] = useState([]);
  const { mutate } = useSavePage();
  const handleSavePage = (values) => {
    const pageData = {
      theme_name: themeName,
      page_name: values.page_name,
      rows: Number(values.rows),
      columns: Number(values.columns),
      blocks: values.blocks,
    };
    mutate(pageData);
  };
  return (
    <div className="mb-12 w-full">
      <Form onFinish={handleSavePage}>
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

        {/* SUB CATEGORY */}
        <div className="flex px-12">
          <CategoryAndSubSelection words={words} setWords={setWords} />
          {/* MEDIA SELECTION */}
          {words.length > 0 && <MediaSelection words={words} />}
        </div>
        {/* SUBMISSION */}
        <Form.Item className="mt-20 flex items-center justify-center">
          <Button
            size="large"
            htmlType="submit"
            className="h-[3.5rem] min-w-[15rem] border-gray-700 text-lg tracking-wide text-gray-600"
          >
            Create Page
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatePage;
