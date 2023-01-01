import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

import { updateTimes, initializeTimes } from "./Main";

describe("Reservation Form", () => {
    test("Form renders", () => {
        const availableTimes = [17, 18, 19, 20, 21, 22];
        const dispatch = jest.fn();

        render(
            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        );
        const headingElement = screen.getByText("Make Your reservation");
        expect(headingElement).toBeInTheDocument();
    });

    test("test updateTimes", () => {
        const INITIAL_STATE = [17, 18, 19, 20, 21, 22];
        const EXPECTED_STATE = [17, 18, 19, 20, 21, 22];
        const action = { type: "SOME_ACTION" };
        expect(initializeTimes()).toEqual(INITIAL_STATE);
        expect(updateTimes(INITIAL_STATE, action)).toEqual(EXPECTED_STATE);
    });
});
