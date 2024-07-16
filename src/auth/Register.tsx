import Navbar from "../components/Navbar/Navbar";

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="flex h-[970px] w-full ">
        <div className="bg-main-800 w-full h-full"></div>
        <div className="bg-white w-full h-full flex justify-center">
          <div className="w-[530px]">
            <div className=" mt-10 ">
              <h3 className="text-2xl font-bold text-main-800">
                Account Details
              </h3>
              <p className="text-main-500">Enter your email and password</p>
            </div>
            <div className="flex justify-between mt-5">
              <div className="w-[250px] h-[64px] border-2 border-main-300 rounded-2xl flex items-center justify-center relative">
                <p className="text-2xl font-bold text-main-300">Customer</p>
                <div className="size-3 bg-main-300 rounded-full absolute top-2 right-2" />
              </div>
              <div className="w-[250px] h-[64px] bg-main-800 rounded-2xl flex items-center justify-center relative">
                <p className="text-2xl font-bold text-white">Customer</p>
                <div className="size-3 bg-main-300 rounded-full absolute top-2 right-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
