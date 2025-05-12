import React,{useState} from "react";

const Login = ({loginHandler}) => {

const [email, setEmail] = useState("")
const [password, setpassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler(email,password);
     setEmail("")
     setpassword("")
  };

  return (
    <>
      <div className="select-none h-screen w-screen flex justify-center items-center">
        <div className=" border-2 rounded-xl border-emerald-600 p-20">
          <form
          
            onSubmit={(e)=>{
              submitHandler(e)
              
            }}
            action=""
            className="flex flex-col items-center justify-center"
          >
            <input
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
              required
              className="px-4 py-4  text-white rounded-3xl border-2 border-emerald-600 text-xl outline-none bg-transparent placeholder:text-zinc-600 "
              type="Email"
              placeholder="Enter your email"
            />
            <input
            value={password}
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
              required
              className="px-4 mt-4 text-white  py-4 rounded-3xl border-2 border-emerald-600 text-xl outline-none bg-transparent placeholder:text-zinc-600 "
              type="password"
              placeholder="Enter  password"
            />
            <button className="bg-emerald-600 rounded-full py-2 text-white px-6 mt-5 ">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
