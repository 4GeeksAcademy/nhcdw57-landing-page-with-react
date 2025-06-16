import React from "react";

export const Card = (props) => {
    return (
        <div className="card text-center my-3" style={{width: "18rem"}}>
            <img src={props.imgURL} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.cardText}</p>
                <a href={props.buttonURL} className="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    );
};