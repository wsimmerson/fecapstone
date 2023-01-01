import React, { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
    const [resDate, setResDate] = useState();
    const [resTime, setResTime] = useState();
    const [numGuests, setNumGuests] = useState(2);
    const [occasion, setOccasion] = useState("Anniversary");

    return (
        <form>
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={resDate}
                onChange={(e) =>
                    dispatch({ type: "date_change", payload: e.target.value })
                }
            />
            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time "
                value={resTime}
                onChange={(e) => setResTime(e.target.value)}
            >
                {availableTimes.map((t, i) => (
                    <option key={i}>{t}:00</option>
                ))}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                value={numGuests}
                onChange={(e) => setNumGuests(e.target.value)}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <br />
            <input
                type="submit"
                value="Make Your reservation"
                className="btn"
            />
        </form>
    );
}

export default BookingForm;
