import { useState } from "react"

export default function Players (){
    const teamStyle = {
        border: '2px solid blue',
        margin: '20px',
        padding: '20px',
    }
    let [team,setTeam] = useState(11)
    const handleAdd =()=>{
setTeam(team+1)
    }
    const handleremove = () =>{
        setTeam(team-1)
    }
    return(
        <div style={teamStyle}>
            <h3>Players : {team}</h3>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleremove}>reduce</button>
        </div>
    )
}