import React from "react";
import {Button} from "reactstrap";
import { useHistory, useLocation } from "react-router-dom";

export function PageManager(){

    props
    let history = useHistory();

    function handleClick(x){
        switch(x){
            case 'editPost':
                history.push("/editPost");
                break;
            case 'back':
                history.goBack();
                break;
            default:
                history.push("/");
                break;
        }
        
    }
        return(
            <div>
            <Button onClick={handleClick(action)}>Add</Button>
            </div>
        );
}