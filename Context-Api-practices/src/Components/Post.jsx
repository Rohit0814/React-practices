const Post = ({title, content}) => {
    return <div className="bg-body-tertiary p-3 my-5 rounded">
    <h4>{title}</h4>
    <p>{content}</p>
    <a className="btn btn-warning" href="/docs/5.3/components/navbar/" role="button">View docs »</a>
  </div>
}

export default Post;