type CounterState = {
    counter: number;
    status: string;
};

export const initialState: CounterState = {
    counter: 0,
    status: "Pending",
};

type CounterTypes = {
    type: "increment" | "decrement" | "reset";
};

type StatusTypes = {
    type: "setStatus";
    payload: "Active" | "Inactive";
};

type CounterActions = CounterTypes | StatusTypes;

export function counterReducer(
    state: CounterState,
    action: CounterActions,
): CounterState {
    console.log(action);

    switch (action.type) {
        case "increment":
            return { ...state, counter: state.counter + 1 };
        case "decrement":
            return { ...state, counter: state.counter - 1 };
        case "reset":
            return { ...state, counter: 0 };
        case "setStatus":
            return { ...state, status: action.payload };

        default:
            const unHandledStatus: never = action;
            return state;
    }

    return state;
}
