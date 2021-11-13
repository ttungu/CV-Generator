import React from "react";
import PrintProvider, { Print, NoPrint } from 'react-easy-print';

function Text(props) {
    if (props.firstName) {
        return (
            <NoPrint>
                <div className="text">
                    <button className="edit-btn" onClick={props.handleEdit}>Edit</button>
                    <Print>
                        <h2>{props.firstName} {props.lastName}</h2>
                        <p>{props.email}</p>
                        <p>{props.phoneNumber}</p>
                    </Print>
                </div>
            </NoPrint>
        )
    } else if (props.schoolName) {
        return (
            <div className="text">
                <button className="edit-btn" onClick={props.handleEdit}>Edit</button>
                <button className="delete-btn" onClick={props.handleDelete}>Delete</button>
                <Print>
                    <div className="name-year">

                        <h2>{props.schoolName}</h2>
                        <span> ({props.from} - {props.to})</span>
                    </div>
                    <p>{props.field}</p>
                </Print>
            </div>
        )
    } else if (props.companyName) {
        return (
            <div className="text">
                <button className="edit-btn" onClick={props.handleEdit}>Edit</button>
                <button className="delete-btn" onClick={props.handleDelete}>Delete</button>
                <Print>
                    <div className="name-year">
                        <h2>{props.companyName}</h2>
                        <span> ({props.from} - {props.to})</span>
                    </div>
                    <p>{props.position}</p>
                    <p>{props.description}</p>
                </Print>
            </div>
        )

    }
}

export default Text;