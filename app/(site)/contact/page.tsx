import { draftMode } from "next/headers";

import PreviewSuspense from "@/components/site/PreviewSuspense";
import Layout from "@/components/site/Navbars/NavbarLayout";
import PreviewContact from "@/components/site/Contact/PreviewContact";
import ContactPage from "@/components/site/Contact/ContactPage";
import getServerSideQueries from "@/components/site/getServerSideQueries";
import { getContact } from "@/schemas/utils/sanity.utils";

const ContactQuery = getServerSideQueries().ContactQuery;

export default async function Contact() {
  const { isEnabled } = draftMode();

  const contacts = await getContact();

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
          <Layout route="/contact">
            <PreviewContact query={ContactQuery} />
          </Layout>
        </div>
      </PreviewSuspense>
    );
  }

  return (
    <div className=" text-deep-black ">
      <Layout route="/contact">
        <ContactPage contactPage={contacts} />
      </Layout>
    </div>
  );
}
