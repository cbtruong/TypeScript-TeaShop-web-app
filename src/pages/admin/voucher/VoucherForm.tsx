import { Button, Input, notification, DatePicker } from "antd";
import { Voucher } from "../../../query/voucher/type";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useEffect } from "react";
import moment from "moment";

interface CreateFormFields extends Voucher {}
type CreateEditFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues = {
  name: "",
  type: "",
  discountPercent: 0,
  discountValue: 0,
  minCartValue: 0,
  startDate: moment().toDate(),  // Convert moment to Date
  endDate: moment().toDate(),    // Convert moment to Date
};

const VoucherForm: React.FC<CreateEditFormProps> = ({ initForm }) => {
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
      reset({
        ...initForm,
        startDate: moment(initForm.startDate).toDate(),
        endDate: moment(initForm.endDate).toDate(),
      });
    } else {
      reset(defaultFormValues);
    }
  }, [initForm]);

  const onSubmit: SubmitHandler<CreateFormFields> = async (data) => {
    try {
      if (initForm) {
        // Update voucher
      } else {
        // Create new voucher
      }
    } catch (err) {
      notification.error({
        message: "Có lỗi xảy ra vui lòng kiểm tra lại",
      });
    }
  };

  return (
    <form action="POST" className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      {/* Name field */}
      <div>
        <p className="text-[16px] text-[grey]">Tên Voucher</p>
        <Controller
          name="name"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input type="text" placeholder="Nhập tên voucher..." {...field} />
          )}
        />
        <p role="alert" className="text-red-500">
          {errors.name?.type === "required" && "Vui lòng nhập tên voucher"}
        </p>
      </div>

      {/* Type field */}
      <div>
        <p className="text-[16px] text-[grey]">Loại</p>
        <Controller
          name="type"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input type="text" placeholder="Nhập loại voucher..." {...field} />
          )}
        />
        <p role="alert" className="text-red-500">
          {errors.type?.type === "required" && "Vui lòng nhập loại voucher"}
        </p>
      </div>

      {/* Discount Percent field */}
      <div>
        <p className="text-[16px] text-[grey]">Giảm %</p>
        <Controller
          name="discountPercent"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="number"
              placeholder="Nhập phần trăm giảm..."
              {...field}
            />
          )}
        />
        <p role="alert" className="text-red-500">
          {errors.discountPercent?.type === "required" &&
            "Vui lòng nhập phần trăm giảm"}
        </p>
      </div>

      {/* Discount Value field */}
      <div>
        <p className="text-[16px] text-[grey]">Giá trị giảm</p>
        <Controller
          name="discountValue"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <Input
              type="number"
              placeholder="Nhập giá trị giảm..."
              {...field}
            />
          )}
        />
        <p role="alert" className="text-red-500">
          {errors.discountValue?.type === "required" && "Vui lòng nhập giá trị"}
        </p>
      </div>

      {/* Min Cart Value field */}
      <div>
        <p className="text-[16px] text-[grey]">Giá trị đơn tối thiểu</p>
        <Controller
          name="minCartValue"
          control={control}
          render={({ field }) => (
            <Input
              type="number"
              placeholder="Nhập giá trị đơn tối thiểu..."
              {...field}
            />
          )}
        />
      </div>

      {/* Start Date field */}
      <div>
        <p className="text-[16px] text-[grey]">Ngày bắt đầu</p>
        <Controller
          name="startDate"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              value={moment(field.value)}
              onChange={(date) => {
                if (!date) return;
                field.onChange(date.toDate());
              }}
            />
          )}
        />
      </div>

      {/* End Date field */}
      <div>
        <p className="text-[16px] text-[grey]">Ngày kết thúc</p>
        <Controller
          name="endDate"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <DatePicker
              value={moment(field.value)}
              onChange={(date) => {
                if (!date) return;
                field.onChange(date.toDate());
              }}
            />
          )}
        />
      </div>

      {/* Submit button */}
      <div className="flex items-center justify-end">
        <Button type="primary" htmlType="submit">
          {initForm ? "Cập nhật" : "Tạo"}
        </Button>
      </div>
    </form>
  );
};

export default VoucherForm;
