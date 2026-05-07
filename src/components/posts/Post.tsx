import {IPost} from "@/src/interfaces/IPost";

const Post = ({post}:{post:IPost}) => {
    return (
        <div className='border-1 flex-col gap-4 w-2/3 m-3 p-3'>
        <a href={`/posts/${post.id}`}>
            <h4 className='text-xl font-semibold'> {post.title}</h4>
            <h5 className='text-lg'> {post.body}</h5>
        </a>

        </div>
    );
};

export default Post;