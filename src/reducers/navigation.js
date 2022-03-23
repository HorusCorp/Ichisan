const navigationReducer = (state = 1, action) => {
    switch(action.type){
        case 'NAVIGATE':
            return state = action.payload

        default:
            return state
    }
}
export default navigationReducer