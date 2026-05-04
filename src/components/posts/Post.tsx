import {IPost} from "@/src/interfaces/IPost";

const Post = ({post}:{post:IPost}) => {
    return (
        <div>
            <h4> {post.title}</h4>
            <h5> {post.body}</h5>
        </div>
    );
};

export default Post;