"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getUrlMappings } from "@/app/utils/localStorageUtils";

const UrlShortenerList = () => {
  const [urlList, setUrlList] = useState({});

  useEffect(() => {
    const storedMappings = getUrlMappings();
    setUrlList(storedMappings);
  }, []);

  function ListItems() {
    if (Object.entries(urlList).length > 0) {
      return Object.entries(urlList).map(([key, value]) => (
        <li key={key}>
          <Link
            href={`http://localhost:3000/${key}`}
            className="rounded-full bg-secondary/10 text-secondary text-sm p-2 hover:bg-secondary/15"
          >
            {key}
          </Link>
        </li>
      ));
    }
  }

  return (
    <div className="section-padding space-y-4 max-w-2xl mx-auto w-full">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-3">
        <p className="text-left font-bold text-sm text-black whitespace-nowrap">
          My Urls:
        </p>
        <ul className="flex items-center gap-2 flex-wrap">
          <ListItems />
        </ul>
      </div>
    </div>
  );
};

export default UrlShortenerList;
