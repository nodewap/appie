import {Link} from 'react-router-dom';
import { UserIcon } from '@heroicons/react/24/outline'

const menus = [
    {
        label: 'home',
        to: '/'
    },
    {
        label: 'about us',
        to: '/about-us'
    },
    {
        label: 'blog',
        to: '/blog'
    },
    {
        label: 'contact',
        to: '/contact'
    }
]


const Navbar = ()=>{
    return (
        <nav className="flex md:flex-row flex-col md:items-center md:justify-around bg-white py-4 md:px-0 px-8 md:gap-y-0 gap-y-6">
            <div className="flex md:flex-row flex-col md:items-center gap-x-16 md:gap-y-0 gap-y-6">
                <img src="/images/logo.png" className="w-32" />
                <div className="flex md:flex-row flex-col gap-x-12 md:gap-y-0 gap-y-4">
                    {
                        menus.map((item,index)=>(
                        <Link to={item.to} key={index} className="capitalize text-md font-semibold">{item.label}</Link>  
                        ))
                    }
                </div>
            </div>
            <div className="flex md:flex-row flex-col md:items-center gap-x-8 md:gap-y-0 gap-y-4">
                <button className="md:hover:bg-inherit hover:bg-red-50 md:py-0 py-4 rounded md:px-0 px-6 md:border-0 border border-red-50">
                    <Link className="capitalize text-md font-semibold" to="/login">
                        <div className="flex fit-content items-center gap-x-1">
                            <UserIcon className="w-4 h-4" />
                            Login
                        </div>
                    </Link>
                </button>
                <button className="bg-blue-600 px-6 py-3 rounded hover:bg-white hover:border hover:border-blue-600">
                    <Link className="capitalize text-md font-semibold text-white hover:text-blue-600" to="/sign-up">Get Started</Link>
                </button>
            </div>
        </nav>
    )
}

export default Navbar;