import React from "react";
import { useHistory } from "react-router-dom";

import 'components/EditList.css';

export function AddListButton() {
    let history = useHistory();

    function handleClick(e){
        history.push('/edit-list/');
    }

    const style = {
        backgroundColor: "#F3B61B",
        width: "170px"
    }

    return(
       <button className='clickButton' style={style} onClick={handleClick}>建立新菜單</button>
    );
}