const ProjectCard = ({ title, status, description, client }) => {

    const { name, phone, email } = client;

    // let color = "bg-yellow-300";
    // if (status == 'Completed') color == "bg-green-200";
    // else if (status == "in progress") color == "bg-yellow-300";

    return (
        <div className="relative block p-8 overflox-hidden border bg-white border-slate-300 m-1 rounded-lg mx-6">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

            <div className="justify-between sm:flex">
                <div>
                    <h5 className="text-xl font-bold text-slate-900 capitalize">{title}</h5>
                    <p className="mt-1 text-xs font-meduim text-slate-600">{name}</p>
                </div>
                <div className="flex-shrink-0 hidden ml-3 sm:block">

                    {status == "Completed" ? <span className="bg-green-200 px-2 py-1 rounded-lg shadow-sm font-bold text-sm">{status}</span> : (
                        status == "In Progress" ? <span className="bg-yellow-100 px-2 py-1 rounded-lg shadow-sm font-bold text-sm">{status}</span> : <span className="bg-slate-200 px-2 py-1 rounded-lg shadow-sm font-bold text-sm">{status}</span>
                    )}
                </div>
            </div>


            <div className="mt-4 sm:pr-8">
                <p className="text-sm text-slate-500">{description}</p>
            </div>

            <dl className="flex mt-6">
                <div className="flex flex-col-reverse">
                    <dt className="text-sm font-medium text-slate-600">{email}</dt>
                </div>

                <div className="flex flex-col-reverse ml-3 sm:ml-6">
                    <dt className="text-sm font-medium text-slate-600">{phone}</dt>
                </div>
            </dl>

            <div className="absolute right-9 bottom-10">
                <span className="bg-cyan-200 px-2 py-1 rounded-lg shadow-sm font-bold text-sm">Edit Project</span>
            </div>
        </div>
    )
}

export default ProjectCard