"use client";

import { usePreview } from "@/lib/sanity.preview";

import AboutContainer from "./AboutContainer";

type Props = {
  query: string;
  contactQuery: string;
};

export default function PreviewAbout({ query, contactQuery }: Props) {
  const aboutQuery = usePreview(null, query);

  const contactInfo = usePreview(null, contactQuery);

  // Modified but not yet publish

  return <AboutContainer contactPage={contactInfo} abouts={aboutQuery} />;
}
