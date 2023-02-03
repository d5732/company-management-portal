import React, { useState, useEffect } from "react";
import AddUser from "./Modals/AddUser";
import api from "../../Services/api";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import "./User.css";

const UserContainer = () => {
    const [users, setUsers] = useState(null);
    const [modal, setModal] = useState(false);

    const companyId = JSON.parse(localStorage.getItem("companyId"));

    const currentUserId = JSON.parse(localStorage.getItem("recoil-persist"))
        .userState.id;

    useEffect(() => {
        api.get(`/company/${companyId}/users`).then((response) => {
            setUsers(response.data);
        });
    }, []);

    const activeThenNameSort = (arr) => {
        const active = [];
        const inactive = [];

      for (const user of users) {
        console.log(user);
            if (user.active) active.push(user);
            else inactive.push(user);
        }
        const fullnameCompare = (a, b) => {
            const textA = `${a.profile.lastName.toUpperCase()}  ${a.profile.firstName.toUpperCase()}`;
            const textB = `${b.profile.lastName.toUpperCase()}  ${b.profile.firstName.toUpperCase()}`;
            return textA < textB ? -1 : textA > textB ? 1 : 0;
        };

        const result = [
            ...active.sort((a, b) => fullnameCompare(a, b)),
            ...inactive.sort((a, b) => fullnameCompare(a, b)),
        ];

        console.log(result);

        return result;
    };

    const userTableData =
        users &&
        users.map((user) => ({
            name: user?.profile.firstName + " " + user?.profile.lastName,
            email: user?.profile.email,
            phone: user?.profile.phone,
            team: user?.teams[0]?.name,
            active: user?.active,
            admin: user?.admin,
            status: user?.status,
            id: user?.id,
        }));

    const handleClick = (id, activeBoolean) => {
        api.patch(`users/${id}`, {
            id: null,
            profile: null,
            isAdmin: null,
            active: !activeBoolean,
            status: null,
        });
        window.location.reload(true);
    };

    return (
        <div className="user-card-container">
            <h1 className="userHeading">User Registry</h1>
            <h2 className="userSubHeading">
                A general view of all members in your organization
            </h2>
            <div style={{ width: "100%" }}>
                <button
                    style={{ marginLeft: "auto", display: "block" }}
                    className="user-add-btn"
                    onClick={() => setModal(true)}
                >
                    ADD USER
                </button>
            </div>
            <table style={{ width: "100%" }}>
                <tbody>
                    <tr className="table-heading">
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Team</th>
                        <th>Active</th>
                        <th>Admin</th>
                        <th>Status</th>
                    </tr>
                    {userTableData &&
                        activeThenNameSort(userTableData).map((user) => {
                            return (
                                <tr className="table-data" key={user.id}>
                                <td className="name">{user.profile.firstName} {user.profile.lastName}</td>
                                    <td>{user.profile.email}</td>
                                    <td>{user.profile.phone}</td>
                                    <td>{user.teams[0]?.name}</td>
                                    <td
                                        style={{
                                            color: user.active
                                                ? "green"
                                                : "red",
                                        }}
                                    >
                                        <button
                                            className="active-btn"
                                            onClick={() =>
                                                handleClick(
                                                    user.id,
                                                    user.active
                                                )
                                            }
                                            disabled={user.id === currentUserId}
                                        >
                                            {user.active ? (
                                                <CheckBoxIcon className="user-check-btn" />
                                            ) : (
                                                <CheckBoxOutlineBlankIcon className="user-check-btn" />
                                            )}
                                        </button>
                                    </td>
                                    <td
                                        style={{
                                            color: user.admin ? "green" : "red",
                                        }}
                                    >
                                        {user.admin ? "YES" : "NO"}
                                    </td>
                                    <td>{user.status}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            {modal && <AddUser setModal={setModal} />}
        </div>
    );
};

export default UserContainer;
