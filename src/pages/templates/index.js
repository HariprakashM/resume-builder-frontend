import React, { useRef } from 'react';
import './../../resources/templates.css'
import { useReactToPrint } from 'react-to-print';
import { useNavigate, useParams } from 'react-router-dom'
import DefaultLayout from '../../components/DefaultLayout'
import Template01 from './Template01'
import Template02 from './Template02';
import { Button } from 'antd';
import Template03 from './Template03';

function Templates() {
    const navigate=useNavigate()
    const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
    const params=useParams();
    const gettemplate=()=>{
switch(params.id){
    case "1":{
        return <Template01/>
    }
    case "2":{
        return <Template02/>
    }
    case "3":{
      return <Template03/>
  }
}
    }
  return (
    <DefaultLayout>
        <div className='d-flex justify-content-end my-5 mx-5'>
            <Button className='back-btn' onClick={()=>navigate('/home')}>Back</Button>
            <Button className=' mx-5 print-btn' onClick={handlePrint}>Print</Button>
        </div>
        <div ref={componentRef}>
        {gettemplate()}
        </div>
        
    </DefaultLayout>
        
    
  )
}

export default Templates