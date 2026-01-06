import React, { useState } from "react";

const BookingForm = ({ availableTimeSlots, updateTimeSlots, onSubmitReservation }) => {
   const [selectedOccasion, setSelectedOccasion] = useState("");
   const [numberOfGuests, setNumberOfGuests] = useState("");
   const [selectedDate, setSelectedDate] = useState("");
   const [selectedTime, setSelectedTime] = useState("");

   const handleFormSubmission = (event) => {
      event.preventDefault();
      const formData = {
         date: selectedDate,
         time: selectedTime,
         guests: numberOfGuests,
         occasion: selectedOccasion
      };
      onSubmitReservation(formData);
   };

   const handleDateSelection = (dateValue) => {
      setSelectedDate(dateValue);
      updateTimeSlots(dateValue);
   };

   const occasionOptions = ["Birthday", "Anniversary", "Business", "Casual"];

  return (
    <header className="reservation-header">
      <section className="reservation-section">
        <form onSubmit={handleFormSubmission} className="reservation-form">
          <fieldset className="formField">
            <div className="form-group">
              <label htmlFor="book-date">Choose Date:</label>
              <input 
                id="book-date" 
                value={selectedDate} 
                onChange={(e) => handleDateSelection(e.target.value)} 
                type="date" 
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="book-time">Choose Time:</label>
              <select 
                id="book-time" 
                value={selectedTime} 
                onChange={(e) => setSelectedTime(e.target.value)} 
                required
              >
                <option value="">Select a Time</option>
                {availableTimeSlots.availableTimeSlots.map((timeSlot) => (
                  <option key={timeSlot} value={timeSlot}>
                    {timeSlot}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="book-guests">Number of Guests:</label>
              <input 
                id="book-guests" 
                min="1" 
                max="10"
                value={numberOfGuests} 
                onChange={(e) => setNumberOfGuests(e.target.value)} 
                type="number" 
                placeholder="0" 
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="book-occasion">Occasion:</label>
              <select 
                id="book-occasion" 
                value={selectedOccasion} 
                onChange={(e) => setSelectedOccasion(e.target.value)} 
                required
              >
                <option value="">Select an Option</option>
                {occasionOptions.map((occasion) => (
                  <option key={occasion} value={occasion}>
                    {occasion}
                  </option>
                ))}
              </select>
            </div>
            <div className="btnReceive">
              <input 
                aria-label="Submit reservation" 
                type="submit" 
                value="Make Your Reservation"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
