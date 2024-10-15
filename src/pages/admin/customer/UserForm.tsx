import { Button, Input, notification, Select, Upload } from "antd";
import { User } from "../../../query/user/type";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { MdOutlineFileUpload } from "react-icons/md";
import { useEffect } from "react";

interface CreateFormFields extends User { }
type CreateEditFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues = {
  first_name: "",
  last_name: "",
  image: "https://images.unsplash.com/photo-1509368665003-7b100e67d632?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  types_customer: "",
  role: "",
  status_active: true,
  address: "",
  phone: "",
  state: "",
};

const typeCustomer = [
  {
    value: "Guest",
    label: "Guest",
  },
  {
    value: "Customer",
    label: "Customer",
  },
];

const roleAccount = [
  {
    value: "Guest",
    label: "Guest",
  },
  {
    value: "Customer",
    label: "Customer",
  },
];

const statuscActive = [
  {
    value: "Guest",
    label: "Guest",
  },
  {
    value: "Customer",
    label: "Customer",
  },
];

const stateAccount = [
  {
    value: "Guest",
    label: "Guest",
  },
  {
    value: "Customer",
    label: "Customer",
  },
];

const UserForm: React.FC<CreateEditFormProps> = ({ initForm }) => {
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
        <p className="text-[16px] text-[grey]">First Name</p>
        <Controller
          name="first_name"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Enter first name ..." {...field} />
          )}
        />

        <p role="alert" className="text-red-500">
          {errors.first_name?.type === "required" && "Vui lòng nhập tên sản phẩm"}
        </p>
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Last Name</p>
        <Controller
          name="last_name"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Nhập giá sản phẩm ..." {...field} />
          )}
        />

        <p role="alert" className="text-red-500">
          {errors.last_name?.type === "required" && "Vui lòng nhập giá sản phẩm"}
        </p>
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Type Customer</p>
        <Controller
          name="types_customer"
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
              options={typeCustomer}
              {...field}
            />
          )}
        />
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Role</p>
        <Controller
          name="role"
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
              options={roleAccount}
              {...field}
            />
          )}
        />
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Status Active</p>
        <Controller
          name="status_active"
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
              options={statuscActive}
              {...field}
            />
          )}
        />
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Address</p>
        <Controller
          name="address"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Enter first name ..." {...field} />
          )}
        />

        <p role="alert" className="text-red-500">
          {errors.address?.type === "required" && "Vui lòng nhập tên sản phẩm"}
        </p>
      </div>
      <div>
        <p className="text-[16px] text-[grey]">Address</p>
        <Controller
          name="phone"
          control={control}
          rules={{
            required: true,
          }}
          render={({ field }) => (
            <Input type="text" placeholder="Enter first name ..." {...field} />
          )}
        />

        <p role="alert" className="text-red-500">
          {errors.phone?.type === "required" && "Vui lòng nhập tên sản phẩm"}
        </p>
      </div>
      <div>
        <p className="text-[16px] text-[grey]">State</p>
        <Controller
          name="status_active"
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
              options={stateAccount}
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

export default UserForm;