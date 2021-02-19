import types from "../action/types";

const stateReducer = {
    name: ''
};

export const nameReducer = (state = stateReducer, action) => {
    switch (action.type) {
        case types.SAVE_NAME:
            return { name: action.payload};
        case types.REMOVE_NAME:
            return { name: action.payload};
        default: return state;
    }
};
