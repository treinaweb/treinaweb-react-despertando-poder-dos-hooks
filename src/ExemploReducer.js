const myState = [];

function myReducer(state, action){
    switch(action.type){
        case 'add': return [...state, action.value];
        case 'remove': return state.filter(item => item.id !== action.value);
        case 'update': return state.map(item => (item.id !== action.value.id ? item : action.value));
        default: return state;
    }
}

const myState2 = myReducer(myState, {
    type: 'add', value: {id: 1, nome: 'chocolate'}
});
const myState3 = myReducer(myState2, {
    type: 'add', value: {id: 2, nome: 'leite'}
});
const myState4 = myReducer(myState3, {
    type: 'update', value: {id: 2, nome: 'Leite'}
});
const myState5 = myReducer(myState4, {
    type: 'remove', value: 2
});