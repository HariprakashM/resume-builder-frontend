import { Tabs ,Form, Button,Spin, message} from 'antd';
import React, { useState } from 'react';
import axios from 'axios';

import DefaultLayout from '../components/DefaultLayout'
import Expandpro from '../components/Expandpro';
import Personalinfo from '../components/Personalinfo';
import Skillsandedu from '../components/Skillsandedu';
import {config} from './../config';
//import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
 import { useNavigate } from 'react-router-dom';
const { TabPane } = Tabs;
function Profile() {
    const navigate=useNavigate();
    const user=JSON.parse(localStorage.getItem('logged-in-user'));
    const [loading,setloading]=useState(false);
    const onFinish=async (values)=>{
        setloading(true);
        try {
          const result=await axios.post(`${config.api}/api/user/update`,{...values,_id:user._id});
          localStorage.setItem('logged-in-user',JSON.stringify(result.data))
          setloading(false);
          message.success('Profile updated successfull')
          navigate('/home')
        } catch (error) {
          setloading(false);
          message.error('Update failed')
        }
    
      }
    //   const notify = () => toast.success('Profile Updated successfully', {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //   });
    return (
        <DefaultLayout>
            {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
            {loading &&(<Spin size="large"/>)}
            <div className='update-profile' >
                <h4><b>Update profile</b></h4>
                <hr/>
                <Form layout='vertical'onFinish={onFinish} initialValues={user}>
                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Personal Info" key="1">
                        <Personalinfo/>
                    </TabPane>
                    <TabPane tab="Skills and Education" key="2">
                        <Skillsandedu/>
                    </TabPane>
                    <TabPane tab="Experience and Projects" key="3">
                        <Expandpro/>
                    </TabPane>
                </Tabs>
                <Button htmlType='submit' >UPDATE</Button>
                </Form>
            </div>
        </DefaultLayout>
    )
}

export default Profile