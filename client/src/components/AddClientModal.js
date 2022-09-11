import { useRef, useState } from 'react'
import { ADD_CLIENT } from '../mutations/ClientMutations'
import { GET_CLIENTS } from '../queries/ClientQueries'
import { useMutation } from '@apollo/client'

const AddProjectModal = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    const modalOverlay = useRef()
    const modal = useRef()

    const openModal = (value) => {
        const modalCl = modal?.current?.classList;
        const overlayCl = modalOverlay;

        if (value) {
            overlayCl?.current?.classList.remove('hidden')
            setTimeout(() => {
                modalCl?.remove('opcaity-0');
                modalCl?.remove('-tranlate-y-full')
                modalCl?.remove('scale-150')
            }, 100);
        } else {
            modalCl?.add('-translate-y-full');
            setTimeout(() => {
                modalCl?.add('opacity-0')
                modalCl?.add('scale-150')
            }, 100);
            setTimeout(() => overlayCl?.current?.classList?.add('hidden'), 300);
        }
    }

    const [addClient] = useMutation(ADD_CLIENT, {
        variables: { name, email, phone },
        update(cache, { data: { addClient } }) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS });
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: [...clients, addClient] },
            })
        }
    })

    const onSubmit = (e) => {
        e.preventDefault();
        if (name == '' || email == '' || phone == '') {
            return setError('Please fill in all fields');
        }

        addClient(name, email, phone);

        setName('')
        setEmail('')
        setPhone('')
    }

    return (
        <>
            <button onClick={() => openModal(true)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="authentication-modal">
                Add Client
            </button>

            <div ref={modalOverlay} onClick={() => openModal(true)} id="authentication-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center bg-black/50">
                <div className="relative m-5 h-full md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" onClick={() => openModal(false)}>
                            &#10006;
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Add new client </h3>
                            <form className="space-y-6" onSubmit={onSubmit}>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name" required="" onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone</label>
                                    <input type="number" name="phone" id="phone" placeholder="555555555" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" onChange={(e) => setPhone(e.target.value)} />
                                </div>
                                <div className="flex justify-end gap-5">
                                    <button type="submit" className="w-full text-white bg-slate-500 hover:bg-slate-800 rounded-lg" onClick={() => openModal(false)}>Close</button>
                                    <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-10 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add</button>
                                </div>

                                {error && <p className='bg-red-400 text-center text-white rounder-lg w-full p-3'>{error}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProjectModal