import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    // http://3.1.201.194:3001/users/login
    fetch(`${process.env.NEXT_PUBLIC_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        //do something in response !
        if (!response.ok) {
          throw new Error("Wrong Credentials ! ");
        }
        response.json();
      })
      .then((data) => {
        // Handle successful response
        // redirect to next page - homePage
        // window.location.href = "/components/homePage";
        router.push("/components/homePage");
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <>
      <div className="main-wrapper bg-colorThem-100  ">
        <div className="  grid  justify-items-center">
          <div className="image-logo mt-6">
            <img src="/images/logo.svg" alt="logo" />
          </div>

          <div className="bg-image  my-4 ">
            <div className="bg-image  grid  justify-items-center">
              <img
                src="/images/background.png"
                className=" absolute h-4/5"
                alt="logo"
              />
            </div>
          </div>

          <div className="context  relative mt-24">
            <div className=" text-center  ">
              <h1 className="    text-3xl  ">Sign in</h1>
              <p className="    mt-5 indent-4  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="email flex justify-center mt-5 ">
                <div className=" relative ">
                  <input
                    {...register("email", {
                      required: "This field is required ! ",
                    })}
                    className="w-80 h-16 pl-20   rounded-xl border shadow-sm  placeholder:text-gray-400  "
                    placeholder="Email"
                    aria-label="email"
                    type="email"
                    id="email"
                    name="email"
                  />
                  <img
                    src="/images/usericon.svg"
                    className=" absolute top-0 mt-2  mx-4 "
                    alt="logo"
                  />

                  <div className="error-message mt-2  text-red-500 px-5">
                    {errors.email?.message}
                  </div>
                </div>
              </div>
              <div className="password flex justify-center mt-3 ">
                <div className=" relative  ">
                  <input
                    {...register("password", {
                      required: "This field is required !",
                    })}
                    className="  w-80 h-16 pl-20   rounded-xl border shadow-sm  placeholder:text-gray-400 "
                    placeholder="Password"
                    aria-label="password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                  />
                  <img
                    src="/images/iconlock.svg"
                    className=" absolute top-0 mt-2  mx-4 "
                    alt="logo"
                  />

                  <div className="error-message mt-2 text-red-500 px-5">
                    {errors.password?.message}
                  </div>
                  <div
                    className="password-icon absolute top-6  right-6  "
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <FaEyeSlash className="  fill-gray-300 w-5 h-5 " />
                    ) : (
                      <FaEye className=" fill-gray-300 w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>

              <div className="checkbox mx-8   mt-3 ">
                <div className="text-sm leading-5 font-normal inline-flex items-center text-gray-500">
                  <input
                    type="checkbox"
                    className="mr-2 w-4 h-4 border-gray-300 "
                  />
                  <span>Remember Me</span>
                </div>
              </div>
              <div className="grid place-content-center mt-3   ">
                <button
                  className="bg-colorThem-100 rounded-xl  w-80 h-16 text-base px-2 py-2 text-white "
                  type="submit"
                >
                  SIGN IN
                </button>
                <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
              </div>
            </form>
            <div className="text-center mt-5 ">
              <p className="text-sm text-gray-500  ">
                By continuing you agree to JobsQ condition of use and privacy
                notice
              </p>
            </div>

            <div className="footer mt-5 text-gray-500">
              <p className=" text-center text-sm	">
                Don't remember password?
                <a
                  href="/components/forgot-password"
                  className="underline text-sky-700 px-2"
                >
                  Forgot password
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
