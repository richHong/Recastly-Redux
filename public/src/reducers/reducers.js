import exampleVideoData from '../../data/exampleVideoData';

export default function videoReducer(state ={
  video: exampleVideoData[0],
  videos: exampleVideoData
}, action){
  switch (action.type){
    case 'ADD_VIDEO':
      return Object.assign({}, state, {
        video : action.video
      });
    case 'BANANA':
      return Object.assign({}, state, {
        videos: action.videos.items
      });
    default:
      return state;
  }
}