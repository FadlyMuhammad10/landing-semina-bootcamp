import Button from "../Button";

function HeroBanner() {
  return (
    <>
      <div className="container flex justify-center mt-20">
        <div className="w-full max-w-3xl text-center">
          <h2 className="text-5xl text-white">
            Expand Your{" "}
            <span className="bg-gradient-to-r from-[#00A0F5] to-[#00F7E6] text-transparent bg-clip-text">
              Knowledge
            </span>{" "}
            <br />
            by{" "}
            <span className="bg-gradient-to-r from-[#F32FB8] to-[#FDD7BE] text-transparent bg-clip-text">
              Joining
            </span>{" "}
            Our Greatest Events
          </h2>
          <p className="text-gray my-10">
            Kami menyediakan berbagai acara terbaik untuk membantu <br /> anda
            dalam meningkatkan skills di bidang teknologi
          </p>
          <Button classname="bg-green text-navy font-semibold">
            Browse Now
          </Button>
        </div>
      </div>
      <div className="relative  flex justify-center items-center bottom-0 w-full">
        <div>
          <img
            src="/images/banner-1.png"
            alt="hero"
            className="rounded-xl relative w-[838px] h-[500px] translate-y-[40%]  "
          />
        </div>
        <div>
          <img
            src="/images/banner-2.png"
            alt="hero"
            className="rounded-xl h-[411px] absolute right-0 translate-x-1/2  "
          />
        </div>
        <div>
          <img
            src="/images/banner-2.png"
            alt="hero"
            className="rounded-xl h-[411px] absolute left-0 -translate-x-1/2  "
          />
        </div>
      </div>
    </>
  );
}

export default HeroBanner;
