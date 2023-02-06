import React from "react"
import image from "../../images/zombie_wallpaper2.jpeg"
import "./landing.css"

export default function Landing() {

    return (
        <div >
            {/* <h1>Zombie Survival</h1> */}
            <div className="options"> Public Match</div>
            <div className="options">Solo</div>
            <div className="options">Tutorial</div>
            <div className="options">Leaderboard</div>
        </div>
    )
}