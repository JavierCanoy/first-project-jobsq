export default function forgotPassword() {
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

          <div className="context relative mt-44">
            <div className=" text-center  ">
              <h1 className="    text-3xl  ">Forgot your Password?</h1>
              <p className=" mt-5 text-gray-500 ">
                Don't worry resetting your password is easy. Just type your
                email
              </p>
            </div>

            <div className="email flex justify-center mt-5 ">
              <div className=" relative ">
                <input
                  aria-label="email"
                  type="email"
                  className="w-80 h-16 pl-16  rounded-xl border shadow-sm placeholder:text-gray-400 "
                  placeholder="Email"
                />

                <img
                  src="/images/mail.svg"
                  className=" absolute top-0 mt-4  mx-4 w-10 "
                  alt="logo"
                />
              </div>
            </div>

            <div className="button-signin grid place-content-center mt-8   ">
              <button className="bg-colorThem-100 rounded-xl  w-80 h-16 text-base px-2 py-2 text-white ">
                <a href="/components/check-email">SEND</a>
              </button>
            </div>

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
