import { useContext } from "react";
import {List} from '../store/ListContext'
import Post from "./Post";


const PostList = () => {

    const {listItem} = useContext(List);
    return <>
        <main className="container">

            {listItem.map(data => (
                <Post key={data.id} title={data.title} content={data.content} />
            ))}
        </main>
    </>
}

export default PostList;