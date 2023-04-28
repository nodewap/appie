import {Link} from 'react-router-dom';

const companies = [
    {
        label: 'About us',
        to: '#'
    },
    {
        label: 'Service',
        to: '#'
    },
    {
        label: 'Case Studies',
        to: '#'
    },
    {
        label: 'Contact us',
        to: '#'
    },
    {
        label: 'Blog',
        to: '#'
    }
]

const supports = [
    {
        label: 'Community',
        to: '#'
    },
    {
        label: 'Resources',
        to: '#'
    },
    {
        label: 'Faqs',
        to: '#'
    },
    {
        label: 'Privacy Policy',
        to: '#'
    },
    {
        label: 'Careers',
        to: '#'
    }
]

const Footer = ()=>{
    return (
        <div className="bg-slate-200 py-16 px-8" style={{
            minHeight: 450
        }}>
            <div className="w-11/12 mx-auto">
                <div className="grid md:grid-cols-4 md:gap-16 gap-10">
                    <div className="flex flex-col gap-y-7">
                        <img src="/images/logo.png" alt="logo" className="w-28" />
                        <p>Appie WordPress is theme is the last theme you will ever have</p>
                        <button className="flex items-center gap-x-1 font-bold hover:text-blue-600">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </button>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Company</h4>
                        <div className="flex flex-col gap-y-2">
                            {
                              companies.map((item,index)=>(
                                <Link key={index} to={item.to} className="hover:text-blue-600">{item.label}</Link>
                              )) 
                            }
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Supports</h4>
                        <div className="flex flex-col gap-y-2">
                            {
                              supports.map((item,index)=>(
                                <Link key={index} to={item.to} className="hover:text-blue-600">{item.label}</Link>
                              )) 
                            }
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-lg mb-4">Get In Touch</h4>
                        <div className="flex flex-col gap-y-4">
                            <div className="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                </svg>
                                <p>support@appie.com</p>
                            </div>

                            <div className="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                                </svg>

                                <p>+(642) 342 762 44</p>
                            </div>

                            <div className="flex items-center gap-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>

                                <p>442 Belle Terre St Floor 7, Francisco</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;