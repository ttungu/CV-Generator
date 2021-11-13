import React from "react";
import { useState } from "react";
import Text from "./textSection";

function Education(props) {
    const [educationInfo, setEducationInfo] = useState({
        schoolName: "",
        field: "",
        from: "",
        to: "",
    })

    const [editMode, setEditMode] = useState(true);
    const {handleDelete, id} = props

    const handleChange = (e) => {
        const target = e.target;
        setEducationInfo(previousValue => {
            let newValue = { ...previousValue, [target.id]: target.value }
            return newValue;
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setEditMode(!editMode);
    }
    if (!editMode) {
        return (
            <Text
                schoolName={educationInfo.schoolName}
                field={educationInfo.field}
                from={educationInfo.from}
                to={educationInfo.to}
                handleEdit={handleSubmit}
                handleDelete={()=>handleDelete("education", id)}
            />
        )
    } else {
        return (
            <div>
                <form id="form-education" className="form" onSubmit={handleSubmit}>
                    <div className="form-item">
                        <p>School Name
                        </p>
                        <input
                            type="text"
                            id="schoolName"
                            value={educationInfo.schoolName}
                            required
                            placeholder="Enter your school name"
                            onChange={handleChange}></input>
                    </div>
                    <div className="form-item">
                        <p>Study field
                        </p>
                        <input
                            type="text"
                            id="field"
                            value={educationInfo.field}
                            required
                            placeholder="Enter field"
                            onChange={handleChange}></input>
                    </div>
                    <div className="form-item">
                        <p>Start
                        </p>
                        <input
                            type="number"
                            min="1950"
                            max="2099"
                            id="from"
                            value={educationInfo.from}
                            required
                            onChange={handleChange}></input>
                    </div>
                    <div className="form-item">
                        <p>End
                        </p>
                        <input
                            type="number"
                            id="to"
                            min="2021"
                            max="2099"
                            value={educationInfo.to}
                            required
                            onChange={handleChange}></input>
                    </div>
                </form>
                <div className="form-btns">
                    <button className="submit-btn" form="form-education" type="submit">Save</button>
                    <button className="submit-btn" onClick={() => handleDelete("education", id)}>Delete</button>
                </div>

            </div>
        );
    }



}

export default Education;