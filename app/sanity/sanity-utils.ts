import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

export async function getProjects(): Promise<Project[]>{
    const client = createClient({
        projectId: '5igbhz7g',
        dataset: 'production',
        apiVersion: "2023-01-08",
    });
    return client.fetch(
        groq`*[_type=="project"]{
            _id,
            _created_at,
            name,
            "slug" : slug.current,
            "image" : image.asset->url,
            url,
            content
        }`
    )
}