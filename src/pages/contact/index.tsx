import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Header from "../../components/header/Header";
import "boxicons/css/boxicons.min.css";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const Contact = () => {
  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit: SubmitHandler<FormData> = data => {
    console.log(data);
    setIsSubmitted(true);
    reset({ name: "", email: "", message: "" });
    setTimeout(() => {
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <div className="relative">
      <div className="bg-cover bg-center bg-fixed bg-headerHome displayCenter pt-[323px]">
        <h1 className="mb-[250px] text-bigger font-small italic text-white tracking-wide font-extra">
          Our Story
        </h1>
      </div>
      <Header />
      <div className="my-[5.5rem] displayCenter">
        <div className="w-full displayCenter relative mb-8">
          <h2 className="font-extra italic text-h1 z-10 bg-white px-12 font-tiny">
            You're Welcome to Visit
          </h2>
          <span className="w-[65%] h-[0.2px] bg-black absolute z-0"></span>
        </div>
        <div className="flex flex-row justify-between mx-[350px] mb-8 space-x-40">
          <div className="w-3/6 flex flex-col ">
            <h2 className="font-extra text-h2 italic text-gray">
              Have a Question? We're Here to Help
            </h2>
            <p className="text-gray my-small">
              Email us at <span className="underline">info@my-domain.com</span>{" "}
              or send us a message via the contact form below and we'll get back
              to you
            </p>
            <form className="mt-big flex flex-col space-y-3" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row items-center space-x-5">
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`border-[1px] w-full p-2 
                        ${errors.name ? 'border-red-500 border-[3px]' : 'border-gray'}
                        hover:border-black hover:border-[3px] focus:rounded-none`}
                      placeholder="Name"
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email address",
                    },
                  }}
                  render={({ field }) => (
                    <input
                      {...field}
                      className={`border-[1px] w-full p-2 
                        ${errors.email ? 'border-red-500 border-[3px]' : 'border-gray'}
                        hover:border-black hover:border-[3px] focus:rounded-none`}
                      placeholder="Email"
                    />
                  )}
                />
              </div>
              <Controller
                name="message"
                control={control}
                rules={{ required: false }}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="border-[1px] p-2 border-gray w-full resize-none overflow-auto hover:border-black hover:border-[3px] focus:rounded-none"
                    placeholder="Type your message here..."
                    rows={6}
                  ></textarea>
                )}
              />
              <button className="py-2 w-full bg-black hover:bg-lightGray hover:transitionMain text-white text-normal">
                Submit
              </button>
              {isSubmitted && (
                <p className="w-full text-center text-gray font-small">Thanks for submitting!</p>
              )}
            </form>
          </div>
          <div className="w-1/5 flex flex-col">
            <h2 className="font-extra text-h2 italic text-gray">Our Stores</h2>
            <div className="mt-5 space-y-2">
              <p className="text-gray">
                500 Terry Francine Street
              </p>
              <p className="text-gray">
                San Francisco, CA 94158
              </p>
              <p className="text-gray">Tel: 123-456-7890</p>
            </div>
            <span className="mt-5 w-[20%] h-[0.2px] bg-black"></span>
            <div className="mt-5 space-y-2">
              <p className="text-gray">
                500 Terry Francine Street
              </p>
              <p className="text-gray">
                San Francisco, CA 94158
              </p>
              <p className="text-gray">Tel: 123-456-7890</p>
            </div>
            <h2 className="mt-10 font-extra text-h2 italic text-gray">
              Our Stores
            </h2>
            <div className="mt-5 text-gray space-y-2">
              <p>Mon - Fri: 8am - 8pm</p>
              <p>​​Saturday: 9am - 9pm</p>
              <p>​Sunday: 9am - 10pm</p>
            </div>
          </div>
        </div>
        <iframe
          className="w-full h-[500px] mt-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.438420319443!2d144.9563403152588!3d-37.81774407975432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642e7e3b3e4f9%3A0x6b4e2c3d1d5e7e8b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1634011347180!5m2!1sen!2sau"
          allowFullScreen={true}
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
