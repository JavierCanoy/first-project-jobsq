export default function Sign() {
  return (
    <>
      <div className="main-wrapper bg-colorThem-100">
        <div className="  grid  justify-items-center">
          <div className="image-logo mt-10 ">
            <img src="/images/logo.svg" alt="logo" />
          </div>

          <div className="bg-image mt-5   ">
            <div className="bg-image  grid  justify-items-center">
              <img
                src="/images/background.png"
                className=" absolute"
                alt="logo"
              />
            </div>
          </div>

          <div className="context  relative   mt-28">
            <div className=" text-center  ">
              <h1 className="    text-3xl  ">Sign in</h1>
              <p className="    mt-5 indent-4  ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="login-google flex justify-center  ">
              <button className="  flex  border shadow-sm   mt-10 rounded-xl w-80  h-16 px-2 py-2    ">
                <img
                  src="/images/btnSigninwithGoogle.svg"
                  className=" self-center mx-8"
                  alt="logo"
                />
                <p className="grid place-self-center">Continue With Google</p>
              </button>
            </div>

            <div className=" flex  items-center    mt-5   ">
              <div className="flex-grow border-t "></div>
              <span className="  text-gray-400 font-normal text-base mx-4 ">
                OR
              </span>
              <div className="flex-grow border-t"></div>
            </div>

            <div className="login-google flex justify-center  ">
              <button className=" flex    border shadow-sm   mt-5 rounded-xl w-80  h-16 px-2 py-2    ">
                <img
                  src="/images/mail.svg"
                  className=" self-center mx-8 w-7"
                  alt="logo"
                />
                <a
                  href="/components/sign-in"
                  className="grid place-self-center font-semibold"
                >
                  Continue With Email
                </a>
              </button>
            </div>

            <div className="footer mt-10">
              <p className=" text-center">
                Don’t have an account?
                <a href="/" className="underline text-sky-700 px-2">
                  Signup here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
