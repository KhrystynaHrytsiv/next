import {FC} from "react";
import {IComment} from "@/src/interfaces/IComment";
interface IProp{
    params:{id:string}
}

const CommentDetailsPage:FC<IProp> = async ({params}) => {
    const {id} = await params;
    const comment:IComment = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`).then(response => response.json());

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