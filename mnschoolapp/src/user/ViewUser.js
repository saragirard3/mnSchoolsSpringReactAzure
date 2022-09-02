import axios from "axios";
import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewUser() {

    const { id } = useParams();

    const [user, setUser] = useState({
        userId:"",
        firstName: "",
        lastName: "",
        email: "",
        distId: "",
    });

    // const { userId, firstName, lastName, email, distId } = user;

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">User Details</h2>

                    <div className="card">
                        <div className="card-header">
                            Details of user id : {user.userId}
                            <div className={"row"}>
                                <div className={"col-3"}>
                                    <ul className="list-group list-group-flush" align={"left"}>
                                        <li className="list-group-item">
                                            <b>First Name: </b>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Last Name: </b>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Email: </b>
                                        </li>
                                        <li className="list-group-item">
                                            <b>District: </b>
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-9"}>
                                    <ul className="list-group list-group-flush" align={"left"}>
                                        <li className="list-group-item" >
                                            {user.firstName}
                                        </li>
                                        <li className="list-group-item">
                                            {user.lastName}
                                        </li>
                                        <li className="list-group-item">
                                            {user.email}
                                        </li>
                                        <li className="list-group-item">
                                            {user.distId}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link className="btn btn-primary my-2" to={"/admin"}>
                        Back to Admin
                    </Link>
                    <Link className="btn btn-outline-secondary mx-2" to={`/edituser/${user.userId}`}>
                        Edit
                    </Link>
                </div>
            </div>
        </div>
    );
}