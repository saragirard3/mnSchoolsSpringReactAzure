import {Link} from "react-router-dom";
import ExpListButton from "../misc/ExpListButton";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function CompReports() {
    function createData(expType, districtExp, avgExp, compExp, rankExp) {
        return { expType, districtExp, avgExp, compExp, rankExp };
    }

    const rows = [
        createData('District Level Administration', 437.32, 563.27, -125.95, 290),
        createData('School Level Administration', 536.67, 501.76, 34.90, 120),
        createData('Need to connect to DB', 15, 16, -1, 331),

    ];

    return(
        <div className={"container"}>
            {/*<div className={"row"}>*/}
            {/*    <div className={"col col-2"}>*/}
            {/*        <Link className="btn btn-primary" to={`/editdistricts`}> Edit Districts</Link>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className={"row"}>
                <div className={"col offset-1 col-10"}>
                    <h2>{'"DISTRICT"'} - {'"REPORT TYPE"'}</h2>
                    <h4>{'"YYYY-YY"'} MDE Profiles Data - Expenditures</h4>
                    <hr />

                    Need to find a way that this will be the full screen regardless of what is typed here. When this is here, it looks good, otherwise
                    it goes to a smaller screen/box. It is dumb.
                    <hr />

                    {/*Need to make this section more responsive based on if it is statewide or association generated*/}
                    There are <strong>{'"#OFDISTS"'}</strong> Public School Districts in MN.
                    <br />
                    {'"DISTRICT"'}'s ADM is <strong> {'"ADM"'} </strong> and is ranked <strong>{'"RANK"'}</strong> based on the ADM.

                    <hr />
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Expenditures (per ADM)</TableCell>
                                    <TableCell align="right">District Expenditures</TableCell>
                                    <TableCell align="right">{'"GRP"'} Average</TableCell>
                                    <TableCell align="right">Compared to {'"GRP"'} Average</TableCell>
                                    <TableCell align="right">District Rank</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={row.expType}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.expType}
                                        </TableCell>
                                        <TableCell align="right">{row.districtExp}</TableCell>
                                        <TableCell align="right">{row.avgExp}</TableCell>
                                        <TableCell align="right">{row.compExp}</TableCell>
                                        <TableCell align="right">{row.rankExp}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>



                </div>

            </div>

        {/*<div className="centerReport">*/}
        {/*    /!*This is the template for the various Comparison Reporting. I need to be able to adjust how each of the tabs are connected and change with the data.*!/*/}
        {/*    /!*Currently it is just set to the Statewide tab.*!/*/}

        {/*    <div className="row">*/}
        {/*        <div className="col ">*/}
        {/*            <h2>{'DISTRICT'} - {'REPORT TYPE'}</h2>*/}
        {/*            <h4>{'YYYY-YY'} MDE Profiles Data</h4> <em>retrieved {'DATE'}</em>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="row">*/}
        {/*        <div className="col-6">*/}
        {/*            There are {'#OFDISTS'} Public School Districts in MN.*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </div>
    );
}