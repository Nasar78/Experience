import React from "react";
import { Button, Table } from "react-bootstrap";

function EducationalTable({ getEditableEducation, updateShowModal, educationalData,seteducationalData }) {

    const sendEducationData = (education, index) => {
        getEditableEducation(education, index)
    }
   const delets=(id)=>{
    seteducationalData((old)=>{
        return old.filter((v,i)=>{
            return i!==id

        })
    })
   }
    
    return (
        <div style={{ display:'block', width:'96vw', textAlign:'center' }}  >
            <Table >
                <thead>
                    <tr>
                        <th>*</th>
                        <th style={{ width: '250px',color:'white' }}>Education</th>
                        <th style={{ width: '250px',color:'white' }}>Course</th>
                        <th style={{ width: '250px' ,color:'white'}}>Institution</th>
                        <th style={{ width: '250px',color:'white' }}>Year of Passing</th>
                        <th style={{ width: '250px',color:'white' }}>Percentage</th>
                        <th style={{ width: '250px',color:'white' }}><Button variant="outline-primary" onClick={() => { updateShowModal('add', true) }}>Add</Button></th>
                    </tr>
                </thead>
                <tbody>
                    {educationalData.map((education, index) => {
                        return (
                            <tr key={index} >
                                <td className="color" >{index + 1}</td>
                                <td className="color">{education.education}</td>
                                <td className="color">{education.course}</td>
                                <td className="color">{education.institution}</td>
                                <td className="color">{education.yop}</td>
                                <td className="color"   >{education.percentage}</td>
                                <td>
                                    <Button style={{ marginRight: '10px',backgroundColor:"green",color:"white" }}
                                        variant="outline-success" onClick={() => {
                                            sendEducationData(education, index)
                                        }}>
                                        Update
                                    </Button>
                                    <Button variant="outline-danger" id="btn" onClick={()=>{
                                       delets(index)
                                    }}>Delete</Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default EducationalTable;
