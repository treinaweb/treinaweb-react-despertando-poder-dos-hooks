export const myState = [];

export function myReducer(state, action){
    switch(action.type){
        case 'add': return [...state, {id: Date.now()}];
        case 'remove': return state.filter(item => item.id !== action.value);
        case 'update': return state.map(item => (item.id !== action.value.id ? item : action.value));
        default: return state;
    }
}