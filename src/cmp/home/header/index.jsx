const Header = ()=>{
    return (
        <div className="px-24 py-48" style={{
            height: 900
        }}>
            <div className="w-11/12 mx-auto">
                <div className="grid md:grid-cols-2 gap-20">
                    <div className="flex flex-col gap-y-8">
                        <p className="text-blue-600 font-semibold">Welcome To Appie</p>
                        <h1 className="text-6xl font-bold">Manage it all, in this all new system.</h1>
                        <p className="text-xl">Hanky panky lavatory up the duff jolly good cack brolly is chinwag zonked happy days sloshed.</p>
                        <div className="flex gap-x-4">
                            <button className="flex gap-x-2 items-center bg-neutral-900 text-white px-5 py-3 rounded">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
                                </svg>

                                Download For Ios
                            </button>
                            <button className="flex gap-x-2 items-center border-2 border-neutral-900 text-neutral-900 px-5 py-3 rounded font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                            </svg>


                                Download For Android
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="relative">
                            <img src="/images/ellipse.png" alt="ellipse" className="absolute" />
                            <img src="/images/image.png" alt="mobile" className="absolute left-20 -top-24" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;