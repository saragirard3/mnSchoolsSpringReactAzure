import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function District() {
    return (
        <div className="container">
            <div className="py-4">
                This is the district page. Here will be a summary of both revenues and expenses of the district
                that the user signed up with.
            </div>
        </div>

    );
}