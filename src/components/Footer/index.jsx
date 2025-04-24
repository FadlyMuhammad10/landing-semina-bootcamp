const Footer = () => {
  return (
    <>
      <footer className="bg-navy py-20">
        <div className="container ">
          <div className="flex flex-row justify-between items-start">
            <div className="w-[20%] ">
              <img
                src="/images/logo.svg"
                alt="logo"
                className="cursor-pointer"
              />
              <p className="text-gray mt-5">
                Ngacara adalah tempat di mana <br /> anda dapat mencari event
                sesuai <br />
                dengan minat & terdekat.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h6 className="text-white">Features</h6>
              <div className="flex flex-col gap-3 text-gray">
                <a href="" className="hover:text-white hover:underline">
                  Virtual
                </a>
                <a href="" className="hover:text-white hover:underline">
                  Pricing
                </a>
                <a href="" className="hover:text-white hover:underline">
                  Merchant
                </a>
                <a href="" className="hover:text-white hover:underline">
                  Tickets
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="text-white">Company</h6>
              <div className="flex flex-col gap-3 text-gray">
                <a href="" className="hover:text-white hover:underline">
                  Jobs
                </a>
                <a href="" className="hover:text-white hover:underline">
                  API
                </a>
                <a href="" className="hover:text-white hover:underline">
                  Press
                </a>
                <a href="" className="hover:text-white hover:underline">
                  Sitemap
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h6 className="text-white">Learn</h6>
              <div className="flex flex-col gap-3 text-gray">
                <a href="" className="hover:text-white hover:underline">
                  Guidebook
                </a>
                <a href="" className="hover:text-white hover:underline">
                  Inspiration
                </a>
                <a href="" className="hover:text-white hover:underline">
                  Community
                </a>
                <a href="" className="hover:text-white hover:underline">
                  Tools
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <p className="text-gray">All Rights Reserved. Copyright 2025.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
