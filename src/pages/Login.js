import { Link } from "react-router-dom";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  return (
    <div className="md:p-10 p-4 bg-amber-50 text-[0.8rem] md:text-[1rem] mt-[5.5rem] md:mt-[8rem] py-10">
      <form className="bg-white px-6 py-16 drop-shadow-md h-fit rounded-md md:w-1/2 md:mx-auto">
        <h1 className="font-bold text-[1.5rem]">Login to Pizzaria</h1>
        <p className="my-2 md:my-0">
          New user?
          <Link className="text-[#FFCC06] ml-2" to="/signup">
            Login
          </Link>
        </p>
        <div className="mt-6">
          <input
            className="block w-full border-b-[1px] focus:outline-none p-2 border-black"
            type="email"
            id="email"
            placeholder="Enter email"
          />
          <input
            className="block w-full border-b-[1px] focus:outline-none p-2 border-black"
            type="password"
            id="password"
            placeholder="Enter password"
          />
        </div>
        <div className="flex justify-between items-center text-[0.8rem]">
          <div className="flex items-center gap-2 mt-4">
            <input
              className="w-[1.5rem] h-[1.5rem] checked:bg-[#FFCC06]"
              type="checkbox"
              name="terms"
              id="terms"
            />
            <label htmlFor="terms">keep me login</label>
          </div>
          <Link className="text-[#FFCC06]" to="forgetpassword">
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          className="block bg-[#FFCC06] hover:bg-[#ffcd068b] ease-in duration-300 p-2 w-full md:w-1/2 rounded-md font-bold mt-6 mx-auto"
        >
          Create Account
        </button>
        <p className="text-center font-bold mt-10 mb-6">Login with</p>
        <div className="flex justify-between items-center gap-4">
          <Link className="bg-[#3b5998] p-2 rounded-full block text-white w-[50%] text-center">
            <FontAwesomeIcon className="mr-2" icon={faFacebookF} />
            Facebook
          </Link>
          <Link className="bg-white border-[1px] border-black p-2 rounded-full block w-[50%] text-center drop-shadow-md">
            <FontAwesomeIcon className="mr-2" icon={faGoogle} />
            Google
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
