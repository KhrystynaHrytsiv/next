import {IComment} from "@/src/interfaces/IComment";
import {generalService} from "@/src/service/general";

interface IProp{
    params:{id:string}
}

const CommentDetailsPage = async ({params}:IProp) => {
    const {id} = await params;
    const comment = await generalService.getById<IComment>('comments', id);
    return (
        <div className='m-10'>
            <div>postId: {comment.id}</div>
            <div>Comment №: {comment.id}</div>
            <div>name: {comment.name}</div>
            <div>body: {comment.body}</div>
            <div>email: {comment.email}</div>
        </div>
    );
};

export default CommentDetailsPage;