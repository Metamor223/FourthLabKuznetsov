import React from "react";
import './MainPage.css';
import {observer} from "mobx-react-lite";
import ClimbersTable from "./ClimbersTable";
import MountainTable from "./MountainTable";

const MainPage = observer( () => {
    return(
        <div className="container">
        <input type="text" placeholder="Поиск по таблицам"></input>
           <ClimbersTable/>
           <MountainTable/>
        </div>
    );
})

export default MainPage;