const Post = ({heading, title}) => {
    return <div className="bg-body-tertiary p-3 my-5 rounded">
    <h4>{heading}</h4>
    <p>{title}</p>
    <a className="btn btn-warning" href="/docs/5.3/components/navbar/" role="button">View docs »</a>
  </div>
}

export default Post;