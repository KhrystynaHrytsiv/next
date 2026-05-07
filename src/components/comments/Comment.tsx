import {IComment} from "@/src/interfaces/IComment";

const Comment = ({comment}:{comment:IComment}) => {
    return (
        <div className='border-2 flex-col gap-4 w-2/3 m-3 p-3'>
            <a href={`/comments/${comment.id}`}> {comment.id}</a>
            <div> name: {comment.name}</div>
            <div> body: {comment.body}</div>
            <div> email: {comment.email}</div>
        </div>
    );
};

export default Comment;