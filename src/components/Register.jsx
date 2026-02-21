import { Link } from "react-router-dom";
import google from "../assets/flat-color-icons_google.png"
import facebook from "../assets/logos_facebook.png"
import Wrapper from "./Wrapper";

export default function Register() {
  return (
    <div className="relative w-5xl h-[700px] m-auto flex bg-[#3200C3] shadow-2xl">
      <Wrapper />
      <div className="w-[65%] h-[100%] rounded-l-[40px] bg-white pt-32">
        <div className="ml-[150px] w-[450px] h-[420px]">
          <h2 className="mb-[30px] font-bold text-4xl">Create Account</h2>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <fieldset className="border w-[50%] h-[50px] rounded-[10px]">
                <legend className="text-sm ml-4 px-[4px]">First Name</legend>
                <input className="w-[100%] h-[100%] focus:outline-none text-2xl pl-4 text-[#555]" type="text" />
              </fieldset>
              <fieldset className="border w-[50%] h-[50px] rounded-[10px]">
                <legend className="text-sm ml-4 px-[4px]">Last Name</legend>
                <input className="w-[100%] h-[100%] focus:outline-none text-2xl pl-4 text-[#555]" type="text" />
              </fieldset>
            </div>
            <fieldset className="w-[100%] h-[50px] border rounded-[10px]">
                <legend className="text-sm ml-4 px-[4px]">Email</legend>
                <input className="w-[100%] h-[100%] focus:outline-none text-2xl pl-4 text-[#555]" type="text" />
            </fieldset>
            <fieldset className="w-[100%] h-[50px] border rounded-[10px]">
                <legend className="text-sm ml-4 px-[4px]">Password</legend>
                <input className="w-[100%] h-[100%] focus:outline-none text-2xl pl-4 text-[#555]" type="password" />
            </fieldset>
          </div>
          <button className="cursor-pointer bg-[#212121] w-[100%] h-[50px] border rounded-[10px] text-center text-white mt-4 mb-2">Create Account</button>
          <div>
            <span>Already have an account?</span>
            <Link className="text-blue-500 ml-2" to="/login">login</Link>
          </div>
          <div className="flex justify-between items-center my-5">
            <hr className="w-[40%]" />
            <span>or</span>
            <hr className="w-[40%]" />
          </div>
          <div className="flex gap-4">
            <button className="w-[50%] h-[50px] border rounded-[10px] flex items-center justify-center cursor-pointer">
                <img src={google} alt="google" />
                <p>Sign up with Google</p>
            </button>
            <button className="w-[50%] h-[50px] border rounded-[10px] flex items-center justify-center cursor-pointer">
                <img src={facebook} alt="google" />
                <p>Sign up with Facebook</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
