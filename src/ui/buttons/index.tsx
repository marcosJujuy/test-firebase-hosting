import React from "react";
import css from "./index.css";

export function MainButton(children){
    return <button className={css.root}>{children}</button>
}

export function SecondaryButton(children){
    return <MainButton>{children}</MainButton>
}