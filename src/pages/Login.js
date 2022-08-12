import React, { useEffect, useState } from 'react'
import './../resources/authentication.css'
import { Button, Checkbox, Form, Input,message,Spin } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {config} from './../config';
//import { LoadingOutlined } from '@ant-design/icons';
function Login() {
  //const antIcon = <LoadingOutlined style={{ fontSize: 80 }} spin />;
  const [loading,setloading]=useState(false);
  let navigate=useNavigate();
  const onFinish=async (values)=>{
    setloading(true);
    try {
      const user=await axios.post(`${config.api}/api/user/login`,values);
      message.success('Login successfull');
      setloading(false);
      localStorage.clear();
      localStorage.setItem('logged-in-user',JSON.stringify(user.data));
      navigate('/home');
    } catch (error) {
      setloading(false);
      message.error('Login failed');
    }

  }
  useEffect(() => {
    if(localStorage.getItem('logged-in-user')){
      navigate('/home')
    }
  
    
    })
  
  return (
    <div className='auth-parent'>
      {loading &&(<Spin size="large"/>)}
      {/* {loading &&(<Spin indicator={antIcon} />)} */}
      <h1 className='brand'>Pixel CV</h1>
    <Form layout='vertical' onFinish={onFinish}>
      <h1>Login</h1>
      <hr></hr>
      <Form.Item name='username' label='Username'>
        <Input/>
      </Form.Item>
      <Form.Item name='password' label='Password'>
        <Input type='password'/>
      </Form.Item>
      <div className='d-flex align-items-center justify-content-between'>
        <Link to='/register' >Click here to register</Link>
      <Button type='primary' htmlType='submit'>LOGIN</Button>
      </div>
      <div className='mt-3 '>
        <span style={{fontSize:"20px"}}>username:user</span>
        </div>
        <div><span style={{fontSize:"20px"}}>password:user</span></div>
        
      
    </Form>
</div>
  )
}

export default Login