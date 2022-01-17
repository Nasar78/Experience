import React, { useEffect, useState } from 'react'
import { Button, FormGroup, Modal ,Form } from 'react-bootstrap'

function EducationalForm(props) {
    const [educationFormData, seteducationFormData] = useState({
        education:' ',
        course: '',
        institution: '',
        yop: '',
        percentage: ' '
    })
    const handleClose = () => {
        props.updateShowModal('', false)
    }
    const saveData = () => {
        props.getEducationData(educationFormData)

    }
    useEffect(() => {
        seteducationFormData({ ...props.editableEducation })
    }, [props.editableEducation])

    return (
        <div >
            <Modal show={props.showModal} onHide={handleClose} >
                <Modal.Header closeButton >
                    <Modal.Title>Educational Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="form1" >
                        <FormGroup style={{fontWeight: 'bold' }}>
                            <label >Education: </label>
                            <input style={{ margin: '10px', borderRadius: '5px' }}
                                value={educationFormData.education}
                        onChange={(e) => {
                            seteducationFormData({
                                ...educationFormData,
                                education: e.target.value
                            })
                        }} /><br />
                            <label  >Course: </label>
                            <input   style={{ margin: '10px',borderRadius:'5px' }}
                                value={educationFormData.course}
                                onChange={(e) => {
                                    seteducationFormData({
                                        ...educationFormData,
                                        course: e.target.value
                                    })
                                }} /><br />
                            <label  >Institute: </label>
                            <input   style={{ margin: '10px',borderRadius:'5px' }}
                        value={educationFormData.institution}
                        onChange={(e) => {
                            seteducationFormData({
                                ...educationFormData,
                                institution: e.target.value
                            })
                                }} /><br />
                            <label >Year of Passing: </label>
                            <input   style={{ margin: '10px', borderRadius: '5px' }}
                                value={educationFormData.yop}
                                onChange={(e) => {
                                    seteducationFormData({
                                        ...educationFormData,
                                        yop: e.target.value
                                    })
                                }} /><br />
                            <label  >Percentage: </label>
                            <input   style={{ margin: '10px', borderRadius: '5px' }}
                        value={educationFormData.percentage}
                        onChange={(e) => {
                            seteducationFormData({
                                ...educationFormData,
                                percentage: e.target.value
                            })
                        }} />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={saveData}>
                        {props.modalType === 'add' ? 'ADD' : 'EDIT'}
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default EducationalForm
