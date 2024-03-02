import { createContext, useReducer } from "react"

export const List = createContext({
    listItem : [],
    addPost : () => {},
    deletePost: () => {}
});

const ListReducer = (currPostList, action) =>{
    let newPost = [];
    if(action.type == 'add'){
        
        newPost = [...currPostList,action.payload.postWithId];
    }
    if(action.type == 'delete'){
        newPost = currPostList.filter(post => post.id != action.payload.id);
    }
    return newPost;
}

const ListProvider = ({children}) => {
    const [listItem,dispatchList] = useReducer(ListReducer,DEFAULT_VALUE);

    const addPost = (post) =>{
        const postWithId = {...post,id: listItem.length+1};
        dispatchList({type:'add', payload: {postWithId}})
    }

    const deletePost = (id) => {
        dispatchList({type:'delete' , payload: {id}});
    }

    return <List.Provider value={{ 
        listItem,
        addPost,
        deletePost
     }}>
        {children}
    </List.Provider>
}

const DEFAULT_VALUE = [
    {
        id:1,
        title: 'Lorem ipsum',
        content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aperiam architecto corrupti est ducimus? Enim ab nobis deleniti. Exercitationem, illum!'
    },
    {
        id:2,
        title: 'Lorem ipsum',
        content : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem aperiam architecto corrupti est ducimus? Enim ab nobis deleniti. Exercitationem, illum!'
    }
]

export default ListProvider;