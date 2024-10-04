import React, { useState } from "react";
import Sector36 from "./asssets/1.png";
import Sanivaaram from "./asssets/2.png";
import KapilShow from "./asssets/3.png";
import MoneyHeist from "./asssets/4.png";
import FastX from "./asssets/5.png";
import GoatLife from "./asssets/6.png";
import SexLife from "./asssets/7.png";
import Crew from "./asssets/8.png";
import Kalki from "./asssets/9.png";
import Elite from "./asssets/10.png";

const Trendings = () => {
    const Images = [
        { names: "Sector 36", img: Sector36 },
        { names: "Sanivaaram", img: Sanivaaram },
        { names: "Great Indian Kapil Show", img: KapilShow },
        { names: "Money Heist", img: MoneyHeist },
        { names: "FastX", img: FastX },
        { names: "Aadujeevitham The Goat Life", img: GoatLife },
        { names: "Sex Life", img: SexLife },
        { names: "Crew", img: Crew },
        { names: "Kalki", img: Kalki },
        { names: "Elite", img: Elite },
    ];

    // State to control the start index of the displayed images
    const [startIndex, setStartIndex] = useState(0);
    const imagesPerPage = 5;
    const handleNextClick = () => {

        // Move to the next set of images
        // setStartIndex((imagepreview) =>
        //     imagepreview + imagesPerPage < Images.length ? imagepreview + imagesPerPage : 0
        // )
        if (startIndex + imagesPerPage < Images.length) {
            setStartIndex(startIndex + imagesPerPage);
        } else {
            setStartIndex(0)
        }
    };

    const handlePreClick = () => {
        if (startIndex === 0) {
            setStartIndex(startIndex - imagesPerPage)
        }
        else (setStartIndex(0))
    }

    // const visibleImages = Images.slice(startIndex, startIndex + imagesPerPage);

    console.log(Images.slice(startIndex, startIndex + imagesPerPage))

    console.log("start index:", startIndex, "images per page", imagesPerPage);

    return (
        <div className="trending">
            <div className="trending-heading">
                <h2>Trending Now</h2>
            </div>
            <div className="trending-images-container">
                <div className="trending-images-grid">
                    <div className="pre-button-div">
                        {/* {startIndex === 5 && <button className="pre-button" onClick={handlePreClick}>  &lt;</button>} */}
                    </div>
                    <ul className="trending-ul">
                        {Images.map(({ names, img }, i) => (
                            <li className="images-line" key={i}>
                                <div className="number-div">
                                    <span className="number">{startIndex + i + 1}</span>
                                    <span className="image-span">
                                        <img className="image" src={img} alt={names} />
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="next-button-div">
                        {/* {startIndex === 0 && <button className="next-button" onClick={handleNextClick}>  &gt;</button>} */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Trendings;
