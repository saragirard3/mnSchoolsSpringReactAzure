import {Link} from "react-router-dom";

export default function EditDistricts(){
    return(
      <div>
          This is where you will select the various districts to do the comparison reporting from.
          <br />
          Edit Districts button needs to open up a different window, save the data they requested (probably by sql query to save for the future), and
          return to the Multi District tab
          <hr />
          <button type="submit" className="btn btn-primary">Submit</button>
          {/*submit not ready*/}
          <Link className="btn btn-danger mx-2" to={`/comparison`}>Cancel</Link>
          <hr/>
          Submit button doesn't work yet.
      </div>
    );
}