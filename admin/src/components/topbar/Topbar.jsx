import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import { logoutAction } from "../../redux/adminRedux";
import { logoutUserAction } from "../../redux/userRedux";
import { Navigate, useNavigate } from "react-router-dom";

const Topbar = () => {
  const user = useSelector((state) => state.admin.currentUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = () => {
    dispatch(logoutAction());
    dispatch(logoutUserAction());
  };

  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">A.S.0</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            {user?.isAdmin && (
              <div className="loginButton" onClick={onClick}>
                LOG OUT
              </div>
            )}
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
};
export default React.memo(Topbar);
