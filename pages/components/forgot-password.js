import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

export default function forgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch(`${process.env.NEXT_PUBLIC_URL}/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        //do something in response !
        if (!response.ok) {
          throw new Error("Email not exist ! ");
        }
        response.json();
      })
      .then((data) => {
        // Handle successful response
        // redirect to next page - homePage
        // window.location.href = "/components/homePage";
        console.log(data);
        router.push("/components/success-forgotPassword");
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
      <div className="main-wraper bg-colorThem-100  ">
        <div className="  grid  justify-items-center">
          <div className="image-logo mt-10">
            <img src="/images/logo.svg" alt="logo" />
          </div>

          <div className="bg-image  mt-5 ">
            <div className="bg-image  grid  justify-items-center">
              <img
                src="/images/background.png"
                className=" absolute  "
                alt="logo"
              />
            </div>
          </div>

          <div className="context relative mt-28">
            <div className=" text-center  ">
              <h1 className="    text-3xl  ">Forgot your Password?</h1>
              <p className=" mt-5 text-gray-500 ">
                Don't worry resetting your password is easy. Just type your
                email
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="email flex justify-center mt-5">
                <div className=" relative ">
                  <input
                    {...register("email", {
                      required: "This field is required ! ",
                    })}
                    className="w-80 h-16 pl-16  rounded-xl border shadow-sm placeholder:text-gray-400 "
                    placeholder="Email"
                    aria-label="email"
                    type="email"
                    id="email"
                    name="email"
                  />

                  <img
                    src="/images/mail.svg"
                    className=" absolute top-0 mt-4  mx-4 w-10 "
                    alt="logo"
                  />
                  <div className="error-message mt-2  text-red-500 px-5">
                    {errors.email?.message}
                  </div>
                </div>
              </div>

              <div className="button-signin grid place-content-center mt-5   ">
                <button
                  className="bg-colorThem-100 rounded-xl  w-80 h-16 text-base px-2 py-2 text-white "
                  type="submit"
                >
                  <a>SEND</a>
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
                </button>
              </div>
            </form>

            <div className="footer mt-8 text-gray-500">
              <p className=" text-center text-sm	">
                Go back to the
                <a href="/" className="underline text-sky-700 px-2">
                  Login page
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
