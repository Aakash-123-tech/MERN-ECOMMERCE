import React from "react";
import { useContext } from "react";
import { MyContext } from "../../Context/Context";

const Form = () => {
  const {username,setusername,email,setemail,password,setpassword,userRegisterFun,loginUsername,setloginUsername,loginPassword,setloginPassword,userLoginFun,navigate}=useContext(MyContext)
 
  return (
    <>
      <div className="container  bg-light mt-5 rounded-3 p-5">
        <div className="row">
          <div className="col-lg-6 col-12 my-5">
            <h3>Register Form</h3>
            <form onSubmit={userRegisterFun}>
              <label className="form-label" > Enter UserName</label>
              <br />
              <input className="form-control  mb-4" type="text" value={username} onChange={(e)=>setusername(e.target.value)} required />
              <label className="form-label"> Enter Email</label>
              <br />
              <input className="form-control  mb-4" type="email" value={email}  onChange={(e)=>setemail(e.target.value)} required />
              <label > Enter Password</label>
              <input className="form-control mb-4 " type="password"  onChange={(e)=>setpassword(e.target.value)}  required />
              <input type="submit" value="Submit" className="btn btn-primary " />
            </form>
          </div>
          <div className="col-lg-6 my-5">
            <h3>Login Form</h3>
            <form  onSubmit={userLoginFun}>
              <label className="form-label">Enter User Name</label>
              <input type="text" className="form-control mb-3" value={loginUsername} onChange={(e)=> setloginUsername(e.target.value)}/>
              <label className="form-label">Enter Password</label>
              <input type="text" className="form-control mb-3" value={loginPassword} onChange={(e)=>setloginPassword(e.target.value)} />
              <input type="submit" value='Login' className="btn btn-success form-control"/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
