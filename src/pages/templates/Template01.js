import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './../../resources/templates.css'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import {  Modal } from 'antd';
const { confirm } = Modal
function Template01() {
    const navigate=useNavigate();
    const user=JSON.parse(localStorage.getItem('logged-in-user'));
    
        useEffect(() => {
            if(user.firstName==""){
                showConfirm();
                //alert("Kindly fill the profile before trying");
                //navigate('/profile')
            }
        }, [])
        
     const showConfirm = () => {
    confirm({
      title: 'Kindly fill the profile',
      icon: <ExclamationCircleOutlined />,
      content: 'Redirecting to profile',
      
      onOk() {
        navigate('/profile')
        console.log('OK');
      },
      onCancel() {
        navigate('/home')
        console.log('Cancel');
      },
    });
  };   
    
      
    
    
    
  return (
    <div className='template01-parent'>
        <div className='temp-top d-flex justify-content-between'>
            <h1>{user.firstName.toUpperCase()} {user.lastName.toUpperCase()}</h1>
            <div>
                <p>{user.email}</p>
                <p>{user.address}</p>
                <p>{user.mobileNumber}</p>
            </div>
        </div>
        <div className='divider mt-3'></div>
        <div className='objective mt-4'>
            <h3>Objective</h3>
            <hr/>
            <p>{user.careerObjective}</p>
        </div>
        <div className='divider mt-3'></div>
        <div className='education mt-4'>
            <h3>Education</h3>
            <hr/>
            {user.education.map((edu)=>{
                return <div className='d-flex align-items-center'>
                    <h6 style={{width:120}}><b>{edu.yearrange} : </b></h6>
                    <p>{edu.qualification} with {edu.percentage}% in {edu.inisituation}</p>
                    </div>
            })}
        </div>
        <div className='divider mt-3'></div>
        <div className='experience mt-4'>
            <h3>Experience</h3>
            <hr/>
            {user.experience.map((exp)=>{
                return <div className='d-flex align-items-center'>
                    <h6 style={{width:120}}><b>{exp.yearrange} : </b></h6>
                    <p><b>{exp.company}</b> in {exp.place}</p>
                    </div>
            })}
        </div>
        <div className='divider mt-3'></div>
        <div className='projects mt-4'>
            <h3>Projects</h3>
            <hr/>
            {user.projects.map((pro)=>{
                return <div className='d-flex  flex-column mt-1'>
                    <h6 ><b>{pro.title} [{pro.yearrange}] : </b></h6>
                    <p>{pro.description}</p>
                    </div>
            })}
        </div>
        <div className='divider mt-3'></div>
        <div className='skills mt-4'>
            <h3>Skills</h3>
            <hr/>
            {user.skills.map((skills)=>{
                return <div className='d-flex  flex-column'>
                    <div className='d-flex '>
                        <p style={{width:120}}>{skills.technology} - </p>
                        <p>{skills.rating}</p>
                    </div>
                    </div>
            })}
        </div>
        <div className='divider mt-3'></div>

        
    </div>
  )
}

export default Template01