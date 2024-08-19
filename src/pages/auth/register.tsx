import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Background from "../../assets/background_login.svg";
import GoogleIcon from "../../assets/google_icon.svg";
import { Link } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
  rePassword: string;
};

const Register = () => {
  const { control, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const emailValue = watch("email", "");
  const passwordValue = watch("password", "");
  const rePasswordValue = watch("rePassword", "");

  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    alert("REGISTER SUCCESS");
  };

  return (
    <div className="w-full h-[100vh] overflow-hidden relative">
      <img
        src={Background}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <Link to='/' className="absolute top-20 right-96"><i className='bx bx-x text-white text-h1'></i></Link>
      <div className="absolute w-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-950 bg-opacity-50 p-8 rounded shadow-lg">
        <form className="px-[20px] py-[20px] text-white text-[18px]" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-[64px] text-center">REGISTER</h2>
          <div className="flex flex-row space-x-1 justify-center">
            <p>Already a member?</p>
            <Link to="/auth/login" className="text-primary">
              Login
            </Link>
          </div>
          <div className="mt-[20px] relative">
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Data is invalid."
                },
                minLength: {
                  value: 10,
                  message: "Email must contain at least 10 characters."
                },
                maxLength: {
                  value: 36,
                  message: "Email must not exceed 36 characters."
                },
              }}
              render={({ field }) => (
                <input
                  type="email"
                  id="email"
                  {...field}
                  className="w-full bg-transparent border-b-2 border-white text-white focus:outline-none pt-6 peer"
                />
              )}
            />
            <label htmlFor="email"
              className={`absolute left-0 transition-all duration-300 transform ${emailValue ? "-translate-y-1" : "translate-y-6"} peer-focus:-translate-y-1`}
            >
              Email
            </label>
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>
          <div className="mt-[30px] relative">
            <Controller
              name="password"
              control={control}
              rules={{
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must contain at least 8 characters."
                },
                maxLength: {
                  value: 30,
                  message: "Password must not exceed 30 characters."
                },
                pattern: {
                  value: /^[0-9a-zA-Z!@#$%*]+$/,
                  message: "Password must only contain the characters 0-9, a-z, A-Z, ! @ # $ % *."
                }
              }}
              render={({ field }) => (
                <input
                  type="password"
                  id="password"
                  {...field}
                  className="w-full bg-transparent border-b-2 border-white text-white focus:outline-none pt-6 peer"
                />
              )}
            />
            <label htmlFor="password"
              className={`absolute left-0 transition-all duration-300 transform ${passwordValue ? "-translate-y-1" : "translate-y-6"} peer-focus:-translate-y-1`}
            >
              Password
            </label>
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>
          <div className="mt-[30px] relative">
            <Controller
              name="rePassword"
              control={control}
              rules={{
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Password must contain at least 8 characters."
                },
                maxLength: {
                  value: 30,
                  message: "Password must not exceed 30 characters."
                },
                pattern: {
                  value: /^[0-9a-zA-Z!@#$%*]+$/,
                  message: "Password must only contain the characters 0-9, a-z, A-Z, ! @ # $ % *."
                },
                validate: value => value === passwordValue || "Confirmation password does not match."
              }}
              render={({ field }) => (
                <input
                  type="password"
                  id="rePassword"
                  {...field}
                  className="w-full bg-transparent border-b-2 border-white text-white focus:outline-none pt-6 peer"
                />
              )}
            />
            <label htmlFor="rePassword"
              className={`absolute left-0 transition-all duration-300 transform ${rePasswordValue ? "-translate-y-1" : "translate-y-6"} peer-focus:-translate-y-1`}
            >
              Re-enter password
            </label>
            {errors.rePassword && <span className="text-red-500">{errors.rePassword.message}</span>}
          </div>
          <button className="mt-[30px] w-full py-2 border-[1px] hover:text-black hover:bg-white">
            REGISTER
          </button>
          <div className="mt-[30px] flex flex-row justify-between items-center">
            <hr className="text-white w-24"></hr>
            <p>OR</p>
            <hr className="text-white w-24"></hr>
          </div>
          <div className="mt-[30px] flex flex-row items-center">
            <div>
              <img src={GoogleIcon} alt="" className="object-contain" />
            </div>
            <button className="py-2 px-4 border-[1px] w-full hover:text-black hover:bg-white">
              Register with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
