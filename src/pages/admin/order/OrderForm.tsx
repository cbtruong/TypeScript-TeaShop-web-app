import { Button, Input, notification, Select } from "antd";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useEffect } from "react";

interface CreateFormFields {
    id: string;
    user_id: string;
    recipient_address: string;
    recipient_phone_number: string;
    status_order: string;
    payment_methods: string;
    note: string;
    total_amount: number;
    create_date: Date;
    state: string;
}

type CreateEditFormProps = {
    initForm?: CreateFormFields;
};

const defaultFormValues: CreateFormFields = {
    id: "",
    user_id: "",
    recipient_address: "",
    recipient_phone_number: "",
    status_order: "",
    payment_methods: "",
    note: "",
    total_amount: 0,
    create_date: new Date(),
    state: "",
};

const statusOptions = [
    { value: "pending", label: "Pending" },
    { value: "completed", label: "Completed" },
    { value: "canceled", label: "Canceled" },
];

const paymentOptions = [
    { value: "credit_card", label: "Credit Card" },
    { value: "paypal", label: "PayPal" },
    { value: "cash", label: "Cash" },
];

const OrderForm: React.FC<CreateEditFormProps> = ({ initForm }) => {
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
                // Update order logic goes here
                // await updateOrder({ _id: initForm.id }, data).then(() => {
                //     notification.success({
                //         message: "Order updated successfully",
                //     });
                //     reset();
                // });
                return;
            }

            // Create order logic goes here
            // await createOrder(data).then(() => {
            //     notification.success({
            //         message: "Order created successfully",
            //     });
            //     reset();
            // });
        } catch (err) {
            notification.error({
                message: "An error occurred, please check again",
            });
        }
    };

    return (
        <form action="POST" className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <p className="text-[16px] text-[grey]">User ID</p>
                <Controller
                    name="user_id"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input type="text" placeholder="Enter user ID ..." {...field} />
                    )}
                />
                <p role="alert" className="text-red-500">
                    {errors.user_id?.type === "required" && "Please enter user ID"}
                </p>
            </div>

            <div>
                <p className="text-[16px] text-[grey]">Recipient Address</p>
                <Controller
                    name="recipient_address"
                    control={control}
                    render={({ field }) => (
                        <Input type="text" placeholder="Enter recipient address ..." {...field} />
                    )}
                />
            </div>

            <div>
                <p className="text-[16px] text-[grey]">Recipient Phone Number</p>
                <Controller
                    name="recipient_phone_number"
                    control={control}
                    render={({ field }) => (
                        <Input type="text" placeholder="Enter recipient phone number ..." {...field} />
                    )}
                />
            </div>

            <div>
                <p className="text-[16px] text-[grey]">Order Status</p>
                <Controller
                    name="status_order"
                    control={control}
                    render={({ field }) => (
                        <Select
                            showSearch
                            placeholder="Select order status"
                            className="w-full h-[35px] rounded-[10px]"
                            options={statusOptions}
                            {...field}
                        />
                    )}
                />
            </div>

            <div>
                <p className="text-[16px] text-[grey]">Payment Method</p>
                <Controller
                    name="payment_methods"
                    control={control}
                    render={({ field }) => (
                        <Select
                            showSearch
                            placeholder="Select payment method"
                            className="w-full h-[35px] rounded-[10px]"
                            options={paymentOptions}
                            {...field}
                        />
                    )}
                />
            </div>

            <div>
                <p className="text-[16px] text-[grey]">Total Amount</p>
                <Controller
                    name="total_amount"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                        <Input type="number" placeholder="Enter total amount ..." {...field} />
                    )}
                />
                <p role="alert" className="text-red-500">
                    {errors.total_amount?.type === "required" && "Please enter total amount"}
                </p>
            </div>

            <div>
                <p className="text-[16px] text-[grey]">Note</p>
                <Controller
                    name="note"
                    control={control}
                    render={({ field }) => (
                        <Input.TextArea placeholder="Enter note ..." {...field} />
                    )}
                />
            </div>

            <Button
                className="bg-blue-600 text-secondary font-semibold text-md py-3 hover:!bg-blue-600 hover:!text-white hover:!border-blue-600 shadow-sm shadow-blue-100 hover:!shadow-md hover:!shadow-blue-100 ml-auto"
                htmlType="submit"
            >
                {initForm ? "Update" : "Create"}
            </Button>
        </form>
    );
};

export default OrderForm;
