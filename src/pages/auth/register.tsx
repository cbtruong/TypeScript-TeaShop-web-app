
import { useForm, Controller, SubmitHandler } from "react-hook-form"; // Import necessary hooks and types from react-hook-form
import axios from 'axios'; // Import axios for making HTTP requests
import Background from "../../assets/background_login.svg"; // Import background image for the login/register page
import GoogleIcon from "../../assets/google_icon.svg"; // Import Google icon for Google login
import { Link, useNavigate } from "react-router-dom"; // Import Link for navigation and useNavigate for programmatic navigation
import { useEffect } from "react"; // Import useEffect for side effects in functional components
import { getApiKey, getBackendUrl } from "../../redux/authContest";

// Define the shape of the form data
type FormData = {
  email: string; // Email input
  password: string; // Password input
  rePassword: string; // Re-enter password input
};

const Register = () => {
  // Initialize form handling using react-hook-form
  const { control, handleSubmit, watch, formState: { errors } } = useForm<FormData>();
  const navigate = useNavigate(); // Hook to navigate programmatically

  const X_API_KEY = getApiKey();
  const BACKEND_URL = getBackendUrl();

  // Watch for changes in email, password, and rePassword fields
  const emailValue = watch("email", "");
  const passwordValue = watch("password", "");
  const rePasswordValue = watch("rePassword", "");

  // Effect to handle access and refresh tokens from URL parameters
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get('accessToken'); // Retrieve access token
    const refreshToken = urlParams.get('refreshToken'); // Retrieve refresh token

    // If tokens are present, store them in localStorage and navigate to the home page
    if (accessToken && refreshToken) {
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      navigate('/'); // Redirect to home page
    }
  }, [navigate]);

  // Function to handle form submission
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      // Make a POST request to the registration endpoint
      const response = await axios.post(BACKEND_URL + '/auth/register', {
        email: data.email,
        password: data.password,
      }, {
        headers: {
          'x-api-key': X_API_KEY  // Example API key if required
        }
      });

      // If registration is successful, handle tokens and redirect
      if (response.status === 201) {
        const { accessToken, refreshToken } = response.data.metadata.tokens;
        localStorage.setItem('accessToken', accessToken); // Store access token
        localStorage.setItem('refreshToken', refreshToken); // Store refresh token
        navigate('/'); // Redirect to home page
        alert("REGISTER SUCCESS"); // Show success alert
      }
    } catch (error) {
      // Handle errors based on response status
      if (error.response && error.response.status === 403) {
        alert("Email has already been registered."); // Notify user of existing email
      } else {
        alert("Registration failed. Please try again."); // General error notification
      }
    }
  };

  // Function to handle Google login redirect
  const handleGoogleLogin = () => {
    window.location.href = 'http://localhost:3000/auth/google'; // Redirect to Google login
  };

  // JSX for the registration form
  return (
    <div className="w-full h-[100vh] overflow-hidden relative">
      {/* Background image */}
      <img
        src={Background}
        alt=""
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      {/* Close link to navigate back to home */}
      <Link to='/' className="absolute top-20 right-96"><i className='bx bx-x text-white text-h1'></i></Link>
      <div className="absolute w-[500px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-950 bg-opacity-50 p-8 rounded shadow-lg">
        {/* Registration form */}
        <form className="px-[20px] py-[20px] text-white text-[18px]" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-[64px] text-center">REGISTER</h2>
          <div className="flex flex-row space-x-1 justify-center">
            <p>Already a member?</p>
            <Link to="/auth/login" className="text-primary">
              Login
            </Link>
          </div>

          {/* Email Input */}
          <div className="mt-[20px] relative">
            <Controller
              name="email" // Form field name
              control={control} // Control from useForm
              rules={{ // Validation rules for the email input
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
            {/* Email label */}
            <label htmlFor="email"
              className={`absolute left-0 transition-all duration-300 transform ${emailValue ? "-translate-y-1" : "translate-y-6"} peer-focus:-translate-y-1`}
            >
              Email
            </label>
            {/* Display error message if validation fails */}
            {errors.email && <span className="text-red-500">{errors.email.message}</span>}
          </div>

          {/* Password Input */}
          <div className="mt-[30px] relative">
            <Controller
              name="password" // Form field name
              control={control} // Control from useForm
              rules={{ // Validation rules for the password input
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
                  {...field} // Spread field props
                  className="w-full bg-transparent border-b-2 border-white text-white focus:outline-none pt-6 peer"
                />
              )}
            />
            {/* Password label */}
            <label htmlFor="password"
              className={`absolute left-0 transition-all duration-300 transform ${passwordValue ? "-translate-y-1" : "translate-y-6"} peer-focus:-translate-y-1`}
            >
              Password
            </label>
            {/* Display error message if validation fails */}
            {errors.password && <span className="text-red-500">{errors.password.message}</span>}
          </div>

          {/* Re-enter Password Input */}
          <div className="mt-[30px] relative">
            <Controller
              name="rePassword" // Form field name
              control={control} // Control from useForm
              rules={{ // Validation rules for the re-enter password input
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
                validate: value => value === passwordValue || "Confirmation password does not match." // Custom validation to check for matching passwords
              }}
              render={({ field }) => (
                <input
                  type="password"
                  id="rePassword"
                  {...field} // Spread field props
                  className="w-full bg-transparent border-b-2 border-white text-white focus:outline-none pt-6 peer"
                />
              )}
            />
            {/* Re-enter password label */}
            <label htmlFor="rePassword"
              className={`absolute left-0 transition-all duration-300 transform ${rePasswordValue ? "-translate-y-1" : "translate-y-6"} peer-focus:-translate-y-1`}
            >
              Re-enter password
            </label>
            {/* Display error message if validation fails */}
            {errors.rePassword && <span className="text-red-500">{errors.rePassword.message}</span>}
          </div>

          {/* Register button */}
          <button className="mt-[30px] w-full py-2 border-[1px] hover:text-black hover:bg-white">
            REGISTER
          </button>

          {/* OR divider */}
          <div className="mt-[30px] flex flex-row justify-between items-center">
            <hr className="text-white w-24"></hr>
            <p>OR</p>
            <hr className="text-white w-24"></hr>
          </div>

          {/* Google login option */}
          <div className="mt-[30px] flex flex-row items-center">
            <div>
              <img src={GoogleIcon} alt="" className="object-contain" />
            </div>
            <button onClick={handleGoogleLogin} className="py-2 px-4 border-[1px] w-full hover:text-black hover:bg-white">
              Register with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register; // Export the Register component for use in other parts of the application

