import React from 'react'

function Courses() {
  return (
    <div className='Course-section'>
    <h1>Availabe Courses</h1>

    <div className='courses-card-display'>
         <CourseCard /> 
         <CourseCard /> 
         <CourseCard /> 
         <CourseCard /> 
         <CourseCard /> 
         <CourseCard /> 
         </div>    
      
    </div>
  )
}

function CourseCard(){
    return(
        
        <div className='card-main'>
                        <div className='course-card-pic'>
                        <img src='./images/dev1.jpg'></img>
                        </div>
                        <div className='course-card-des'>
                        <h2>Web development</h2>
                        <p> ifjr rferu  re9ure9fre re9fu er09 ereruuer er</p>
                        <button>Enrol Now</button>
        
                        </div>
        </div>



    )
}
export default Courses
