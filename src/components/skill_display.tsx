import React from "react";
import coin from './images/coin.png'
import internal from "stream";
import '../style/style.css'

// Ideally skill should input values, but user can manually override
// Skill will have 3 sections, number of coins, base strength, and coin strength
// Above this we can implement identities that let you pick from a set of skills
type Props = {
    skillName: string;
    skillBase: number;
    coinCount: number;
    coinStrength: number;
}
function Skill(props: Props) {
    const coinArray = [];
    for(let i = 0; i < props.coinCount; i++) {
        coinArray.push(<img src={coin} key={i} className="coin"/>)
    }
    const coinDisplay = <div className="coin-array">{coinArray}</div>
    return (
        // <div className="Skill">
        <div>
        <h2> {props.skillName} </h2>
        <div>
            {coinDisplay}
            <p className="skill-info">{props.skillBase}:{props.coinStrength}</p>
        </div>

        </div>
    );
}
export default Skill;