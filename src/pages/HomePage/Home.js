import React from "react";
import MainSection from "../../components/MainSection/MainSection";
import MyInfo from "../../components/MyInfo/MyInfo";
import { homeObjOne, MemeApp } from "./Data";

function Home() {
    return (
        <React.Fragment>
            <MyInfo {...homeObjOne} />
            {/*  */}
            <MainSection {...MemeApp} />
            <MainSection {...MemeApp} />
            <MainSection {...MemeApp} />
        </React.Fragment>
    );
}

export default Home;
