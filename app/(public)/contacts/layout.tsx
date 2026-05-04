import {Metadata} from "next";

export const metadata:Metadata ={
    title: 'ContactsLayout metadata'
};
type Props = {children:React.ReactNode}
const ContactsLayout = ({children}:Props) => {
    return (
        <div>
            contacts page layout
            {children}
        </div>

    );
};

export default ContactsLayout;