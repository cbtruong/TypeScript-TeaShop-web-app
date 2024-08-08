import { useState } from "react";
import Background from "../../assets/background_login.svg";
import GoogleIcon from "../../assets/google_icon.svg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-full h-[100vh] overflow-hidden relative">
      <img
        src={Background}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="absolute w-[500px] h-[700px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-950 bg-opacity-50 p-8 rounded shadow-lg">
        <form className="px-[20px] py-[20px] text-white text-[18px] ">
          <h2 className="text-[64px] text-center">Đăng nhập</h2>
          <div className="flex flex-row space-x-1 justify-center">
            <p>Mới truy cập trang web này?</p>
            <a href="/auth/register" className="text-primary">
              Đăng ký
            </a>
          </div>
          <div className="mt-[20px] relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white text-white focus:outline-none pt-6 peer"
            />
            <p
              className={`absolute left-0 transition-all duration-300 transform ${email ? "-translate-y-14" : "-translate-y-6"
                } peer-focus:-translate-y-14`}
            >
              Email
            </p>
          </div>
          <div className="mt-[30px] relative">
            <input
              type="password"
              id="password"
              value={email}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-transparent border-b-2 border-white text-white focus:outline-none pt-6 peer"
            />
            <p
              className={`absolute left-0 transition-all duration-300 transform ${password ? "-translate-y-14" : "-translate-y-6"
                } peer-focus:-translate-y-14`}
            >
              Mật khẩu
            </p>
          </div>
          <button className="mt-[30px] w-full py-2 border-[1px] hover:text-black hover:bg-white">
            Đăng nhập
          </button>
          <div className="mt-[30px] flex flex-row justify-between items-center">
            <hr className="text-white w-24"></hr>
            <p>Hoặc</p>
            <hr className="text-white w-24"></hr>
          </div>
          <div className="mt-[30px] flex flex-row items-center">
            <div>
              <img src={GoogleIcon}/>
            </div>
            <button className="py-2 px-4 border-[1px] w-full hover:text-black hover:bg-white">
              Đăng nhập với Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
