import React from "react"
import { CommonTop } from "./CommonTop"
import styles from "../../EventCreation.module.css"
import {Link} from "react-router-dom"
import { AppContext } from "../../AppContextProvider"

const EventC3 = () => {
    const {header , setHeader} = React.useContext(AppContext)
    // console.log(header)
    return (
        
        <div>
            <CommonTop />
            <div style={{width:"100%" , display:"flex"}}>
                    <div style={{backgroundColor : "rgb(0, 130, 148) " , width : "46%" , height :"15px"}} ></div>
                    <div style={{backgroundColor : "lightgrey " , width : "52%" , height :"15px"}} ></div>
            </div>
            <div className={styles.eve1} >
                <h5>Step 3 out of six</h5>
                <h1>What will your group’s name be?</h1>
                <h4>Choose a name that will give people a clear idea of what the group is about. Feel free to get 
                    <br/>creative! You can edit this later if you change your mind.</h4>
                <h1><input style= {{width:"60%" , height:"50px" , textAlign:"center" , fontSize:"20px"}} value={header} placeholder="Masai School React Group"
                 onChange={(e)=>setHeader(e.target.value)} /></h1>
            </div>
            <div className={styles.eve1_button}>
                <Link to="/eventC4" ><button>Next</button></Link>
            </div>
        </div>
    )
}

export {EventC3}