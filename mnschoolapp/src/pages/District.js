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
                            <h4>Revenues</h4>
                            <hr />

                            <div className={"row"}>
                                <div className={"col"}>
                                    General Fund Revenues
                                </div>
                            </div>

                            <br/>

                            {/*HEADER ROW*/}
                            <div className={"row"}>
                                 <div className={"col-4"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item ">
                                            <b>Revenue Type</b>
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-4"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <b>Total</b>
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-3"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <b>Per ADM</b>
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-1"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <b>%</b>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/*CONTECT ROW*/}
                            <div className={"row"}>
                                <div className={"col-4"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item ">
                                            {"Revenue Type"}
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-4"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            {"Total"}
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-3"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            {"Per ADM"}
                                        </li>
                                    </ul>
                                </div>
                                <div className={"col-1"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            {"%"}
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
                            <h4>Expenses</h4>
                            <hr />

                            <div className={"row"}>
                                <div className={"col"}>
                                    General Fund Expenses
                                </div>
                            </div>

                            <br />

                            <div className={"row"}>
                                <div className={"col-6"}>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item ">
                                            <b>Item</b>
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