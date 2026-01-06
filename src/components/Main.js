import React, { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Booking from "./Booking";
import ConfirmedBooking from "./ConfirmedBooking";
import Header from "./Header";

const PageContent = () => {
    // Pseudo-random number generator for consistent time slot availability
    const createTimeSlotGenerator = (seedValue) => {
        const modulus = 2**35 - 31;
        const multiplier = 185852;
        let currentSeed = seedValue % modulus;
        
        return () => {
            currentSeed = (currentSeed * multiplier) % modulus;
            return currentSeed / modulus;
        };
    }

    const retrieveAvailableTimeSlots = (selectedDate) => {
        const timeSlots = [];
        const generator = createTimeSlotGenerator(selectedDate.getDate());
        const openingHour = 17;
        const closingHour = 23;

        for(let hour = openingHour; hour <= closingHour; hour++) {
            if(generator() < 0.5) {
                timeSlots.push(`${hour}:00`);
            }
            if(generator() < 0.5) {
                timeSlots.push(`${hour}:30`);
            }
        }
        return timeSlots;
    };

    const processReservationSubmission = (reservationData) => {
        // In a real application, this would send data to a backend API
        return true;
    };

    const initialBookingState = {
        availableTimeSlots: retrieveAvailableTimeSlots(new Date())
    };

    const [bookingState, updateBookingState] = useReducer(
        bookingTimeSlotReducer, 
        initialBookingState
    );

    function bookingTimeSlotReducer(currentState, selectedDate) {
        return {
            availableTimeSlots: retrieveAvailableTimeSlots(new Date(selectedDate))
        };
    }

    const navigate = useNavigate();
    
    const handleReservationSubmission = (reservationData) => {
        if (processReservationSubmission(reservationData)) {
            navigate("/confirmed");
        }
    }

    return(
        <main className="main-content">
            <Routes>
                <Route path="/" element={<Header />} />
                <Route 
                    path="/booking" 
                    element={
                        <Booking 
                            availableTimeSlots={bookingState} 
                            updateTimeSlots={updateBookingState} 
                            onSubmitReservation={handleReservationSubmission}
                        />} 
                />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </main>
    );
}

export default PageContent;