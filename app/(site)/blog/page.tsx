import { draftMode } from "next/headers";

import PreviewSuspense from "@/components/site/PreviewSuspense";
import Layout from "@/components/site/Navbars/NavbarLayout";
import { getBlogList } from "@/schemas/utils/sanity.utils";

import BlogList from "@/components/site/Blog/BlogList";
import getServerSideQueries from "@/components/site/getServerSideQueries";
import PreviewBlogList from "@/components/site/Blog/PreviewBlogList";

const BlogListQuery = getServerSideQueries().BlogListQuery;

export default async function Blog() {
  const { isEnabled } = draftMode();

  const blogList = await getBlogList();

  // SETTING PREVIEW MODE
  if (isEnabled) {
    return (
      <PreviewSuspense
        fallback={
          <div
            role="status"
            className="flex min-h-screen justify-center items-center bg-deep-black"
          >
            <p className="text-center text-lg text-light-white  ">
              Loading Preview Data....
            </p>
          </div>
        }
      >
        <div className="">
          <Layout route="/all">
            <PreviewBlogList query={BlogListQuery} />
          </Layout>
        </div>
      </PreviewSuspense>
    );
  }

  return (
    <div className=" ">
      <Layout route="/all">
        <BlogList posts={blogList} />
      </Layout>
    </div>
  );
}
