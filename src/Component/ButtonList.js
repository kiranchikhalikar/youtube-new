import React from "react";
import Button from "./Button";

const ButtonList = () => {
    return(
        <div className="flex">
            <Button name="All" />
            <Button name="JavaScript" />
            <Button name="Mixes" />
            <Button name="Gaming" />
            <Button name="Website" />
            <Button name="Music" />
            <Button name="News" />
            <Button name="Live" />
            <Button name="Data Structures" />
            <Button name="Game Shows" />
        </div>
    )
}

export default ButtonList;