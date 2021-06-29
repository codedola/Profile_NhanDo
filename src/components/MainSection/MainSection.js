import React from "react";
import "./MainSection.css";
import { Button } from "../Button/Button";
import ReactPlayer from "react-player";
export default function MainSection({
    lightBg,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    imgStart,
    urlGit,
}) {
    return (
        <>
            <div
                className={
                    lightBg ? "home__main-section" : "home__main-section darkBg"
                }
            >
                <div className='container'>
                    <div
                        className='row home__main-row'
                        style={{
                            display: "flex",
                            flexDirection:
                                imgStart === "start" ? "row-reverse" : "row",
                        }}
                    >
                        <div className='col'>
                            <div className='home__main-text-wrapper'>
                                <h3
                                    className={
                                        lightText ? "heading" : "heading dark"
                                    }
                                >
                                    {headline}
                                </h3>
                                {description.map(function (desc) {
                                    return (
                                        <p
                                            className={
                                                lightTextDesc
                                                    ? "home__main-subtitle"
                                                    : "home__main-subtitle dark"
                                            }
                                        >
                                            {desc}
                                        </p>
                                    );
                                })}

                                <a
                                    href={urlGit}
                                    target='_blank'
                                    aria-label='Instagram'
                                    rel='noreferrer'
                                >
                                    <Button>{buttonLabel}</Button>
                                </a>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__main-img-wrapper'>
                                <ReactPlayer
                                    url='https://www.youtube.com/watch?v=1X8fkHKEXpo'
                                    controls={true}
                                    className='home__main-video'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
