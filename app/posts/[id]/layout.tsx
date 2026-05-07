import {Metadata} from "next";

export const metadata:Metadata ={
    title: 'PostDetailsLayout metadata'
};
type Props = {children:React.ReactNode}
const PostDetailsLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default PostDetailsLayout;