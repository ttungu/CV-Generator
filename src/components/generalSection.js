import React from "react";
import {useState} from "react";
import Text from "./textSection"


function General() {
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
    })

    const [editMode, setEditMode] = useState(true);

    //Previous Value -> 
    const handleChange = (e) => {
        const target = e.target;
        setInfo((previousValue) => {
            let newValue = {...previousValue, [target.id]: target.value}
            return newValue;
        })
    }
        
    const handleSubmit = e => {
        e.preventDefault();
        setEditMode(!editMode);
    }
    
    if(!editMode){
        return (
            <Text
                firstName={info.firstName}
                lastName={info.lastName}
                phoneNumber={info.phoneNumber}
                email={info.email}
                handleEdit={handleSubmit}
            />
        )
    } else {
        return(
            <div>
                <form id="form-general" className="form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <p>First name
                    </p>
                    <input
                        type="text"
                        id="firstName"
                        value={info.firstName}
                        required
                        placeholder="Your name"
                        onChange={handleChange}></input>
                </div>
                <div className="form-item">
                    <p>Last name
                    </p>
                    <input
                        type="text"
                        id="lastName"
                        required
                        value={info.lastName}
                        placeholder=""
                        onChange={handleChange}></input>
                </div>
                <div className="form-item">
                    <p>Email
                    </p>
                    <input
                        type="text"
                        id="email"
                        required
                        value={info.email}
                        placeholder="example@example.com"
                        onChange={handleChange}></input>
                </div>
                <div className="form-item">
                    <p>Phone no.
                    </p>
                    <input
                        type="text"
                        id="phoneNumber"
                        required
                        value={info.phoneNumber}
                        placeholder="777 777 000"
                        onChange={handleChange}></input>
                </div>
            </form>
            <button className="general-submit-btn" form="form-general" type="submit">Save</button>
            </div>
            
        );
    }
   
        

    
}

export default General;