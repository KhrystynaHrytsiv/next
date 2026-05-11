import {FC} from "react";
import {IPost} from "@/src/interfaces/IPost";
interface IProp {
    params:{id:string}
}

const PostDetailsPage:FC<IProp> = async ({params}) => {
    const {id} = await params;
    const post:IPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
              .then(response => response.json())
    return (
        <div className='m-10'>
           <div> id: {post.id}</div>
           <div> userId: {post.userId}</div>
           <h3 className='text-lg font-bold'> {post.title}</h3>
           <div className='text-lg '> {post.body}</div>
        </div>
    );
};

export default PostDetailsPage;