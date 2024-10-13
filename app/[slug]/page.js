"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { getUrlMappings } from "@/app/utils/localStorageUtils";

const SlugPageRedirect = ({ params }) => {
  useEffect(() => {
    if (params.slug) {
      const storedMappings = getUrlMappings();
      const savedUrl = storedMappings[params.slug];

      if (savedUrl) {
        window.open(savedUrl, "_blank");
        redirect("/");
      } else {
        console.log("No URL found for this slug");
        redirect("/");
      }
    }
  }, [params]);

  return null;
};

export default SlugPageRedirect;
