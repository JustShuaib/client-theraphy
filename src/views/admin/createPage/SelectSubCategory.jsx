import { useFetchSubCategoryOrWord } from "../../../services/admin/admin.api";
import { Select, Spin, Form } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import SelectWord from "./SelectWord";

const SelectSubCategory = ({ data }) => {
  const { isPending, mutate } = useFetchSubCategoryOrWord();

  const filterOption = (input, option) => {
    console.log({ input, option });
    return (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  };
  const SearchItem = ({ add, field }) => {
    return (
      <Form.Item {...field} key={field.key}>
        <Select
          showSearch
          placeholder="Select a Sub Category"
          optionFilterProp="children"
          onChange={(value) => {
            console.log(`selected ${value}`);
            mutate(
              {
                id: value,
                category_level: data?.category_level,
              },
              {
                onSuccess: add,
              },
            );
          }}
          suffixIcon={isPending ? <Spin /> : <IoIosArrowDown size={22} />}
          filterOption={filterOption}
          options={data?.map((category) => ({
            label: category.name,
            value: category.id,
          }))}
          size="large"
          loading={isPending}
        />
      </Form.Item>
    );
  };
  return (
    <div className="mt-6 w-2/3">
      <Form.List name="sub-category">
        {(fields, { add }) => {
          return (
            <>
              {fields.map((field) => (
                <>
                  <p className="mb-0.5 font-open-sans text-[13px]">
                    Select a Sub Category
                  </p>
                  <SearchItem add={add} field={field} />

                  {/* **************** */}
                  {/* Conditionally render WordData or another Select based on data structure */}
                  {data && data.word_data ? (
                    <SelectWord data={data.word_data} />
                  ) : (
                    <>
                      <p className="mb-0.5 font-open-sans text-[13px]">
                        Select another Sub Category
                      </p>

                      <SearchItem add={add} field={field} />
                    </>
                  )}
                </>
              ))}
            </>
          );
        }}
      </Form.List>
      {/* <p className="mb-0.5 font-open-sans text-[13px]">Select a Sub Category</p>
      <Select
        showSearch
        placeholder="Select a Sub Category"
        optionFilterProp="children"
        onChange={onChange}
        suffixIcon={isPending ? <Spin /> : <IoIosArrowDown size={22} />}
        filterOption={filterOption}
        options={selectOptions.map((category) => ({
          label: category.name,
          value: category.id,
        }))}
        size="large"
        className="min-w-[22rem]"
        loading={isPending}
      /> */}

      {/* ************************************* */}
      {/* <Form
        name="dynamic_form_item"
        {...formItemLayoutWithOutLabel}
        onFinish={onFinish}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.List
          name="names"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error("At least 2 passengers"));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => {
            console.log({ fields });
            return (
              <>
                {fields.map((field, index) => (
                  <Form.Item
                    {...(index === 0
                      ? formItemLayout
                      : formItemLayoutWithOutLabel)}
                    label={index === 0 ? "Passengers" : ""}
                    required={false}
                    key={field.key}
                  >
                    <Form.Item
                      {...field}
                      validateTrigger={["onChange", "onBlur"]}
                      rules={[
                        {
                          required: true,
                          whitespace: true,
                          message:
                            "Please input passenger's name or delete this field.",
                        },
                      ]}
                      noStyle
                    >
                      <Input
                        placeholder="passenger name"
                        style={{
                          width: "60%",
                        }}
                      />
                    </Form.Item>
                    {fields.length > 1 ? (
                      <BiCircle
                        className="dynamic-delete-button"
                        onClick={() => remove(field.name)}
                      />
                    ) : null}
                  </Form.Item>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    style={{
                      width: "60%",
                    }}
                    icon={<BiPlus />}
                  >
                    Add field
                  </Button>
                  <Form.ErrorList errors={errors} />
                </Form.Item>
              </>
            );
          }}
        </Form.List>
      </Form> */}
    </div>
  );
};

export default SelectSubCategory;

// Former fields
//  {
//   return (
//     <>
//       <p className="mb-0.5 font-open-sans text-[13px]">
//         Select a Sub Category
//       </p>
//       <Form.Item {...fields}>
//         <Select
//           showSearch
//           placeholder="Select a Sub Category"
//           optionFilterProp="children"
//           onChange={async (val) => {
//             console.log(`selected ${val}`);
//             try {
//               const res = await simulateServerRequest();
//               console.log({ res });
//               if (res) add();
//             } catch (err) {
//               console.log(err);
//             }
//           }}
//           // onChange={(value) => {
//           //   console.log(`selected ${value}`);
//           //   mutate(
//           //     {
//           //       id: value,
//           //       category_level: data?.category_level,
//           //     },
//           //     {
//           //       onSuccess: () => add(),
//           //     },
//           //   );
//           // }}
//           suffixIcon={
//             isPending ? <Spin /> : <IoIosArrowDown size={22} />
//           }
//           filterOption={filterOption}
//           options={data?.map((category) => ({
//             label: category.name,
//             value: category.id,
//           }))}
//           size="large"
//           loading={isPending}
//         />
//       </Form.Item>
//       {/* <p className="mb-0.5 font-open-sans text-[13px]">
//         Select a Sub Category
//       </p>
//       <Select
//         showSearch
//         placeholder="Select a Sub Category"
//         optionFilterProp="children"
//         onChange={onChange}
//         suffixIcon={
//           isPending ? <Spin /> : <IoIosArrowDown size={22} />
//         }
//         filterOption={filterOption}
//         options={selectOptions.map((category) => ({
//           label: category.name,
//           value: category.id,
//         }))}
//         size="large"
//         className="min-w-[22rem]"
//         loading={isPending}
//       /> */}
//     </>
//   );
// }}
