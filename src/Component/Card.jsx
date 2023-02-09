import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    // console.log("card prop",props)
    const { imgUrl, title, description, techId , articleid } = props;
    return (
        // <Link to="/DetailPage">
            <div>
        <NavLink 
            state={{
                title: title,
                img: imgUrl,
                description: description,
                id: techId,
            }}
            // to={`${techId}`}
            to={`${articleid}`}
        >
            <div >
                <div className="card__container">
                    <div className="card__image">
                        <img src={imgUrl} alt="{not found}" />
                    </div>
                    <div className="bigcard__data">
                        <h5>{title}</h5>
                        <p>{description}....</p>
                    </div>
                </div>
                <hr style={{ fontWeigth: "40px", color: "black" }} />
            </div>
        </NavLink>
        </div>
        //  </Link>
    );
};

export default Card;