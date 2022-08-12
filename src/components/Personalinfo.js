import React from 'react'
import {Form,Input} from 'antd'
const {TextArea}=Input;
function Personalinfo() {
  return (
    <div className='row'>
      <div className='col-md-4'>
        <Form.Item name='firstName' label='First Name' rules={[{required:true}]}>
          <Input/>
        </Form.Item>
      </div>
      <div className='col-md-4'>
        <Form.Item name='lastName' label='Last Name' rules={[{required:true}]}>
          <Input/>
        </Form.Item>
      </div>
      <div className='col-md-4'>
        <Form.Item name='email' label='Email' rules={[{required:true}]}>
          <Input/>
        </Form.Item>
      </div>
      <div className='col-md-4'>
        <Form.Item name='mobileNumber' label='Mobile Number' rules={[{required:true}]}>
          <Input/>
        </Form.Item>
      </div>
      <div className='col-md-4'>
        <Form.Item name='portfolio' label='Potrfolio' rules={[{required:true}]}>
          <Input/>
        </Form.Item>
      </div>
      <div className='col-md-12'>
        <Form.Item name='careerObjective' label='Career Objective' rules={[{required:true}]}>
          <TextArea/>
        </Form.Item>
      </div>
      <div className='col-md-12'>
        <Form.Item name='address' label='Address' rules={[{required:true}]}>
          <TextArea/>
        </Form.Item>
      </div>
    </div>
  )
}

export default Personalinfo