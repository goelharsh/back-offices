import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { addSignup } from "../services/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {
      name: user.name,
      email: user.email,
      role: user.role,
      password: user.password,
      confirmPassword: user.confirmPassword,
      source: "signup",
    };
    try {
      let { data } = await addSignup(obj);
      console.log(data, "data while singning up")
      if (data.success === true) {
        setUser({
          name: "",
          email: "",
          role: "",
          password: "",
          confirmPassword: "",
        });
        navigate("/");
      } else {
        console.error("Signup failed", data.message);
      }
    } catch (error) {
      console.error("Error during signup", error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      <section className="signup">
        <div className="formOutter">
          <div className="heading">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div>
              <h2>Signup</h2>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} autoComplete="true">
              <input
                type="text"
                placeholder="Username"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
              <input
                type="confirmPassword"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={(e) =>
                  setUser({ ...user, confirmPassword: e.target.value })
                }
                required
              />
              <select
                value={user.role}
                onChange={(e) => setUser({ ...user, role: e.target.value })}
              >
                <option value="">Select Role</option>
                <option value="customer">Customer</option>
                <option value="admin">Admin</option>
              </select>
              <button type="submit">
                {load ? "please Wait..." : "Sign Up"}
              </button>
              <span>
                If already signed up? <Link to="/">Login</Link>
              </span>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
