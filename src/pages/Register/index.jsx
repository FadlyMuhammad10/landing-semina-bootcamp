import AuthLayouts from "../../layouts/AuthLayouts";
import FormRegister from "../../components/FormRegister";

const Register = () => {
  return (
    <>
      <AuthLayouts>
        <div className="container  ">
          <div className="w-[85%] mx-auto  py-20 flex flex-row items-center">
            <div className="w-2/4  flex flex-col gap-5 ">
              <h2 className="text-white text-3xl font-semibold">
                Expand Your <br />
                Knowledge & Skills
              </h2>
              <p className="text-gray">
                Kami menyediakan berbagai acara terbaik untuk membantu <br />{" "}
                anda dalam meningkatkan skills di bidang teknologi
              </p>
            </div>
            <div className="w-2/4   max-w-md">
              <FormRegister />
            </div>
          </div>
        </div>
      </AuthLayouts>
    </>
  );
};

export default Register;
