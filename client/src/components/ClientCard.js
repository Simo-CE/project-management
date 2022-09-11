const ClientCard = ({ name, email, phone }) => {

    return (
        <div className="flex items-center justify-center mmin-h-screen p-3 m-3">
            <div className="flex w-full items-center justify-between border-b pb-3">
                <div className="flex items-cneter space-x-3">
                    <div className="h-8 w-8 rounded-full bg-slate-400 bg-[url('https://i.pravater.cc/32')]"></div>
                    <div className="text-lg font-bold text-slate-700">{name}</div>
                </div>
                <div className="flex items-center space-x-8">
                    <a href={`mailto:${email}`} className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">{email}</a>
                </div>

                <div className="flex items-center space-x-8">
                    <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">{phone}</button>
                </div>

            </div>
        </div>
    )
}

export default ClientCard