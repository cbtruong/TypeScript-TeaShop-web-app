import { Product } from "../../../query/product/type";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

interface CreateFormFields extends Product {}
type CreateEditFormProps = {
  initForm?: CreateFormFields;
};

const defaultFormValues = {
  name: "",
  price: "",
  images: [
    "https://images.unsplash.com/photo-1509368665003-7b100e67d632?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ],
  description: "",
  color: "",
  collection: "",
  size: "",
};

const ProductForm: React.FC<CreateEditFormProps> = ({ initForm }) => {
  // const {
  //   control,
  //   formState: { errors },
  //   reset,
  //   handleSubmit,
  // } = useForm<CreateFormFields>({
  //   defaultValues: defaultFormValues,
  // });

  return (
    <div>
      hello world
    </div>
  )
}

export default ProductForm;