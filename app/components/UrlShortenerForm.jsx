"use client";

import { useState } from "react";
import cn from "classnames";
import { saveUrlMappings, getUrlMappings } from "@/app/utils/localStorageUtils";
import { Link2 } from "lucide-react";

const UrlShortenerForm = ({ onShorten }) => {
  const [url, setUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlMappings = getUrlMappings();
    const shortUrl = Math.random().toString(36).substring(2, 10);
    urlMappings[shortUrl] = url;
    saveUrlMappings(urlMappings);
    setUrl("");
    onShorten();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-4 w-full mt-12 max-w-2xl mx-auto"
    >
      <div className="flex-1 px-2 py-3 flex-wrap flex flex-row w-full rounded-xl border border-secondary/20 shadow-md md:h-20 md:w-min md:flex-row md:items-center md:space-x-2 md:space-y-0">
        <div className="shrink-0 px-3 md:px-4 flex items-center justify-center text-secondary">
          <Link2 size={24} />
        </div>
        <div className="hidden md:block md:h-full md:py-1 ">
          <div className="h-px w-full bg-secondary/20 md:h-full md:w-px" />
        </div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="flex-1 border-none p-2 focus:border-primary focus-within:border-primary active:border-primary focus:outline-none"
          placeholder="Enter URL to Shorten"
        />
        <button
          type="submit"
          disabled={!url}
          className={cn(
            "mt-4 md:mt-0 basis-full md:basis-auto btn btn-primary",
            {
              "bg-primary/75 hover:bg-primary/75": !url,
            }
          )}
        >
          Shorten
        </button>
      </div>
    </form>
  );
};

export default UrlShortenerForm;
