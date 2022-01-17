import React from "react";
import { Button, Table } from "react-bootstrap";

function ExperienceTable({ getEditableExperience, updateShowModal,  experiencesData, setexperiencesData }) {

    const sendExperienceData = ( experience, index) => {
        getEditableExperience( experience, index)
    }

    const del1=(id)=>{
        setexperiencesData((old)=>{
            return old.filter((v,i)=>{
                return i !== id
            })

        })


    }
    return (
        <div style={{ display: 'block', width: '96vw', textAlign: 'center' }} >
            <Table >
                <thead>
                    <tr>
                        <th style={{backgroundColor:"black",color: "white"}}>*</th>
                        <th style={{ width: '250px',backgroundColor:"black",color: "white" }}>Designation</th>
                        <th style={{ width: '250px' ,backgroundColor:"black",color: "white" }}>Company</th>
                        <th style={{ width: '250px' ,backgroundColor:"black",color: "white" }}>WorkForm</th>
                        <th style={{ width: '250px' ,backgroundColor:"black",color: "white" }}>Working Till</th>
                        <th style={{ width: '250px' ,backgroundColor:"black",color: "white"  }}>City</th>
                        <th style={{ width: '250px' ,backgroundColor:"black",color: "white"}}><Button variant="outline-primary" onClick={() => { updateShowModal('add', true) }}>Add</Button></th>
                    </tr>
                </thead>
                <tbody>
                    { experiencesData.map(( experience, index) => {
                        return (
                            <tr key={index} >
                                <td >{index + 1}</td>
                                <td>{ experience.designation}</td>
                                <td>{ experience.company}</td>
                                <td>{ experience.workfrom}</td>
                                <td>{ experience.workingtill}</td>
                                <td>{ experience.city}</td>
                                <td>
                                    <Button style={{ marginRight: '10px' }}
                                        variant="outline-success" onClick={() => {
                                            sendExperienceData(experience, index)
                                        }}>
                                        Update
                                    </Button>
                                    <Button variant="outline-danger" onClick={()=>{
                                        del1(index)
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

export default ExperienceTable;
