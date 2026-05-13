import Post from "@/src/components/posts/Post";
import {generalService} from "@/src/service/general";
import {IPost} from "@/src/interfaces/IPost";


const Posts = async () => {
    const posts = await generalService.getAll<IPost>('posts');

    return (
        <div >
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    );
};

export default Posts;
