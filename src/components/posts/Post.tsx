import {IPost} from "@/src/interfaces/IPost";

const Post = ({post}:{post:IPost}) => {
    return (
        <div>
        <a href={`/posts/${post.id}`}>
            <h4> {post.title}</h4>
            <h5> {post.body}</h5>
        </a>

        </div>
    );
};

export default Post;