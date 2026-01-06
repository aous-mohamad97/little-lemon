import React from "react";
import BookingForm from "./BookingForm";

const Booking = ({ availableTimeSlots, updateTimeSlots, onSubmitReservation }) => {
    return (
        <BookingForm 
            availableTimeSlots={availableTimeSlots} 
            updateTimeSlots={updateTimeSlots} 
            onSubmitReservation={onSubmitReservation}
        />
    );
}

export default Booking;