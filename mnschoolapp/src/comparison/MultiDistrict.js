import Button from "@mui/material/Button";
import ExpListButton from "../misc/ExpListButton";
import {Link} from "react-router-dom";

export default function MultiDistrict() {
    return(
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col col-2"}>
                    <Link className="btn btn-primary" to={`/editdistricts`}> Edit Districts</Link>
                </div>
            </div>

            <div className={"row"}>
                <div className={"col offset-1 col-10"}>
                    <h2>District Comparison Reporting</h2>
                    <h4>{'DISTRICT'}</h4>
                    <ExpListButton />
                    <hr />
                    Edit Districts button needs to open up a different window, save the data they requested (probably by sql query to save for the future), and
                    return to the Multi District tab.

                    Also need to update this area to stay centered in the col-10. When this information is removed, it messes up formatting.


                </div>

            </div>
        </div>

    );
}