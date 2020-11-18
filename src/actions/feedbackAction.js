export const CLOSE_FEEDBACK = 'CLOSE_FEEDBACK';
export const OPEN_FEEDBACK = 'OPEN_FEEDBACK';

  
export const closeFeedback = () => ({
    type: CLOSE_FEEDBACK,
    payload: {}
});


export const OpenFeedback = (type,message) => ({
    type: OPEN_FEEDBACK,
    payload: {type,message}
});
