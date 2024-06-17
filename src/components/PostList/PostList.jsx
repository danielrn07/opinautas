import Post from "../Post/Post"

const PostList = ({ posts }) => {
  return (
    <div>
      {posts && posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

export default PostList
