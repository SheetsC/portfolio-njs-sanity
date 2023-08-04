import { PortableTextBlock } from "sanity";

export type Project= {
    _id: string;
    _created_at: string;
    name: string;
    slug: string;
    image: string;
    url: string;
    content: PortableTextBlock;


}