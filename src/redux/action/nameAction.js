import actions from './types';

export const saveName = name => ({
    type: actions.SAVE_NAME,
    payload: name
});

export const removeName = () => ({
    type: actions.REMOVE_NAME,
    payload: ''
});
