import { createContext, useReducer } from "react";


export const PostList=createContext({
    postList: [],
    addPost: () => {},
    addInitalPosts: () => {},
    deletePost: () => {}
});

const postListReducer = (currPostList, action) => {
    console.log(currPostList);
    console.log(action);
    let newPostList=currPostList;
    if(action.type==='Delete_post'){
        newPostList = currPostList.filter(post => post.id!==action.payload.postId)
    }
    else if(action.type==='Add_inital_post'){
        newPostList=action.payload.post;
    }
    else if(action.type==='Add_post'){
        newPostList = [action.payload.post,...currPostList]
    }
    return newPostList;
}

const PostListProvider = ({children}) =>{

    const [postList, dispatchPostList] = useReducer(postListReducer,[]);

    const addPost = (post) =>{
        dispatchPostList({
            type:'Add_post',
            payload : {
               post
            }
        })

    }


    const addInitalPosts = (post) =>{
        dispatchPostList({
            type:'Add_inital_post',
            payload : {
                post
            }
        })

    }

    const deletePost = (postId) =>{
        // console.log(`Post id ${postId}`);
        dispatchPostList({
            type: 'Delete_post',
            payload:{
                postId,
            },
        })
    }


    return <PostList.Provider value={{
        postList,
        addPost,
        addInitalPosts,
        deletePost
    }}>
        {children}
    </PostList.Provider>
}


// const DEFAULT_POST_LIST = [{
//     id: '1',
//     title : 'Going to mumbai',
//     desc : 'Hi guys! I am going to mumbai in vaccation',
//     reaction : 2,
//     userId: 'user-9',
//     tags: ['vacation','Mumbai','Enjoyment']
// },
// {
//     id: '2',
//     title : 'pass ho gya bhai',
//     desc : '4 sal ki masti ke bat finnaly pass ho gye',
//     reaction : 15,
//     userId: 'user-12',
//     tags: ['Graduating','Masti']
// }

// ]

export default PostListProvider;