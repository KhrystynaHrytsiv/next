import {IPost} from "@/src/interfaces/IPost";
import Link from "next/link";

const Post = ({post}:{post:IPost}) => {
    return (
        <div className='border-1 flex-col gap-4 w-2/3 m-3 p-3'>
        <Link href={`/posts/${post.id}`}>
            <h4 className='text-xl font-semibold'> {post.title}</h4>
            <h5 className='text-lg'> {post.body}</h5>
        </Link>

        </div>
    );
};

export default Post;