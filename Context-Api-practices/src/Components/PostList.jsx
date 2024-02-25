import Post from "./Post";

const PostList = () => {

    const postList = [
        {
            id:1,
            heading: "Navbar example",
            title: "This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport."
        },
        {
            id:2,
            heading: "Navbar example",
            title: "This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport."
        },
        {
            id:3,
            heading: "Navbar example",
            title: "This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport."
        }
    ]

    return <>
        <main className="container">

            {postList.map(data => (
                <Post key={data.id} heading={data.heading} title={data.title}/>
            ))}
            
            {/* <Post heading = "Navbar example" title="This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport."/>
            <Post heading = "Navbar example" title="This example is a quick exercise to illustrate how fixed to top navbar works. As you scroll, it will remain fixed to the top of your browser’s viewport."/> */}
</main>
    </>
}

export default PostList;