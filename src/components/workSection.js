import React from "react";
import { useState } from "react";
import Text from "./textSection"

function Work(props) {
    const [workInfo, setWorkInfo] = useState({
        companyName: "",
        position: "",
        from: "",
        to: "",
        description: "",
    });


    const [editMode, setEditMode] = useState(true);

    const handleChange = e => {
        const target = e.target;
        setWorkInfo(previousValue => {
            let newValue = { ...previousValue, [target.id]: target.value }
            return newValue
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setEditMode(!editMode);
    }

    const {handleDelete, id } = props;

    if (!editMode) {
        return (
            <Text
                companyName={workInfo.companyName}
                position={workInfo.position}
                from={workInfo.from}
                to={workInfo.to}
                description={workInfo.description}
                handleEdit={handleSubmit}
                handleDelete={()=> handleDelete("work", id)}
            />
        )
    } else {
        return (
            <div>
                <form id="form-work" className="form" onSubmit={handleSubmit}>
                    <div className="form-item">
                        <p>Company Name
                        </p>
                        <input
                            type="text"
                            id="companyName"
                            value={workInfo.companyName}
                            required
                            placeholder="Enter your school name"
                            onChange={handleChange}></input>
                    </div>
                    <div className="form-item">
                        <p>Position
                        </p>
                        <input
                            type="text"
                            id="position"
                            value={workInfo.position}
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
                            value={workInfo.from}
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
                            value={workInfo.to}
                            required
                            onChange={handleChange}></input>
                    </div>
                    
                </form>
                <textarea
                        placeholder="Describe your main tasks"
                        id="description"
                        rows="5"
                        required
                        value={workInfo.description}
                        onChange={handleChange}
                    ></textarea>
                <div className="form-btns">
                    <button className="submit-btn" form="form-work" type="submit">Save</button>
                    <button className="submit-btn" onClick={() => handleDelete("work", id)}>Delete</button>
                </div>

            </div>
        )
    }
}
export default Work;