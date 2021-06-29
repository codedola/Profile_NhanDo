import React from "react";
import "./MyIno.css";
import { Button } from "../Button/Button";
import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaYoutube } from "react-icons/fa";
export default function MyInfo({
    lightBg,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
}) {
    return (
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
                            <p
                                className={
                                    lightTextDesc
                                        ? "home__main-subtitle"
                                        : "home__main-subtitle dark"
                                }
                            >
                                {description}
                            </p>

                            <div className='mycv'>
                                <Link to='/' className='mycv-en'>
                                    <p>English</p>
                                    <Button
                                        buttonSize='btn--medium'
                                        buttonColor='primary'
                                    >
                                        {buttonLabel}
                                    </Button>
                                </Link>
                                <Link to='/' className='mycv-vi'>
                                    <p className='language-en'>Vietnamese</p>
                                    <Button
                                        buttonSize='btn--medium'
                                        buttonColor='primary'
                                    >
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='home__main-img-wrapper-info'>
                            <img
                                src={img}
                                alt={alt}
                                className='home__main-img-info'
                            />
                            <div className='social-icons'>
                                <a
                                    className='social-icon-link'
                                    href='https://github.com/codedola'
                                    target='_blank'
                                    aria-label='Github'
                                    rel='noreferrer'
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    className='social-icon-link'
                                    href='https://www.facebook.com/profile.php?id=100007781415998'
                                    target='_blank'
                                    aria-label='Instagram'
                                    rel='noreferrer'
                                >
                                    <FaFacebook />
                                </a>
                                <a
                                    className='social-icon-link'
                                    href='https://www.youtube.com/channel/UC-jFZQ11E002XzKXBsG1XfA'
                                    target='_blank'
                                    aria-label='Youtube'
                                    rel='noreferrer'
                                >
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
