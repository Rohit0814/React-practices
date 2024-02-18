import Post from "./Post"
import { PostList as PostListData } from "../store/post-list-store";
import { useContext, useEffect, useState } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {

    const {addInitalPosts,postList} = useContext(PostListData);
    const [dataFetched,setDataFetched] = useState(false);

    /*useEffect(() =>{
        setDataFetched(true);
        // const controller = new AbortController();
        // const signal = controller.signal;
        fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
            addInitalPosts(data.posts);
            setDataFetched(false);
        });
    },[])*/

    // if(!dataFetched){
    // fetch('https://dummyjson.com/posts')
    // .then(res => res.json())
    // .then(data => {
    //     addInitalPosts(data.posts)});
    //     setDataFetched(true);
    // }

    const handGetPost = () =>{
        // fetch('https://dummyjson.com/posts')
        // .then(res => res.json())
        // .then(data => {
        //     addInitalPosts(data.posts)});
    }

    return <div className="post-box">
        {dataFetched && <LoadingSpinner />}
        {!dataFetched && postList.length==0 && <WelcomeMessage handGetPost={handGetPost}/>}
        { !dataFetched &&
            postList.map((post) => (
                <Post key={post.id} post={post}/>
            ))
        }
    </div>
}

export default PostList;