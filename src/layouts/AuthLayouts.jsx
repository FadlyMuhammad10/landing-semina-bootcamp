import Navbar from "../components/Navbar";

const AuthLayouts = (props) => {
  const { children, type } = props;
  return (
    <>
      <div className="w-full min-h-screen bg-navy">
        <Navbar type={type} />
        {children}
        <div className="flex justify-center items-center">
          <div className="w-full max-w-4xl pt-10 ">
            <div className="flex flex-col gap-10 ">
              <p className="text-gray text-center">
                Events held by top & biggest global companies
              </p>
              <div className="inline-flex justify-between">
                <img src="/images/apple.svg" alt="apple" />
                <img src="/images/adobe.svg" alt="adobe" />
                <img src="/images/slack.svg" alt="slack" />
                <img src="/images/spotify.svg" alt="spotify" />
                <img src="/images/google.svg" alt="google" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthLayouts;
