import React from 'react';
import steak from "../../img/steak.jpg";
import "./Review.css";


function Review({profileURL,username,userid,rating,comments}){
    return(

        <div className="Review-box">

            <div className="review-top">

                <div className="profile">

                    <img className='imgSetting' src={profileURL}/>

                    <div className="userName">
                        <b>{username} </b>
                        <span>@{userid}</span>

                    </div>

                </div>

                <div className="rating">
                    <p>Rated:{rating}/5</p>
                </div>

            </div>

            <div className="comment-container">
                <p>{comments}</p>
            </div>

        </div>
    )
}

export default function FoodReview(){
    return(

        <div className="Review-page">

            <div className="Header">
                <h1>Comment</h1>
            </div>
           

            <div className="Review-container">
             
                <Review 
                    profileURL={steak}
                    username="Tom Hernandez"
                    rating="3"
                    comments="My order arrived safe and sound. The bottles were wrapped securely in layers of bubble wrap. My order came from Amazon and not from a different business. Very happy to see Amazon carry this sauce as I used to have to order it from a different grocery outlet that has since gone out of business."
                    userid="tom009"
                />
                
                <Review 
                    profileURL={steak}
                    username="Tzuyu"
                    rating="5"
                    userid="thinkaboutzu"
                    comments="My order arrived safe and sound. The bottles were wrapped securely in layers of bubble wrap. My order came from Amazon and not from a different business. Very happy to see Amazon carry this sauce as I used to have to order it from a different grocery outlet that has since gone out of business."
                />

                <Review 
                    profileURL={steak}
                    username="Tom Hernandez"
                    rating="4"
                    userid="herandez2"
                    comments="My order arrived safe and sound. The bottles were wrapped securely in layers of bubble wrap. My order came from Amazon and not from a different business. Very happy to see Amazon carry this sauce as I used to have to order it from a different grocery outlet that has since gone out of business."
                />
                <Review 
                    profileURL={steak}
                    username="Jay Park"
                    rating="2"
                    userid="twiceforever"
                    comments="My order arrived safe and sound. The bottles were wrapped securely in layers of bubble wrap. My order came from Amazon and not from a different business. Very happy to see Amazon carry this sauce as I used to have to order it from a different grocery outlet that has since gone out of business."
                />
                <Review 
                    profileURL={steak}
                    username="Joshua Lee"
                    rating="3"
                    comments="My order arrived safe and sound. The bottles were wrapped securely in layers of bubble wrap. My order came from Amazon and not from a different business. Very happy to see Amazon carry this sauce as I used to have to order it from a different grocery outlet that has since gone out of business."
                />
                        
               

            </div>

        </div>
    )

}