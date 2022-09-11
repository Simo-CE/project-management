import { gql } from "@apollo/client";

const GET_CLIENTS = gql`
    query Get_Clients {
        clients {
            id,
            name,
            email,
            phone
        }
    }
`

const GET_CLIENT = gql`
    query Get_Client {
        client (id: $id) {
            id,
            name,
            email,
            phone
        }
    }
`

export { GET_CLIENTS, GET_CLIENT };