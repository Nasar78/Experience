import React, { useState } from 'react'
import EducationalForm from './EducationalForm'
import EducationalTable from './EducationalTable'

function EducationalComponent() {
    const [educationalData, seteducationalData] = useState([])
    const [showModal, setshowModal] = useState(false)
    const [modalType, setmodalType] = useState('')
    const [editableEducation, seteditableEducation] = useState({
        education:' ',
        course: '',
        institution: ' ',
        yop:' ' ,
        percentage: ' '
    })
    const [selectedIndex, setselectedIndex] = useState()
    const updateShowModal = (type, isShow) => {
        setmodalType(type)
        setshowModal(isShow)
        seteditableEducation({
            education: ' ',
            course: '',
            institution: ' ',
            yop:' ',
            percentage: ' '
        })
    }
    const getEducationData = (educationData) => {
        console.log(educationData);
        if (modalType === 'add') {
            const educationalDataCopy = [...educationalData]
            educationalDataCopy.push(educationData)
            seteducationalData(educationalDataCopy)
            setshowModal(false)
        } else if (modalType === 'edit') {
            const updatedData = educationalData.map((data, index) => {
                if (selectedIndex === index) {
                    return educationData
                } 
                else {
                    return data
                }
            })
            const updatedDataCopy = [...updatedData]
            seteducationalData(updatedDataCopy)
            setshowModal(false)
        }

    }
    const getEditableEducation = (educ, index) => {
        console.log(educ);
        console.log(index);
        seteditableEducation({ ...educ })
        setselectedIndex(index)
        setmodalType('edit')
        setshowModal(true)
    }
    return (
        <div className="her">
            <EducationalTable

                educationalData={educationalData}
                updateShowModal={updateShowModal}
                getEditableEducation={getEditableEducation} 
                seteducationalData={seteducationalData}/>
            {showModal && <EducationalForm
                showModal={showModal}
                updateShowModal={updateShowModal}
                getEducationData={getEducationData}
                editableEducation={editableEducation}
                modalType={modalType}
            />}
        </div>
    )
}

export default EducationalComponent
