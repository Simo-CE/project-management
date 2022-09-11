import { useQuery } from '@apollo/client';
import { GET_PROJECTS } from '../queries/ProjectQueries';
import Spinner from './Spinner'
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { loading, error, data } = useQuery(GET_PROJECTS);

    if (loading) return <div className="flex items-center justify-center mmin-h-screen p-3 m-3"><Spinner /></div>
    if (error) return <span className='flex items-center justify-center mmin-h-screen bg-red-300 p-3 m-3 text-white'>Something went wrong</span>

    return (
        <>
            <h1 className='uppercase font-bold text-2xl p-3 m-3'>Projects</h1>
            {data && data?.projects && data?.projects?.length > 0 && data?.projects.map((project) => {
                return <ProjectCard key={project.id} title={project?.name} description={project?.description} status={project?.status} client={project?.client} />
            })}
        </>
    )
}

export default Projects