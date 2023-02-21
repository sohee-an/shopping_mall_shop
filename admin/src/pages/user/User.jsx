import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { Link, useLocation } from "react-router-dom";
import { format } from "timeago.js";

import "./user.css";

export default function User() {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get(`users/find/${userId}`);
        setUser(res.data);
        // console.log("res", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user?.username}</span>
              <span className="userShowUserFullName">
                {user?.firstName} {user?.lastName}
              </span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Activity History</span>
            <div className="userShowInfo">
              <span className="userShowIcon">등록 날짜</span>
              <span className="userShowInfoTitle">
                {format(user?.createdAt)}
              </span>
            </div>
            <div className="userShowInfo">
              <span className="userShowIcon">업데이트 날짜</span>
              <span></span>
              <span className="userShowInfoTitle">
                {format(user?.updatedAt)}
              </span>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">
              <PhoneAndroid className="userShowIcon" />
              <span className="userShowInfoTitle">+1 123 456 67</span>
            </div>
            <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user?.username}
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>firstName</label>
                <input
                  type="text"
                  placeholder={user?.firstName}
                  className="userUpdateInput"
                />
                <div className="userUpdateItem">
                  <label>lastName</label>
                  <input
                    type="text"
                    placeholder={user?.firstName}
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="text"
                    placeholder={user?.email}
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder={user?.address || "등록안함"}
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
