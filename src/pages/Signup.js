import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="md:p-10 p-4 bg-amber-50 text-[0.8rem] md:text-[1rem] mt-[5.5rem] md:mt-[8rem] md:h-[100vh] py-10">
      <form className="bg-white p-6 drop-shadow-md h-fit rounded-md md:w-1/2 md:mx-auto">
        <h1 className="font-bold text-[1.5rem]">Create a Pizzaria's Account</h1>
        <p className="my-2 md:my-0">
          Already have an account?{" "}
          <Link className="text-[#FFCC06]" to="/login">
            Login
          </Link>
        </p>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <input
            className="border-b-[1px] focus:outline-none p-2 border-black"
            type="text"
            id="firstname"
            placeholder="Enter firstname"
          />
          <input
            className="border-b-[1px] focus:outline-none p-2 border-black"
            type="text"
            id="lastname"
            placeholder="Enter lastname"
          />
          <input
            className="border-b-[1px] focus:outline-none p-2 border-black"
            type="text"
            id="phonenumber"
            placeholder="Enter mobile number"
          />
          <input
            className="border-b-[1px] focus:outline-none p-2 border-black"
            type="email"
            id="email"
            placeholder="Enter email"
          />
          <input
            className="border-b-[1px] focus:outline-none p-2 border-black"
            type="password"
            id="password"
            placeholder="Enter password"
          />
          <input
            className="border-b-[1px] focus:outline-none p-2 border-black"
            type="confrimpassword"
            id="comfirmpassword"
            placeholder="Confirm password"
          />
        </div>
        <div className="flex items-center gap-2 mt-4 text-[0.8rem]">
          <input
            className="w-[1.5rem] h-[1.5rem]"
            type="checkbox"
            name="terms"
            id="terms"
          />
          <label htmlFor="terms">
            By signing up you agree to our
            <Link className="text-[#FFCC06] ml-2" to="/termsandconditions">
              Terms and Conditions
            </Link>
            <span className="mx-2">and</span>
            <Link className="text-[#FFCC06]" to="/privacypolicy">
              Privacy Policy
            </Link>
          </label>
        </div>
        <button
          type="submit"
          className="block bg-[#FFCC06] hover:bg-[#ffcd068b] ease-in duration-300 p-2 w-full rounded-md font-bold mt-6 mx-auto"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Signup;
