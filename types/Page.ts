import { PortableTextBlock } from "sanity";
export type Page = {
    _id: string;
    createdAt: Date;
    title: string,
    name: string;
    slug: string;
    content: PortableTextBlock[];
}