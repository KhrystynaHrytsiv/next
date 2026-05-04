'use client'
import {useEffect, useState} from "react";
import {IPost} from "@/src/interfaces/IPost";
import Post from "@/src/components/posts/Post";


const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
    }, []);
    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export default Posts;
