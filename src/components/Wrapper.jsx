import logo from "../assets/Logo.png"
import Illustration from "../assets/Illustration.png"

export default function Wrapper() {
  return (
    <>
      <div className="w-[35%] h-[100%]">
        <img className="ml-6 mt-6 w-[30px] h-[40px]" src={logo} alt="logo" />
        <h2 className="m-6 text-[45px] font-bold text-white">
          Stay on top of time tracking
        </h2>
      </div>
      <img
        className="absolute w-[340px] h-[340px] top-[260px] left-[120px]"
        src={Illustration}
        alt="Illustration"
      />
    </>
  );
}
