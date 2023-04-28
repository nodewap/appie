const cards = [
    {
        title: 'Searching',
        desc: 'Mucker plastered bugger all mate morish are.'
    },
    {
        title: 'Designing',
        desc: 'Mucker plastered bugger all mate morish are.'
    },
    {
        title: 'Building',
        desc: 'Mucker plastered bugger all mate morish are.'
    },
    {
        title: 'Suporting',
        desc: 'Mucker plastered bugger all mate morish are.'
    }
]
const Applicant = ()=>{
    return (
        <div className="px-24 py-32 flex flex-col items-center gap-y-6" style={{
            backgroundColor: '#EEF1F6'
        }}>
            <h1 className="text-5xl font-bold text-center">
                Designed with <br />The applicant in mind.
            </h1>
            <p className="text-lg">The full monty spiffing good time no biggie cack grub fantastic.</p>
            <div className="grid md:grid-cols-4 gap-8 mt-14">
                {
                    cards.map((item,index)=>(
                        <div key={index} className="bg-white flex flex-col items-center justify-center px-8 py-24 rounded-lg gap-y-2 hover:drop-shadow-xl">
                            <h4 className="text-2xl font-semibold">{item.title}</h4>
                            <p className="text-center text-zinc-800">{item.desc}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Applicant