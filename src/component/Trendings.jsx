import React from "react";
import Sector36 from "./asssets/1.png"
import Sanivaaram from "./asssets/2.png"
import KapilShow from "./asssets/3.png"
import MoneyHeist from "./asssets/4.png"
import FastX from "./asssets/5.png"
import GoatLife from "./asssets/6.png"
import SexLife from "./asssets/7.png"
import Crew from "./asssets/8.png"
import Kalki from "./asssets/9.png"
import Elite from "./asssets/10.png"


const Trendings = () => {

    const Images = [
        {
            names: "Sector 36",
            img: Sector36,
        },
        {
            names: "Sanivaaram",
            img: Sanivaaram,
        },
        {
            names: "Great Indian Kapil Show",
            img: KapilShow,
        },
        {
            names: "Money Heist",
            img: MoneyHeist,
        },
        {
            names: "FastX",
            img: FastX,
        },
        {
            names: "Aadujeevitham The Goat Life",
            img: GoatLife,
        },
        {
            names: "Sex Life",
            img: SexLife,
        },
        {
            names: "Crew",
            img: Crew,
        },
        {
            names: "Kalki",
            img: Kalki,
        },
        {
            names: "Elite",
            img: Elite,
        },
    ]


    return (
        <div className="trending">
            <div className="trending-heading">
                <h2>Trending Now</h2>
            </div>
            <div className="trending-images">
                <div className="trending-images-grid">
                    <ul className="trending-ul">
                        {Images.map(({ names, img }, i) => {
                            return (
                                <li className="images-line">
                                    <span>
                                        <img src={img}></img>
                                    </span>
                                </li>
                            )
                        })}
                    </ul>

                </div>
            </div>
        </div>
    )

}


export default Trendings;