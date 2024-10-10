
// Import necessary hooks and modules from libraries
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import axios from "axios";
import Background from "../../assets/background_login.svg";  // Import background image
import GoogleIcon from "../../assets/google_icon.svg";  // Import Google icon image
import { Link, useNavigate } from "react-router-dom";  // Import navigation tools from react-router
import { useEffect } from "react";  // Import React's useEffect hook
import { getApiKey, getBackendUrl } from "../../redux/authContest";

// Define the form data structure, specifying fields for email and password
type FormData = {
  email: string;
  password: string;
};

// The Login component manages the login form and handles authentication
const Login = () => {
  // Destructure functions and states from useForm for managing the form
  const { control, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate();  // Hook to programmatically navigate to different routes

  const X_API_KEY = getApiKey();
  const BACKEND_URL = getBackendUrl();

  // Watch values of email and password fields to manage dynamic label movement
  const emailValue = watch("email", "");
  const passwordValue = watch("password", "");

  // useEffect hook to check URL parameters for tokens and store them in localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken');
    const refreshToken = urlParams.get('refreshToken');

    // If tokens are found in the URL, store them in localStorage and navigate to home page
    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/');
    }
  }, [navigate]);

  // Handle form submission with validation and API call for login
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Make a POST request to the login API with the user's email and password
      const response = await axios.post(BACKEND_URL + '/auth/login', {
        email: data.email,
        password: data.password,
      }, {
        headers: {
          'x-api-key': X_API_KEY  // Include an API key in the request headers
        }
      });

      // If login is successful, store tokens and redirect to home page
      if (response.status === 200) {
        const { accessToken, refreshToken } = response.data.metadata.tokens;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        navigate('/');
      }
    } catch (error) {
      // Handle error scenarios, such as unauthorized access or other failures
      if (error.response && error.response.status === 403) {
        alert("Your account has not been registered. Please sign up to continue.");
      } else {
        alert("Login failed. Please try again.");
      }
    }
  };

  // Handle Google login by redirecting to the Google authentication URL
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google';
  };

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/* Background image for the login page */}
      <img
        src={Background}
        alt="Background"
        className="w-full h-full object-cover absolute top-0 left-0"
      />

      {/* Close button to navigate back to the home page */}
      <Link to='/' className="absolute top-20 right-96">
        <i className='bx bx-x text-white text-h1'></i>
      </Link>

      {/* Login form container with styling */}
      <div className="absolute w-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-950 bg-opacity-50 p-8 rounded shadow-lg">
        <form className="px-[20px] py-[20px] text-white text-[18px]" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-[64px] text-center">LOGIN</h2>

          {/* Link to the registration page for new users */}
          <div className="flex flex-row space-x-1 justify-center">
            <p>New to this site?</p>
            <Link to="/auth/register" className="text-primary">
              Register
            </Link>
          </div>

          {/* Email input field with validation and dynamic label */}
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
                  {...field} // Spread field props
                  className={`w-full bg-transparent border-b-2 ${errors.email ? 'border-red-500' : 'border-white'} text-white focus:outline-none pt-6 peer autofill-bg-transparent`}
                  autoComplete="email"
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

          {/* Password input field with validation and dynamic label */}
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
                  className={`w-full bg-transparent border-b-2 ${errors.password ? 'border-red-500' : 'border-white'} text-white focus:outline-none pt-6 peer`}
                  autoComplete="current-password"
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

          {/* Submit button for login */}
          <button className="mt-[30px] w-full py-2 border-[1px] hover:text-black hover:bg-white">
            LOGIN
          </button>

          {/* Divider for separating login methods */}
          <div className="mt-[30px] flex flex-row justify-between items-center">
            <hr className="text-white w-24"></hr>
            <p>OR</p>
            <hr className="text-white w-24"></hr>
          </div>

          {/* Google login button */}
          <div className="mt-[30px] flex flex-row items-center">
            <div>
              <img src={GoogleIcon} alt="Google Icon" className="object-contain" />
            </div>
            <button
              type="button"
              className="py-2 px-4 border-[1px] w-full hover:text-black hover:bg-white"
              onClick={handleGoogleLogin}
            >
              Login with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

