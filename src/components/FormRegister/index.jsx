import Button from "../Button";

const FormRegister = () => {
  return (
    <>
      <>
        <form action="">
          <div className="w-full bg-white rounded-3xl my-10 p-5">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="block text-navy text-sm">
                  First Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  className="text-sm rounded-lg w-full py-2 px-2 outline-none text-navy  placeholder:text-navy placeholder:opacity-50 border border-navy  focus:border-green "
                  placeholder="John"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="block text-navy text-sm">
                  Last Name
                </label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  className="text-sm rounded-lg w-full py-2 px-2 outline-none text-navy  placeholder:text-navy placeholder:opacity-50 border border-navy  focus:border-green "
                  placeholder="Doe"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="block text-navy text-sm">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  className="text-sm rounded-lg w-full py-2 px-2 outline-none text-navy  placeholder:text-navy placeholder:opacity-50 border border-navy  focus:border-green "
                  placeholder="jE8H3@example.com"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="block text-navy text-sm">
                  Password (6 characters)
                </label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  className="text-sm rounded-lg w-full py-2 px-2 outline-none text-navy  placeholder:text-navy placeholder:opacity-50 border border-navy focus:border-green "
                  placeholder="******"
                />
              </div>
              <Button classname="bg-green text-navy font-semibold w-auto ">
                Sign Up
              </Button>
            </div>
          </div>
        </form>
      </>
    </>
  );
};

export default FormRegister;
