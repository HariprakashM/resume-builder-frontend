import React from 'react'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input, Space } from 'antd';
const {TextArea}=Input;
function Expandpro() {
  return (
    <>
    <h5><b>Experience</b></h5>
    <hr/>
    <Form.List name="experience">
    {(fields, { add, remove }) => (
      <>
        <div className='row'>
        {fields.map(({ key, name, ...restField }) => (
          <>
            <div className='col-md-3'>
            <Form.Item
              {...restField}
              name={[name, 'company']}
              rules={[
                {
                  required: true,
                  message: 'Missing Company',
                },
              ]}
            >
              <Input placeholder="Company" />
            </Form.Item>
            </div>
            <div className='col-md-2'>
            <Form.Item
              {...restField}
              name={[name, 'years']}
              rules={[
                {
                  required: true,
                  message: 'Missing Years',
                },
              ]}
            >
              <Input placeholder="Years" />
            </Form.Item>
            </div>
            <div className='col-md-3'>
            <Form.Item
              {...restField}
              name={[name, 'place']}
              rules={[
                {
                  required: true,
                  message: 'Missing Place',
                },
              ]}
            >
              <Input placeholder="Place" />
            </Form.Item>
            </div>
            <div className='col-md-2'>
            <Form.Item
              {...restField}
              name={[name, 'yearrange']}
              rules={[
                {
                  required: true,
                  message: 'Missing Year Range',
                },
              ]}
            >
              <Input placeholder="Year Range" />
            </Form.Item>
            </div>
            <div className='col-md-2'><MinusCircleOutlined style={{fontSize:25,color:"red"}} onClick={() => remove(name)} /></div>
         </>
        ))}
        </div>
        <Form.Item>
          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
            Add Experience
          </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
  <h5><b>Projects</b></h5>
    <hr/>
  <Form.List name="projects">
    {(fields, { add, remove }) => (
      <>
        <div className='row'>
        {fields.map(({ key, name, ...restField }) => (
          <>
            <div className='col-md-3'>
            <Form.Item
              {...restField}
              name={[name, 'title']}
              rules={[
                {
                  required: true,
                  message: 'Missing Title',
                },
              ]}
            >
              <Input placeholder="Title" />
            </Form.Item>
            </div>
            <div className='col-md-5'>
            <Form.Item
              {...restField}
              name={[name, 'description']}
              rules={[
                {
                  required: true,
                  message: 'Missing Description',
                },
              ]}
            >
              <TextArea placeholder="Description"/>
            </Form.Item>
            </div>
            <div className='col-md-2'>
            <Form.Item
              {...restField}
              name={[name, 'yearrange']}
              rules={[
                {
                  required: true,
                  message: 'Missing year Range',
                },
              ]}
            >
              <Input placeholder="year Range" />
            </Form.Item>
            </div>
            
            <div className='col-md-2'><MinusCircleOutlined style={{fontSize:25,color:"red"}} onClick={() => remove(name)} /></div>
         </>
        ))}
        </div>
        <Form.Item>
          <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
            Add Project
          </Button>
        </Form.Item>
      </>
    )}
  </Form.List>
</>
  )
}

export default Expandpro