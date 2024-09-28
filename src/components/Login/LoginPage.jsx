/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "../Header/Logo";

export default function LoginPage() {
  const [singUp, setSignUp] = useState("Sign In");

  return (
    <div className="login-main-container">
      <Logo />
      <Form singUp={singUp} setSignUp={setSignUp} />
    </div>
  );
}

function Form({ setSignUp, singUp }) {
  return (
    <div className="image-container    flex items-center">
      <div className="bg-[rgba(0,0,0,0.7)] mt-36 mx-auto p-16 h-full   w-fit">
        <form className="flex flex-col gap-12">
          <h2 className="text-4xl  font-medium  text-white">{singUp}</h2>
          <div className="input-container  flex flex-col gap-7">
            {singUp === "Sign Up" ? (
              <input className="h-10" type="text" placeholder="your name" />
            ) : (
              <></>
            )}
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="password" />
          </div>
          <button className="w-full bg-red-500 text-2xl h-14">{singUp}</button>

          <div className=" w-full btn-container px-5 py-5 border-red-600 border-b-2 flex justify-between items-center">
            <article className="  gap-2  flex items-center ">
              <input className="w-7 h-7" type="checkbox" name="" id="" />
              <label className="">Remember Me </label>
            </article>
            <p>Need Help ?</p>
          </div>

          <FormSwitch singUp={singUp} setSignUp={setSignUp} />
        </form>
      </div>
    </div>
  );
}

function FormSwitch({ setSignUp, singUp }) {
  return (
    <div className="flex gap-3 cursor-pointer mx-auto">
      {singUp === "Sign In" ? (
        <>
          <p className=" opacity-50 text-[1.3rem]">New to Netflix</p>
          <h4 onClick={() => setSignUp("Sign Up")} className="text-[1.3rem]">
            Sign Up Now
          </h4>
        </>
      ) : (
        <>
          <p className=" opacity-50 text-[1.3rem]">Already have account?</p>
          <h4 onClick={() => setSignUp("Sign In")} className="text-[1.3rem]">
            Sign In
          </h4>
        </>
      )}
    </div>
  );
}
