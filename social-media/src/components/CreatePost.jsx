import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

const CreatePost = () =>{

  const {addPost} = useContext(PostList);
  const navigate = useNavigate();

  const userIdElement=useRef();
  const titleElement=useRef();
  const descElement=useRef();
  const tagsElement=useRef();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = descElement.current.value;
    const tags = tagsElement.current.value.split(' ');

    /*userIdElement.current.value="";
    titleElement.current.value="";
    descElement.current.value="";
    tagsElement.current.value="";*/

    fetch('https://dummyjson.com/posts/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: title,
    userId: userId,
    body: body,
    tags:tags,
    reaction:0,
    /* other post data */
  })
})
.then(res => res.json())
.then(data => addPost(data));


    // addPost(userId,title,body,tags);
    navigate('/');
  }

    return <>
        <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
    <label htmlFor="userId" className="form-label">UserId</label>
    <input type="text" className="form-control" id="userId" ref={userIdElement} placeholder="Enter your UserId" />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input type="text" className="form-control" id="title" ref={titleElement} placeholder="How are you feeling today?" />
  </div>
<div className="mb-3">
  <label htmlFor="desc" className="form-label">Description</label>
  <textarea className="form-control" id="desc" ref={descElement} rows="3" placeholder="Tell us more about it."></textarea>
</div>

<div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input type="text" className="form-control" id="tags" ref={tagsElement} placeholder="Please Enter Tags using space" />
  </div>
<button type="submit" className="btn btn-primary">Post</button>
</form>
    </>
}

export default CreatePost;