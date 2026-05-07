import {IComment} from "@/src/interfaces/IComment";

const Comment = ({comment}:{comment:IComment}) => {
    return (
        <div>
            <a href={`/cooments/${comment.id}`}> {comment.id}</a>
            <div> name: {comment.name}</div>
            <div> body: {comment.body}</div>
            <div> email: {comment.email}</div>
        </div>
    );
};

export default Comment;