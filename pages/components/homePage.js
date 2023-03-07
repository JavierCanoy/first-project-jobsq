export default function HomePage() {
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
              <h1 className="    text-3xl  ">Welcome ! ! ! </h1>
              <p className=" mt-5 text-gray-500 ">
                Why businesses turn to JobsQ
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
