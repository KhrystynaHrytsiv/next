import {Metadata} from "next";

export const metadata:Metadata ={
    title: 'AboutLayout metadata',
    description: "about layout description"
};
type Props = {children:React.ReactNode}
const AboutLayout = ({children}:Props) => {
    return (
        <div>
            about layout
            {children}
        </div>
    );
};

export default AboutLayout;
