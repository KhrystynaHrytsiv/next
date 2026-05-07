import {Metadata} from "next";

export const metadata:Metadata ={
    title: 'CommentDetailsLayout metadata'
};
type Props = {children:React.ReactNode}
const CommentDetailsLayout = ({children}:Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default CommentDetailsLayout;