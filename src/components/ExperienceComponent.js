import React, { useState } from 'react'
import ExperienceForm from './ExperienceForm'
import ExperienceTable from './ExperienceTable'

function ExperienceComponent() {
    const [experiencesData, setexperiencesData] = useState([])
    const [showModal, setshowModal] = useState(false)
    const [modalType, setmodalType] = useState('')
    const [editableExperience, seteditableExperience] = useState({
        designation: ' ',
        company: '',
        workfrom: ' ',
        workingtill: ' ',
        city: ' '
    })
    const [selectedIndex, setselectedIndex] = useState()
    const updateShowModal = (type, isShow) => {
        setmodalType(type)
        setshowModal(isShow)
        seteditableExperience({
            designation: ' ',
            company: '',
            workfrom: ' ',
            workingtill: ' ',
            city: ' '
        })
    }
    const getExperienceData = (experienceData) => {
        console.log(experienceData);
        if (modalType === 'add') {
            const experiencesDataCopy = [...experiencesData]
            experiencesDataCopy.push(experienceData)
            setexperiencesData(experiencesDataCopy)
            setshowModal(false)
        } else if (modalType === 'edit') {
            const updatedData = experiencesData.map((data, index) => {
                if (selectedIndex === index) {
                    return experienceData
                } else {
                    return data
                }
            })
            const updatedDataCopy = [...updatedData]
            setexperiencesData(updatedDataCopy)
            setshowModal(false)
        }

    }
    const getEditableExperience = (exp, index) => {
        console.log(exp);
        console.log(index);
        seteditableExperience({ ...exp })
        setselectedIndex(index)
        setmodalType('edit')
        setshowModal(true)
    }
    return (
        <div>
            <ExperienceTable
                experiencesData={experiencesData}
                updateShowModal={updateShowModal}
                getEditableExperience={getEditableExperience}
                setexperiencesData={setexperiencesData} />
            {showModal && <ExperienceForm
                showModal={showModal}
                updateShowModal={updateShowModal}
                getExperienceData={getExperienceData}
                editableExperience={editableExperience}
                modalType={modalType}
            />}
        </div>
    )
}

export default ExperienceComponent
