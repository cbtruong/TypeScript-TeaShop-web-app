import { Button, Input, notification, Select, Upload } from "antd";
import { Blog } from "../../../query/blog/type"; // Cập nhật đường dẫn nếu cần thiết
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { MdOutlineFileUpload } from "react-icons/md";
import { useEffect } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

interface CreateFormFields extends Blog {}
type CreateEditFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues: CreateFormFields = {
  id: "",
  comment_id: "",
  user_id: "",
  title: "",
  description: "",
  content: "",
  blog_status: "",
  create_date: new Date(),
  end_date: new Date(),
  view_total: 0,
  comment_total: 0,
  like_total: 0,
};

const BlogForm: React.FC<CreateEditFormProps> = ({ initForm }) => {
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
        // Cập nhật bài viết
        // await updateBlog({ _id: initForm.id }, data).then(() => {
        //   notification.success({
        //     message: "Cập nhật thành công",
        //   });
        //   reset();
        // });
        // return;
      }

      // Tạo mới bài viết
      // await createBlog(data).then(() => {
      //   notification.success({
      //     message: "Thêm thành công",
      //   });
      //   reset();
      // });
    } catch (err) {
      notification.error({
        message: "Có lỗi xảy ra, vui lòng kiểm tra lại",
      });
    }
  };

  return (
    <form action="POST" className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className="text-[16px] text-[grey]">Tiêu đề bài viết</p>
        <Controller
          name="title"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Nhập tiêu đề bài viết ..." {...field} />
          )}
        />

        <p role="alert" className="text-red-500">
          {errors.title?.type === "required" && "Vui lòng nhập tiêu đề bài viết"}
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
        <p className="text-[16px] text-[grey]">Nội dung</p>
        <Controller
          name="content"
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
        <p className="text-[16px] text-[grey]">Trạng thái bài viết</p>
        <Controller
          name="blog_status"
          control={control}
          render={({ field }) => (
            <Select
              showSearch
              placeholder="Chọn trạng thái bài viết"
              className="w-full h-[35px] rounded-[10px]"
              options={[
                { value: "published", label: "Đã xuất bản" },
                { value: "draft", label: "Nháp" },
              ]}
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
  );
}

export default BlogForm;
