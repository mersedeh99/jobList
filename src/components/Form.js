import React,{useState}from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import JobList from './jobList';

const SubmitForm = () =>{
const [title,setTitle] = useState(null)
const [desc,setDesc] = useState(null)
const [jobArray,setJobArray] = useState([])

const handleSubmit = () =>{
setJobArray(...jobArray,{
  title:title,
  desc:desc
})
}

    return(
      <>
        <Form onSubmit={handleSubmit} className="p-5">
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>JobTitle</Form.Label>
    <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setTitle(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Job Description</Form.Label>
    <Form.Control type="text" placeholder="Desc" onChange={(e)=>setDesc(e.target.value)} />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
<JobList jobArray={jobArray}/>
</>
    )
}

export default SubmitForm;