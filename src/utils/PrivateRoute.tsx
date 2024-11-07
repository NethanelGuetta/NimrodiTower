import React, { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useParams } from "react-router";

interface PrivateRoute {
    children: JSX.Element
}

const PrivateRoute: React.FC<PrivateRoute> = ({ children }) => {
    //get floorreducer
    const currentFloor = useParams<{ index: string }>();
    const allFloorsAccsses = useSelector((state: { floorAccess: { floorAccess: any[] } }) =>
        state.floorAccess.floorAccess);

    if (!currentFloor.index) {
        return (
            <Navigate to={'/'} />
        )
    }
    if (allFloorsAccsses[+ currentFloor.index]) {

        return (
            children
        )
    }

    return (

        <Navigate to={'/forbidden'} />
    )
};

export default PrivateRoute