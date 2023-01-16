import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/apiCalls";
import { loginAdminAllAction } from "../../redux/actions/adminAction";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //const [admin,setAdmin]=useState(false)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAdminCheck = useSelector((state) => state.admin.currentUser?.isAdmin);
  const adminToken = useSelector(
    (state) => state.admin.currentUser?.accessToken
  );

  useEffect(() => {
    if (isAdminCheck) {
      localStorage.setItem("token", adminToken);
      navigate("/home");
    }
  }, [isAdminCheck, adminToken]);
  console.log("admin", isAdminCheck);

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(loginAdminAllAction({ username, password }));
    // login(dispatch, { username, password });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        style={{ padding: 10, marginBottom: 20 }}
        type="password"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleClick} style={{ padding: 10, width: 100 }}>
        Login
      </button>
    </div>
  );
};

export default Login;
