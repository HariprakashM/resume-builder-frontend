import React from 'react'
import './../resources/templates.css'
import { useNavigate } from 'react-router-dom'
import DefaultLayout from '../components/DefaultLayout'
import template01img from '../resources/tempimg/template1.png'
import template02img from '../resources/tempimg/template2.png'
import template03img from '../resources/tempimg/template3.png'

// import { ExclamationCircleOutlined } from '@ant-design/icons';
// import {  Modal } from 'antd';
// const { confirm } = Modal

function Home() {
  const navigate=useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      image: template01img,
    },
    {
      title: "Resume With Highlighted Sections",
      image: template02img,
    },
    {
      title: "Resume With Bordered Sections",
      image: template03img,
    },
  ]
  // const showConfirm = () => {
  //   confirm({
  //     title: 'Do you Want to delete these items?',
  //     icon: <ExclamationCircleOutlined />,
  //     content: 'Some descriptions',
      
  //     onOk() {
        
  //       console.log('OK');
  //     },
  //     onCancel() {
  //       console.log('Cancel');
  //     },
  //   });
  // };
  return (
    <DefaultLayout>
      <div className='row'>
        {templates.map((template ,index) => {
          return <div className='col-md-4 '>
            <div className='tempbody'>
              <img src={template.image} height='400' alt="img not found" style={{width:"100%"}} />
              <div className='temptext'>
                <p>{template.title}</p>
                <button onClick={()=>navigate(`/templates/${index+1}`)} >TRY</button>
              </div>
            </div></div>
        })}
      </div>
    </DefaultLayout>
  )
}

export default Home