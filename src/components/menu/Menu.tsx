import Link from "next/link";

const Menu = () => {
    return (
        <div className='text-lg font-semibold mx-5 '>
            <ul className='list-disc pl-6 space-y-2'>
                <li><Link href={'/'}>home</Link></li>
                <li><Link href={'/users'}>users</Link></li>
                <li><Link href={'/posts'}>posts</Link></li>
                <li><Link href={'/comments'}>comments</Link></li>
            </ul>
        </div>
    );
};

export default Menu;