import { Button, Input, notification, Select, Upload } from "antd";
import { Product } from "../../../query/product/type";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { MdOutlineFileUpload } from "react-icons/md";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

interface CreateFormFields extends Product {}
type CreateEditFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues = {
  name: "",
  price: 0,
  description: "",
  category: "",
  productImages: [
    "https://images.unsplash.com/photo-1509368665003-7b100e67d632?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]
};

const categoryOptions = [
  {
    value: "Teas",
    label: "Teas",
  },
  {
    value: "Extras",
    label: "Extras",
  },
];

const ProductForm: React.FC<CreateEditFormProps> = ({ initForm }) => {
  const {
    control,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm<CreateFormFields>({
    defaultValues: defaultFormValues,
  });

  useEffect(() => {
    if (initForm?.id) {
      reset(initForm);
    } else {
      reset(defaultFormValues);
    }
  }, [initForm]);

  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    try {
      if (initForm) {
        // await updateArticle({ _id: initForm._id }, data).then(() => {
        //   notification.success({
        //     message: "Cập nhật thành công",
        //   });
        //   reset();
        // });
        // return;
      }

      // await createArticle(data).then(() => {
      //   notification.success({
      //     message: "Thêm thành công",
      //   });
      //   reset();
      // });
    } catch (err) {
      notification.error({
        message: "Có lỗi xảy ra vui lòng kiểm tra lại",
      });
    }
  };

  return (
    <form action="POST" className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-[16px] text-[grey]">Tên sản phẩm</p>
        <Controller
          name="name"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Nhập tên sản phẩm ..." {...field} />
          )}
        />

        <p role="alert" className="text-red-500">
          {errors.name?.type === "required" && "Vui lòng nhập tên sản phẩm"}
        </p>
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Giá bán</p>
        <Controller
          name="price"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Nhập giá sản phẩm ..." {...field} />
          )}
        />

        <p role="alert" className="text-red-500">
          {errors.name?.type === "required" && "Vui lòng nhập giá sản phẩm"}
        </p>
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Mô tả</p>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <ReactQuill
              theme="snow"
              value={field.value}
              onChange={field.onChange}
              className="300px"
            />
          )}
        />
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Danh mục</p>
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <Select
              showSearch
              placeholder="Select a person"
              className="w-full h-[35px] rounded-[10px]"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={categoryOptions}
              {...field}
            />
          )}
        />
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Hình ảnh</p>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture"
          maxCount={5}
          multiple
        >
          <Button icon={<MdOutlineFileUpload />}>Upload (Max: 5)</Button>
        </Upload>
      </div>
      <Button
        className="bg-blue-600 text-secondary font-semibold text-md py-3 hover:!bg-blue-600 hover:!text-white hover:!border-blue-600 shadow-sm shadow-blue-100 hover:!shadow-md hover:!shadow-blue-100 ml-auto"
        htmlType="submit"
      >
        {initForm ? "Cập nhật" : "Tạo mới"}
      </Button>
    </form>
  )
}

export default ProductForm;