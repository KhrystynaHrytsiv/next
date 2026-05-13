import {IComment} from "@/src/interfaces/IComment";
import Comment from "@/src/components/comments/Comment";
import {generalService} from "@/src/service/general";


const Comments = async () => {
   const comments = await generalService.getAll<IComment>('comments');
    return (
        <div>
            {comments.map(com => <Comment key={com.id} comment={com}/>)}
        </div>
    );
};

export default Comments;