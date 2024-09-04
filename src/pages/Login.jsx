import React, { useEffect, useState } from "react";
import { addLogin } from "../services/auth";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import Loader from "../components/Common/Loader";
import { ToastContainer, toast } from "`react-toastify`";
import { useSelector } from "react-redux";

const Login = () => {
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let obj = {};
    obj.email = user.email;
    obj.password = user.password;
    setLoading(true);
    let { data } = await addLogin(obj);
    setLoading(false);
    localStorage.setItem("token", data.token);
    localStorage.setItem("name", data.name)
    if (data.success) {
      setLoading(true);
      toast(data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setUser({
        email: "",
        password: "",
      });
      setTimeout(() => {
        navigate(`/dashboard`);
      }, 1000);
    } else if (data.error) {
      toast(data.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  // useEffect(() => {
  //   // Check localStorage for a stored token or user info
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     // setIsAuthenticated(true);
  //     navigate("/dashboard");
  //   }
  // }, []);

  return (
    <>
      <Loader loading={loading} setLoading={setLoading} />
      <ToastContainer />
      <section className="login">
        <div className="formOutter">
          <div className="heading">
            <div>
              <img src={Logo} alt="logo" />
            </div>
            <div>
              <h2>Login</h2>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} >
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
              <button type="submit" className="bg-slate-900 text-yellow-800">Login</button>
              {/* <span>
                If not signed up? <Link to="/signup">Signup</Link>
              </span> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
