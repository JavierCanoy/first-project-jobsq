import Image from "next/image";

export default function home() {
  return (
    <>
      <div className="color-background flex  bg-colorThem-100 h-screen  ">
        <div className="image-logo self-center">
          <a href="/components/create-sign">
            <img src="/images/1.svg" alt="logo" />
          </a>
        </div>
      </div>
    </>
  );
}
