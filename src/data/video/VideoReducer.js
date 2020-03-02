import {StorageService} from '../services/StorageService';

export const videoInitialState = {
    selectedVideo: {},
    videos: StorageService.get('videoList', [])
};

export function videoReducer(state, action){
    switch(action.type){
        case 'add':
            const newList = [...state.videos, action.value];
            StorageService.set('videoList', newList);
            return {...state, videos: newList};
        case 'select':
            return {...state, selectedVideo: action.value};
        default: return state;
    }
}