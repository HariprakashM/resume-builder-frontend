import React, { useEffect, useState } from 'react'
import './../resources/authentication.css'
import { Button, Checkbox, Form, Input,message ,Spin} from 'antd';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {config} from './../config';
function Register() {
  const navigate=useNavigate()
  const [loading,setloading]=useState(false);
  const onFinish=async (values)=>{
    setloading(true);
    try {
      await axios.post(`${config.api}/api/user/register`,values);
      setloading(false);
      message.success('Registration successfull')
      navigate('/home')
    } catch (error) {
      setloading(false);
      message.error('Registration failed')
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
       <h1 className='brand'>Pixel CV</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <h1>Register</h1>
          <hr></hr>
          <Form.Item name='username' label='Username'>
            <Input/>
          </Form.Item>
          <Form.Item name='password' label='Password'>
            <Input type='password'/>
          </Form.Item>
          <Form.Item name='cpassword' label='Confirm Password'>
            <Input type='password'/>
          </Form.Item>
          <div className='d-flex align-items-center justify-content-between'>
            <Link to='/login' >Already have an account</Link>
          <Button type='primary' htmlType='submit' >REGISTER</Button>
          </div>
        </Form>
    </div>
  )
}

export default Register