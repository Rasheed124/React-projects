import { draftMode } from "next/headers";

import PreviewSuspense from "@/components/site/PreviewSuspense";
import Layout from "@/components/site/Navbars/NavbarLayout";
import { getAbout, getContactInfo } from "@/schemas/utils/sanity.utils";
import AboutContainer from "@/components/site/About/AboutContainer";
import getServerSideQueries from "@/components/site/getServerSideQueries";
import PreviewAbout from "@/components/site/About/PreviewAboutContainer";

const AboutQuery = getServerSideQueries().AboutQuery;

const ContactInfoQuery = getServerSideQueries().ContactQuery;


export default async function About() {
  const { isEnabled } = draftMode();

  const aboutContainer = await getAbout();

  const contactInfo = await getContactInfo();


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
          <Layout route="/about">
            <PreviewAbout contactQuery={ContactInfoQuery} query={AboutQuery} />
          </Layout>
        </div>
      </PreviewSuspense>
    );
  }

  return (
    <div className="  ">
      <Layout route="/about">
        <AboutContainer contactPage={contactInfo} abouts={aboutContainer} />
      </Layout>
    </div>
  );
}
