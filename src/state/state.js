import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"


let store = {
    _state:{
        profilePage: {
            postData: [
                {
                    id: 1,
                    message: "Hello,my name is Tansu",
                    LikesCount: 20
                }, {
                    id: 2,
                    message: "My 3 day",
                    LikesCount: 46
                }
            ],
            newPostText:"Tansu Hello"
        },
        dialogsPage: {
            dialogData: [
                {
                    id: 1,
                    name: "Luke Skywoker",
                    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGgKT9ghTPIREaTmXo2ZA30FxE2eVXT0naQ&usqp=CAU'
                    
                }, {
                    id: 2,
                    name: "ChewBacca",
                    image:'https://vokrug.tv/pic/news/4/d/e/9/4de9ff942cdc6a7f43d7de10bf151153.jpg'
                }, {
                    id: 3,
                    name: "Han Solo",
                    image:'https://upload.wikimedia.org/wikipedia/ru/thumb/e/eb/HanEndor.jpg/280px-HanEndor.jpg'
                }, {
                    id: 4,
                    name: "Dart Weider",
                    image:'https://sun9-20.userapi.com/s/v1/if1/0p1AFNJ454RL8urtjNPvW1TD0lKWlSU92HoiFVVcurO0Sm1-1lGp-55PZ2EYKqwkYfcAZXj0.jpg?size=200x0&quality=96&crop=132,20,345,345&ava=1'
                }
            ],
            messageData: [
                {
                    id: 1,
                    message: "hELLO"
                }, {
                    id: 2,
                    message: "How u doing"
                }, {
                    id: 3,
                    message: "Bye,Bye"
                }, {
                    id: 4,
                    message: "Ne kakai"
                }
            ],
            newMessageText: " "
        }     
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log("Tree rerendering")
    },
   
    dispatch(action){
      type: ActionTypes.INIT 
        this._state.profilePage = profileReducer(this._state.profilePage,action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action)
        this._callSubscriber(this._state)
    },
   

    subscribe(observer){
        this._callSubscriber = observer
    }
    

}


export default store