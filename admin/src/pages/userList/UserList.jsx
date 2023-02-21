import "./userList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//state
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersAllAction,
  dele,
  deleteUserAction,
} from "../../redux/actions/userActon";
import { useCallback } from "react";

export default function UserList() {
  const dispatch = useDispatch();
  const usersRedux = useSelector((state) => state.user.users);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(getAllUsersAllAction())
      .unwrap()
      .then((originalPromiseResult) => {
        console.log(originalPromiseResult);
        setUsers(usersRedux);
      })
      .catch((rejectedValueOrSerializedError) => {
        console.log(rejectedValueOrSerializedError);
      });
  }, [dispatch]);

  const handleDelete = useCallback(
    (id) => {
      dispatch(deleteUserAction(id));
    },
    [usersRedux, dispatch]
  );

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img
              className="userListImg"
              src={
                params.row.avatar ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
              alt=""
            />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "Orders",
      headerName: "Orders",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transaction Volume",
      width: 160,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={usersRedux}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
