import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function createRevData(revType, distRev, distARev, distPRev ) {
    return { revType, distRev, distARev, distPRev };
}
function createExpData(expType, distExp, distAExp, distPExp){
    return {expType, distExp, distAExp, distPExp};
}

const revRows = [
    createRevData('Property Taxes', 437.32, 563.27, -125.95),
    createRevData('Property Tax Shift Recognition', 437.32, 563.27, -125.95),
    createRevData('Other', 437.32, 563.27, -125.95),
    createRevData('Total Local Sources', 437.32, 563.27, -125.95),
    createRevData('General Education Aid', 437.32, 563.27, -125.95),
    createRevData('Special Education Aid', 437.32, 563.27, -125.95),
    createRevData('All Other State Aid', 437.32, 563.27, -125.95),
    createRevData('Property Tax Shift-State Aid Adj', 437.32, 563.27, -125.95),
    createRevData('Total State Sources', 437.32, 563.27, -125.95),
    createRevData('Federal Sources', 437.32, 563.27, -125.95),
    createRevData('Total Fund 01 Revenue', 437.32, 563.27, -125.95),

];

const expRows = [

]

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

                <div className={"col offset-1 col-10"}>
                    <h2>{'"DISTRICT"'}</h2>
                    <h3>Revenue and Expenditure Summary</h3>
                    <h4>{'"YYYY-YY"'} </h4>
                    <hr />


                    {/*Need to make this section more responsive based on if it is statewide or association generated*/}
                    There are <strong>{'"#OFDISTS"'}</strong> Public School Districts in MN.
                    <br />
                    {'"DISTRICT"'}'s ADM is <strong> {'"ADM"'} </strong> and is ranked <strong>{'"RANK"'}</strong> based on the ADM.

                    <hr />

                    {/*REVENUE*/}
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align={"left"}><strong>General Fund Revenues</strong></TableCell>
                                    <TableCell align={"right"}><strong>Total Revenue</strong></TableCell>
                                    <TableCell align={"right"}><strong>Revenue per ADM</strong></TableCell>
                                    <TableCell align={"right"}><strong>% of Revenue</strong></TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {revRows.map((row) => (
                                    <TableRow
                                        key={row.revType}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

                                    >
                                        <TableCell component="th" scope="row">
                                            {row.revType}
                                        </TableCell>
                                        <TableCell align={"right"}>{row.distRev}</TableCell>
                                        <TableCell align={"right"}>{row.distARev}</TableCell>
                                        <TableCell align={"right"}>{row.distPRev}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </div>


                {/*<div className="col-md-12 border rounded p-4 mt-2 shadow">*/}
                {/*    <h2 className="text-center m-12">{'DISTRICT'}</h2>*/}
                {/*    <h4>Revenue and Expenditure Summary for {'YYYY'}</h4>*/}

                {/*    <div className="card card-header">*/}
                {/*        /!*<div className="card-header">*!/*/}
                {/*            <div className={"row"}>*/}
                {/*                <div className={"col-6"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item">*/}
                {/*                            <b>District ADM Served plus Tuitioned Out:  </b>*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*                <div className={"col-6"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item">*/}
                {/*                            {'data'}*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*            /!*</div>*!/*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*    <hr />*/}

                {/*    /!*REVENUES*!/*/}
                {/*    <div className="card">*/}
                {/*        <div className="card-header">*/}
                {/*            <h4>Revenues</h4>*/}
                {/*            <hr />*/}

                {/*            <div className={"row"}>*/}
                {/*                <div className={"col"}>*/}
                {/*                    General Fund Revenues*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <br/>*/}

                {/*            /!*HEADER ROW*!/*/}
                {/*            <div className={"row"}>*/}
                {/*                 <div className={"col-4"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item ">*/}
                {/*                            <b>Revenue Type</b>*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*                <div className={"col-4"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item">*/}
                {/*                            <b>Total</b>*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*                <div className={"col-3"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item">*/}
                {/*                            <b>Per ADM</b>*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*                <div className={"col-1"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item">*/}
                {/*                            <b>%</b>*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            /!*CONTECT ROW*!/*/}
                {/*            <div className={"row"}>*/}
                {/*                <div className={"col-4"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item ">*/}
                {/*                            {"Revenue Type"}*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*                <div className={"col-4"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item">*/}
                {/*                            {"Total"}*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*                <div className={"col-3"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item">*/}
                {/*                            {"Per ADM"}*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*                <div className={"col-1"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item">*/}
                {/*                            {"%"}*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*            </div>*/}


                {/*        </div>*/}
                {/*    </div>*/}

                {/*    /!*END REVENUES*!/*/}

                {/*    /!*EXPENSES*!/*/}
                {/*    <hr />*/}
                {/*    <div className="card">*/}
                {/*        <div className="card-header">*/}
                {/*            <h4>Expenses</h4>*/}
                {/*            <hr />*/}

                {/*            <div className={"row"}>*/}
                {/*                <div className={"col"}>*/}
                {/*                    General Fund Expenses*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <br />*/}

                {/*            <div className={"row"}>*/}
                {/*                <div className={"col-6"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item ">*/}
                {/*                            <b>Item</b>*/}
                {/*                        </li>*/}

                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*                <div className={"col-6"}>*/}
                {/*                    <ul className="list-group list-group-flush">*/}
                {/*                        <li className="list-group-item">*/}
                {/*                            {'data'}*/}
                {/*                        </li>*/}
                {/*                    </ul>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    /!*<Link className="btn btn-primary my-2" to={"/admin"}>*!/*/}
                {/*    /!*    Back to Admin*!/*/}
                {/*    /!*</Link>*!/*/}
                {/*</div>*/}
            </div>
        </div>

    );
}