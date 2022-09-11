import { useQuery } from '@apollo/client';
import { GET_CLIENTS } from '../queries/ClientQueries';
import Spinner from './Spinner'
import ClientCard from './ClientCard';

const Clients = () => {
    const { loading, error, data } = useQuery(GET_CLIENTS);

    if (loading) return <div className="flex items-center justify-center mmin-h-screen p-3 m-3"><Spinner /></div>
    if (error) return <span className='flex items-center justify-center mmin-h-screen bg-red-300 p-3 m-3 text-white'>Something went wrong</span>

    return (
        <>
            <h1 className='uppercase font-bold text-2xl p-3 m-3'>Clients</h1>
            {data && data?.clients && data?.clients?.length > 0 && data?.clients.map((client) => {
                return <ClientCard key={client.id} name={client?.name} email={client?.email} phone={client?.phone} />
            })}
        </>
    )
}

export default Clients