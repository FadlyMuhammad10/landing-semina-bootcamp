function StoryBanner() {
  return (
    <div className="container py-20 h-screen flex justify-center">
      <div className="w-full max-w-5xl">
        <div className="flex flex-row items-center mb-20">
          <div className="w-1/2">
            <img src="/images/story.png" alt="story" className="rounded-3xl" />
            <div className="w-[238px] h-[195px] bg-white z-10 absolute translate-x-[-30%] translate-y-[-70%] shadow rounded-xl p-5">
              <div className="flex flex-row items-center">
                <div className="w-20 h-20  bg-navy rounded-full flex items-center justify-center">
                  <img src="/images/figma.png" alt="story" />
                </div>
                <div className="ml-5">
                  <p className="text-navy font-medium">Figma</p>
                  <p className="text-gray">UI Designer</p>
                </div>
              </div>
              <div className="inline-flex gap-2 mt-5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index}
                    src="/images/star.svg"
                    alt="star"
                    className="w-5 h-5"
                  />
                ))}
              </div>
              <p className="text-navy font-medium mt-2">12.5k joined</p>
            </div>
          </div>
          <div className="w-1/2 max-w-md">
            <span className="bg-gradient-to-r from-[#F32FB8] to-[#FDD7BE] text-transparent bg-clip-text font-semibold">
              Story
            </span>
            <h3 className="text-2xl font-medium text-navy">
              One Great Event. For The Better World.
            </h3>
            <p className="text-gray mt-5">
              Baca kisah bagaimana Shayna berhasil membangun sebuah Startup yang
              membantu warga untuk mendapatkan bantuan selama pandemic.
            </p>
            <button className="bg-soft_navy text-white  py-2 rounded-full font-sans mt-5 min-w-[140px]">
              Read
            </button>
          </div>
        </div>
        <div className="w-full max-w-4xl inline-flex justify-between mt-20">
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium text-navy">190K+</p>
            <p className="text-gray mt-2">Events Created</p>
          </div>
          <div className=" border-l border-soft_gray" />
          <div className="flex flex-col items-center">
            <p className="text-2xl font-medium text-navy">3M+</p>
            <p className="text-gray mt-2">People Joined</p>
          </div>
          <div className=" border-l border-soft_gray" />
          <div className="flex flex-col items-center ">
            <p className="text-2xl font-medium text-navy ">5K+</p>
            <p className="text-gray mt-2">Success Startups</p>
          </div>
          <div className=" border-l border-soft_gray" />
          <div className="flex flex-col items-center ">
            <p className="text-2xl font-medium text-navy">113K+</p>
            <p className="text-gray mt-2">Top Speakers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoryBanner;
