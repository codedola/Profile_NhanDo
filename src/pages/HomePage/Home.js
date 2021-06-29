import React from "react";
import MainSection from "../../components/MainSection/MainSection";
import MyInfo from "../../components/MyInfo/MyInfo";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
    return (
        <React.Fragment>
            <MyInfo {...homeObjOne} />
            {/*  */}
            <MainSection {...homeObjThree} />
            <MainSection {...homeObjTwo} />
            <MainSection {...homeObjFour} />
        </React.Fragment>
    );
}

export default Home;
