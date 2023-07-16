"use client";

import { usePreview } from "@/lib/sanity.preview";
import Banner from "./Banner";

type Props = {
  query: string;
  contactQuery: string
};

export default function PreviewBanner({ query, contactQuery }: Props) {
  const homeBanners = usePreview(null, query);

  const contactInfo = usePreview(null, contactQuery);

  // Modified but not yet publish

  return <Banner contactPage={contactInfo} homeBanners={homeBanners} />;
}
