import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Comparison() {
    return (
        <div className="container">
            <div className="py-4">
                This is where expenses are compared up to 10 districts of the users choosing.
            </div>
        </div>
    );
}