// import action, { SHOW_DATA } from './action'

const initalState = {
    profile_pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTNBzg8T2w_XEXdwlRknikBsc1sagwI-RvQhg&usqp=CAU',
    name: 'DelNaz Irani',
    description: 'Delnaz is a feminine Indian Parsi name meaning "loved of the heart". Many variations in the spelling of the name such as Dilnaz, Delnaaz, etc. exist but the pronunciation is the same',
    category: ['Film Actor', 'BollyWood']


}
const DetailReducer = (state = initalState, action) => {
    switch (action.type) {
        // case SHOW_DATA:
        //     return {
        //         ...state
        //     }

        default:
            return state
    }
}

export default DetailReducer