import React from 'react'
import './../../resources/templates.css'
function Template03() {
    const user=JSON.parse(localStorage.getItem('logged-in-user'))
  return (
    <div className='template03-parent '>
        <h3>Personal Details</h3>
        <div className='temp-top d-flex  flex-column col-md-8 '>
        
            <div className=' d-flex  justify-content-between align-items-center'>
            <h1>Name:</h1>
            <h2>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h2>
            </div>
            <div className=' d-flex  justify-content-between align-items-center'>
            <h4>Email:</h4>
            <p>{user.email}</p>
            </div>
            <div className=' d-flex  justify-content-between align-items-center'>
            <h4>Address:</h4>
            <p>{user.address}</p>
            </div>
            <div className=' d-flex  justify-content-between align-items-center'>
            <h4>Mobile Number:</h4>
            <p>{user.mobileNumber}</p>
            </div>
        </div>
        
        <div className='objective mt-4 '>
            <h3>Objective</h3>
            
            <p>{user.careerObjective}</p>
        </div>
        
        <div className='education mt-4'>
            <h3>Education</h3>
            
            {user.education.map((edu)=>{
                return <div className='d-flex align-items-center'>
                    <h6 style={{width:120}}><b>{edu.yearrange} : </b></h6>
                    <p>{edu.qualification} with {edu.percentage}% in {edu.inisituation}</p>
                    </div>
            })}
        </div>
        
        <div className='experience mt-4'>
            <h3>Experience</h3>
            
            {user.experience.map((exp)=>{
                return <div className='d-flex align-items-center'>
                    <h6 style={{width:120}}><b>{exp.yearrange} : </b></h6>
                    <p><b>{exp.company}</b> in {exp.place}</p>
                    </div>
            })}
        </div>
       
        <div className='projects mt-4'>
            <h3>Projects</h3>
            
            {user.projects.map((pro)=>{
                return <div className='d-flex  flex-column mt-1'>
                    <h6 ><b>{pro.title} [{pro.yearrange}] : </b></h6>
                    <p>{pro.description}</p>
                    </div>
            })}
        </div>
      
        <div className='skills mt-4'>
            <h3>Skills</h3>
           
            {user.skills.map((skills)=>{
                return <div className='d-flex  flex-column'>
                    <div className='d-flex '>
                        <p style={{width:120}}>{skills.technology} - </p>
                        <p>{skills.rating}</p>
                    </div>
                    </div>
            })}
        </div>
        

        
    </div>
  )
}

export default Template03