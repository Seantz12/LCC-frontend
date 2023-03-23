import React, { useState } from "react";
import Skill from './skill_display'
import coin from './images/coin.png'
import internal from "stream";
import '../style/style.css'

// Ideally skill should input values, but user can manually override
// Skill will have 3 sections, number of coins, base strength, and coin strength
// Above this we can implement identities that let you pick from a set of skills
// type Props = {
//     skillName: string;
//     coinCount: number;
//     coinStrength: number;
//     skillBase: number;
// }
function SkillSelector() {
    const [coinCount, setCoinCount] = useState(0)
    const [skillBase, setSkillBase] = useState(0)
    const [coinStrength, setCoinStrength] = useState(0)
    return (
        <div>
            <form>
                <div>
                    <label>Number of Coins: </label> 
                    <input 
                        type="number" 
                        min="1"
                        defaultValue="1"
                        // pattern="[0-9]" 
                        onChange={e => setCoinCount(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Skill Base Value: </label> 
                    <input 
                        type="number" 
                        min="0"
                        defaultValue="0"
                        // pattern="[0-9]" 
                        onChange={e => setSkillBase(Number(e.target.value))}
                    />
                </div>
                <div>
                    <label>Coin Strength Value: </label> 
                    <input 
                        type="number" 
                        min="0"
                        defaultValue="0"
                        // pattern="[0-9]" 
                        onChange={e => setCoinStrength(Number(e.target.value))}
                    />
                </div>
            </form>
            <Skill 
                skillName='Test'
                skillBase={skillBase}
                coinCount={coinCount}
                coinStrength={coinStrength}
            />
      </div>
    );
}
export default SkillSelector;