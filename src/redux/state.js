// import profileReducer from "./profile-reducer";
// import userReducer from "./user-reducer";
//
// let store = {
//     _state : {
//         profilePage: {
//             posts: [
//                 {id:1,message:'Hi1',likesCount:1},
//                 {id:2,message:'Hi2',likesCount:3},
//                 {id:3,message:'Hi3',likesCount:5}
//             ],
//             newPostText: 'test',
//         },
//
//
//     },
//     _callSubscriber () {
//         console.log(123);
//     },
//     getState(){
//         return this._state;
//     },
//     rerenderEntireTree  () {
//         console.log(123);
//     },
//     addPost () {
//
//         let newPost = {
//             id:5,
//             message: this._state.profilePage.newPostText,
//             likesCount: 0
//         }
//         this._state.profilePage.posts.push(newPost);
//         this._state.profilePage.newPostText = '';
//
//         this._callSubscriber(this._state);
//     },
//     updateNewPostText(newPostText){
//
//         this._state.profilePage.newPostText = newPostText;
//         this._callSubscriber(this._state);
//     },
//     subscribe(observer){
//
//         this._callSubscriber = observer;
//
//     },
//     dispatch(action){
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action);
//
//         this._callSubscriber(this._state);
//
//
//     }
// }
//
//
//
// export default store;