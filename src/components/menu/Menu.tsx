import Link from "next/link";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link href={'/'}>home</Link></li>
                <li><Link href={'/about'}>about</Link></li>
                <li><Link href={'/contacts'}>contacts</Link></li>
                <li><Link href={'/users'}>users</Link></li>
            </ul>
        </div>
    );
};

export default Menu;