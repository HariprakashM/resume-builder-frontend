import React from 'react'
import './../resources/defaultlayout.css'
import {Dropdown,Button,Menu}from 'antd'
import {  Link, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { createFromIconfontCN , HomeOutlined , FileDoneOutlined , CodepenCircleOutlined} from '@ant-design/icons';
function DefaultLayout(props) {
  const navigate=useNavigate()
  const user=JSON.parse(localStorage.getItem('logged-in-user'))
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
  });
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/home" className='d-flex align-items-center'><HomeOutlined style={{marginRight:"10px"}}/>Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile" className='d-flex align-items-center'><FileDoneOutlined style={{marginRight:"10px"}}/>Profile</Link>
      </Menu.Item>
      <Menu.Item onClick={()=>{
        localStorage.removeItem('logged-in-user');
        navigate('/login')
      }}>
        <span className='d-flex align-items-center'><IconFont type="icon-tuichu" style={{marginRight:"10px"}} />Logout</span>
      </Menu.Item>
    </Menu>
      
        
     
  );
  return (
    <div className='layout'>
        <div className='header'>
          <h1 onClick={()=>navigate('/home')} style={{cursor:'pointer'}} className='d-flex align-items-center'>
            <CodepenCircleOutlined style={{marginRight:"10px"}}/>Pixel CV</h1>
          <Dropdown overlay={menu} placement="bottom">
        <Button className='d-flex align-items-center'><UserOutlined/>{user.username}</Button>
      </Dropdown>
      </div>
        <div className='content'>{props.children}</div>
    </div>
  )
}

export default DefaultLayout