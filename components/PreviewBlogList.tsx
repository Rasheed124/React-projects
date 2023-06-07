import Link from "next/link";
import { usePreview } from "../lib/sanity.preview";
import BlogList from "./BlogList";

export default function PreviewBlogList({ query }: { query: string }) {
    const posts = usePreview(null, query);


    <>{console.log(posts)}</>

    return (
        <>
            <BlogList posts={posts} />
            <Link
                className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
                href="/api/exit-preview"
            >
                Exit Preview
            </Link>
        </>
    );
}