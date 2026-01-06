import React from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = () => {
    return(
        <div className="comfirm">
            <div className="confirmation-message">
                <h1>
                    Booking has been <span>confirmed!</span>
                </h1>
                <p>We look forward to serving you at Little Lemon.</p>
                <Link to="/">
                    <button>Return to Home</button>
                </Link>
            </div>
        </div>
    );
}

export default ConfirmedBooking;