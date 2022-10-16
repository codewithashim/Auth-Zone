import React from "react";
import { Link } from "react-router-dom";
import UseFirebase from "../../Hoke/UseFirebase";

const Login = () => {
  const { hendelLogin } = UseFirebase();

  return (
    <>
      <div className="hero min-h-screen mx-auto bg-base-200">
        <div className="hero-content flex-col justify-center items-center lg:flex-col">
          <div className="text-center lg:text-center mb-3">
            <h1 className="text-3xl font-bold">Hey Wellcome To Auth Zone</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form action="" onSubmit={(event) => hendelLogin(event)}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    required
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link className="btn btn-active btn-link">
                      Forget Password
                    </Link>
                  </label>
                  <label className="label">
                  <Link to="/register" className="btn btn-active btn-link">
                      Haven't An Account Register Now
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-2">
                  <button className="btn btn-primary">Login</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
