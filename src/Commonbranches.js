import React from 'react'
import {FaAtlassian,FaGooglePlay,FaInstalod,FaMagento} from "react-icons/fa";
function Commonbranches() {
  return (
    <div className='commonbranches-main'>
      
    <Branchcard icon={<FaAtlassian />} num="200+" des=" our branches"/>
    <Branchcard icon={<FaGooglePlay />} num="550+" des=" our campuses"/>
    <Branchcard icon={<FaInstalod />} num="1850+" des=" our members"/>
    <Branchcard icon={<FaMagento />} num="80+" des=" our branches"/>
   
    </div>
  )
}

 function Branchcard(props){
    return(
        <div className='branch-card-main'>
          <h1>{props.icon}</h1>
          <h2>{props.num}</h2>
          <p>{props.des}</p>
        </div>
    )
 }

export default Commonbranches
