"use client";

import { useState, useMemo } from "react";
import cn from "classnames";
import { saveUrlMappings, getUrlMappings } from "@/app/utils/localStorageUtils";
import { Link2 } from "lucide-react";

const UrlShortenerForm = ({ onShorten }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  const validateUrl = (string) => {
    try {
      const url = new URL(string);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (err) {
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateUrl(url)) {
      setError("Invalid url, please check the url and try again.");
      return;
    }

    const urlMappings = getUrlMappings();
    const shortUrl = Math.random().toString(36).substring(2, 10);
    urlMappings[shortUrl] = url;
    saveUrlMappings(urlMappings);
    setUrl("");
    onShorten();
  };

  const buttonDisabled = useMemo(() => !url, [url]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full grid gap-2 mt-12 max-w-2xl mx-auto"
    >
      <div className="flex items-center">
        <div className="flex-1 px-2 py-3 flex-wrap flex flex-row w-full rounded-xl border border-secondary/20 shadow-md md:h-20 md:w-min md:flex-row md:items-center md:space-x-2 md:space-y-0">
          <div className="shrink-0 px-3 md:px-4 flex items-center justify-center text-secondary">
            <Link2 size={24} />
          </div>
          <div className="hidden md:block md:h-full md:py-1 ">
            <div className="h-px w-full bg-secondary/20 md:h-full md:w-px" />
          </div>
          <input
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 border-none p-2 focus:border-primary focus-within:border-primary active:border-primary focus:outline-none"
            placeholder="Enter URL to Shorten"
          />
          <button
            type="submit"
            disabled={buttonDisabled}
            className={cn(
              "mt-4 md:mt-0 basis-full md:basis-auto btn btn-primary",
              {
                "bg-primary/75 hover:bg-primary/75": buttonDisabled,
              }
            )}
          >
            Shorten
          </button>
        </div>
      </div>
      {error && <div className="text-red-500 text-sm p-2">{error}</div>}
    </form>
  );
};

export default UrlShortenerForm;
