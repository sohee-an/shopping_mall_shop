import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
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
      navigate("/home");
    }
  }, [isAdminCheck, adminToken]);

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAdminAllAction({ username, password }))
      .unwrap()
      .then((originalPromiseResult) => {
        window.location.reload();
        navigate("/home");
      })
      .catch((rejectedValueOrSerializedError) => {});
  };

  return (
    <form
      onSubmit={onSubmit}
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
      <button type="submit" style={{ padding: 10, width: 100 }}>
        Login
      </button>
    </form>
  );
};

export default Login;
