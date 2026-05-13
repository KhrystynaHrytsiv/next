import {IPost} from "@/src/interfaces/IPost";
import {generalService} from "@/src/service/general";

interface IProp {
    params:{id:string}
}

const PostDetailsPage = async ({params}:IProp) => {
    const {id} = await params;
    const post = await generalService.getById<IPost>('posts', id);
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