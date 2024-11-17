import React, { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setemail("");
    setpassword("");
  };

  return (
    <div className=" flex h-screen w-screen items-center justify-center bg-zinc-900">
      <div className=" border-2 border-emerald-600 p-20 rounded-md">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
          className=" flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className=" outline-none  bg-transparent border-2 border-emerald-600 text-2xl py-3 px-5 rounded-full text-white"
            type="email"
            placeholder=" Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className=" text-white outline-none  bg-transparent border-2 border-emerald-600 text-2xl py-3 px-5 rounded-full mt-5"
            type="password"
            placeholder=" Enter your password"
          />
          <button className=" text-zinc-950 outline-none border-2 bg-emerald-600 text-2xl py-3 px-5 rounded-md mt-7 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
