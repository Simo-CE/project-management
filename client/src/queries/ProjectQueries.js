import { gql } from '@apollo/client';

const GET_PROJECTS = gql`
    query GetProjects {
        projects {
            id
            name,
            description,
            status,
            client {
                name,
                email,
                phone
            }
        }
    }
`

const GET_PROJECT = gql`
    query GetProject {
        project(id: $id) {
            id,
            name,
            description,
            status,
            client {
                name,
                email,
                phone
            }
        }
    }
`

export { GET_PROJECTS, GET_PROJECT };