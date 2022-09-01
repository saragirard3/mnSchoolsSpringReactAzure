import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function District() {
    // const [district, setDistrict] = useState({
    //     distId:"",
    //     distNum: "",
    //     distName: "",
    // });
    //
    // const { userId } = useParams();
    //
    // useEffect(() => {
    //     loadDistrict();
    // }, []);
    //
    // const loadDistrict = async () => {
    //     const result = await axios.get(`http://localhost:8080/user/${distId}`);
    //     setDistrict(result.data);
    // };

    return (
        <div className="container">
            <div className="row">

                <div className="col-md-12 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-12">{'DISTRICT'}</h2>
                    <h4>Revenue and Expenditure Summary for {'YYYY'}</h4>

                    <div className="card card-header">
                        {/*<div className="card-header">*/}
                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <b>District ADM Served plus Tuitioned Out:  </b>
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-6"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            {'data'}
                                        </li>
                                    </ul>
                                </div>
                            {/*</div>*/}
                        </div>
                    </div>

                    <hr />

                    {/*REVENUES*/}
                    <div className="card">
                        <div className="card-header">
                            Revenues
                            <hr />
                            <div className={"row"}>
                                <div className={"col-2"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item ">
                                            General Fund Revenues
                                        </li>
                                    </ul>
                                </div>

                                <div className={"col-4"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item ">
                                            <b>First Name: </b>

                                        </li>
                                        <li className="list-group-item ">
                                            <b>Last Name:</b>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Email:</b>
                                        </li>
                                        <li className="list-group-item">
                                            <b>District:</b>
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-6"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            {'data'}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*END REVENUES*/}

                    {/*EXPENSES*/}
                    <hr />
                    <div className="card">
                        <div className="card-header">
                            Expenses
                            <hr />

                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item ">
                                            <b>First Name: </b>

                                        </li>
                                        <li className="list-group-item ">
                                            <b>Last Name:</b>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Email:</b>
                                        </li>
                                        <li className="list-group-item">
                                            <b>District:</b>
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-6"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            {'data'}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*<Link className="btn btn-primary my-2" to={"/admin"}>*/}
                    {/*    Back to Admin*/}
                    {/*</Link>*/}
                </div>
            </div>
        </div>

    );
}