import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useParams} from 'react-router-dom';

export default function Admin() {
    const [users, setUsers] = useState([]);

    const { userId } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:8080/user/${userId}`);
        await loadUsers();
    };

    return (
        <div className="container">
            <div className="py-4">

                <table className="table border shadow">

                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">District Number</th>
                        <th scope="col">Action</th>
                                            </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr>
                            <th scope="row" key={index}>
                                {index + 1}
                            </th>
                            <td style={{display:"none"}}>{user.userId}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.email}</td>
                            <td>{user.distId}</td>
                            <td>
                                <Link
                                    className="btn btn-primary mx-2"
                                    to={`/viewuser/${user.id}`}
                                >
                                    View
                                </Link>
                                <Link
                                    className="btn btn-outline-primary mx-2"
                                    to={`/edituser/${user.userId}`}
                                >
                                    Edit
                                </Link>
                                <button
                                    className="btn btn-danger mx-2"
                                    onClick={() => deleteUser(user.userId)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Link
                    className="btn btn-primary mx-2"
                    to={`/adduser`}>Add new</Link>
            </div>
        </div>
    );
}