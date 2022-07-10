import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Trends() {
    return (
        <div className="container">
            <div className="py-4">
                This is where trends from the last 10 years exists.
            </div>
        </div>
    );
}