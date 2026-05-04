'use client'
import {useEffect, useState} from "react";
import {IComment} from "@/src/interfaces/IComment";
import Comment from "@/src/components/comments/Comment";


const Comments = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
                  .then(response => response.json())
                  .then(data => setComments(data))
    }, []);
    return (
        <div>
            {comments.map(com => <Comment key={com.id} comment={com}/>)}
        </div>
    );
};

export default Comments;