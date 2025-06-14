import React from "react";

export const Card = (props) => {
    return (
        <div class="card text-center" style={{width: "18rem"}}>
            <img src={props.imgURL} class="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.cardText}</p>
                <a href={props.buttonURL} class="btn btn-primary">{props.buttonLabel}</a>
            </div>
        </div>
    );
};