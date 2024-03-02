import { useContext } from "react";
import { List } from "../store/ListContext";

const Post = ({post}) => {

    const {deletePost} = useContext(List);

    const deleteData = (id) =>{
      deletePost(id);
    }

    return <div className="bg-body-tertiary p-3 my-5 rounded">
    <h4>{post.title}</h4>
    <p>{post.content}</p>
    <a className="btn btn-warning" href="/docs/5.3/components/navbar/" role="button">View docs »</a>&nbsp;&nbsp;
    <button className="btn btn-danger" onClick={() => deleteData(post.id)}>Delete Post</button>
  </div>
}

export default Post;