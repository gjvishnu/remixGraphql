import type { MetaFunction } from "@remix-run/node";
import {client} from '../lib/graphql_client'
import {gql} from 'graphql-request' 
import { useLoaderData } from "@remix-run/react";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

 const GET_CHAR = gql`
 query {
  characters{
    results{
      id,
      name,
      image
    }
  }
}
 `

 export let loader = async()=>{
   const response = await client.request(GET_CHAR)
   const results = response.characters.results;
   console.log(results);
   return results
 }

export default function Index() {
 const data = useLoaderData()
 console.log(data);
 
  
  return (
  <>
  <h1>REMIXjs + GraphQL</h1>
  </>
  );
}
