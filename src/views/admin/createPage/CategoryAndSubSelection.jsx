import { useEffect, useState } from "react";
import { Button, Form, Input, Space } from "antd";
import { usePerformCategorySearch } from "../../../services/admin/admin.api";
import { BiSearch } from "react-icons/bi";
import SelectSubCategory from "./SelectSubCategory";
import SelectWord from "./SelectWord";
import SelectBlock from "./SelectBlock";

const CategoryAndSubSelection = ({ words, setWords }) => {
  const [categoryLevel, setCategoryLevel] = useState("categories");
  const [searchTerm, setSearchTerm] = useState("");
  const { mutate, isPending, data } = usePerformCategorySearch();
  useEffect(() => {
    if (Object.prototype.hasOwnProperty.call(data || {}, "words_data"))
      setCategoryLevel("word");
    else if (Object.prototype.hasOwnProperty.call(data || {}, "categories"))
      setCategoryLevel("sub-category");
    else if (Object.prototype.hasOwnProperty.call(data || {}, "message"))
      setCategoryLevel("not-found");
  }, [data]);

  return (
    <div className="basis-2/3">
      <Space.Compact className="mt-5 w-[68%]" size="large">
        <div className="w-full">
          <Form.Item
            name="category"
            className="w-full"
            rules={[{ required: true, message: "Field is required" }]}
          >
            <Input
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Categories"
              className="w-full bg-[#fbfbfc] placeholder:text-gray-400"
            />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            type="primary"
            className="!w-[4rem] bg-gray-500 text-[1.3rem] duration-300 hover:scale-105"
            icon={<BiSearch className="text-[22px]" />}
            onClick={() => mutate(searchTerm)}
            loading={isPending}
          />
        </Form.Item>
      </Space.Compact>
      {categoryLevel === "categories" ? (
        <SelectSubCategory data={data?.categories} />
      ) : categoryLevel === "word" ? (
        <SelectWord data={data?.words_data} setWords={setWords} />
      ) : categoryLevel === "not-found" ? (
        <p>Not found</p>
      ) : null}
      {/* <SelectSubCategory
        data={[
          {
            id: 1,
            name: "Breakfast",
          },
          {
            id: 2,
            name: "Brunch",
          },
          {
            id: 3,
            name: "Lunch",
          },
          {
            id: 4,
            name: "Dinner",
          },
        ]}
      /> */}
      {/* <SelectWord
        setWords={setWords}
        data={[
          {
            name: "Tofu",
            id: 1,
            table_name: "Munch",
            image: "https://www.example.com/",
            audio: "https://www.test.com/audio.mp3",
            video: "https://video.com/",
          },
          {
            name: "Pizza",
            id: 2,
            table_name: "Lunch",
            image: "https://www.example.com/",
            audio: "https://www.test.com/audio.mp3",
            video: "https://video.com/",
          },
          {
            name: "Lasagne",
            id: 3,
            table_name: "Dessert",
            image: "https://www.example.com/",
            audio: "https://www.test.com/audio.mp3",
            video: "https://video.com/",
          },
          {
            name: "Dodo",
            id: 4,
            table_name: "Toppings",
            image: "https://www.example.com/",
            audio: "https://www.test.com/audio.mp3",
            video: "https://video.com/",
          },
        ]}
      /> */}
      {words.length > 0 && <SelectBlock words={words} />}
    </div>
  );
};

export default CategoryAndSubSelection;
