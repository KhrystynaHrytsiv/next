import {IComment} from "@/src/interfaces/IComment";

const Comment = ({comment}:{comment:IComment}) => {
    return (
        <div>
            <div> name: {comment.name}</div>
            <div> body: {comment.body}</div>
            <div> email: {comment.email}</div>
        </div>
    );
};

export default Comment;