import FormLogin from "../../components/FormLogin";
import AuthLayouts from "../../layouts/AuthLayouts";

const Login = () => {
  return (
    <>
      <AuthLayouts type="login">
        <div className="flex flex-col gap-10 justify-center items-center mt-20">
          <div className="w-full max-w-md ">
            <h2 className="text-white text-3xl font-semibold text-center">
              Sign In
            </h2>

            <FormLogin />
          </div>
        </div>
      </AuthLayouts>
    </>
  );
};

export default Login;
