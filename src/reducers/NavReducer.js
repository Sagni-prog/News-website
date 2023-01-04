
const NavReducer = (state,action) => {

    switch(action.type){
        case 'toggle': return {show: !state.show}
        default: 
    }
}

export default NavReducer