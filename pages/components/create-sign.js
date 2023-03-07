export default function Create() {
  return (
    <>
      <div className="main-wrapper bg-colorThem-100  ">
        <div className="  grid  justify-items-center">
          <div className="image-logo mt-10 ">
            <img src="/images/logo.svg" alt="logo" />
          </div>

          <div className="bg-image  mt-20">
            <div className="bg-image  grid  justify-items-center ">
              <img
                src="/images/background.png"
                className=" absolute"
                alt="logo"
              />
            </div>
          </div>

          <div className="context  relative place-self-center mt-28">
            <div className=" text-center">
              <h1 className="  text-3xl ">Let’s get started</h1>
              <p className="  mt-5 indent-4 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>

            <div className="button-create-account  grid place-content-center mt-20  ">
              <button className="bg-colorThem-100 rounded-xl  w-80 h-16 text-base px-2 py-2 text-white ">
                CREATE ACCOUNT
              </button>
            </div>
            <div className="button-signin  grid place-content-center mt-4">
              <button className=" bg-colorThem-200 rounded-xl   w-80 h-16 text-base px-2 py-2 text-black ">
                <a href="/components/google-email">SIGN IN</a>
              </button>
            </div>
            <p className=" text-center mt-8 text-slate-400">
              <a href="#"> Forgor your account ?</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
