import React from "react";
import './Reservation.css'

function Reservation() {


  return (
    <>
      <div className="Reservation-Container">

        <div className="reservation-container">

          <form action="https://api.web3forms.com/submit" method="POST" className="reservation-section">
              <input type="hidden" name="access_key" value="a2efa853-d079-44a2-bdf6-bd4cdd803d0c"/>
              <lable htmlFor="Name">Name</lable>
              <input type="text" name="Name" placeholder="Your Name" className="input" required/>
              <lable htmlFor="Email">Email</lable>
              <input type="email" name="Email" placeholder="Your Email" className="input"  required/>
              <lable htmlFor="Date">Reservation Date</lable>
              <input type="datetime-local" name="Date" className="date-input"  required/>
              <button className="sub-button" type="submit">Submit</button>
          </form>

        </div><br/>

       
      </div>
    </>
  )
}

export default Reservation;