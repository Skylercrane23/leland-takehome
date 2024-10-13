"use client";

import { useState } from "react";
import UrlShortenerForm from "@/app/components/UrlShortenerForm";
import UrlShortenerList from "@/app/components/UrlShortenerList";
import AppHeader from "@/app/components/AppHeader";

export default function Home() {
  const [refreshList, setRefreshList] = useState(false);

  const handleShorten = () => {
    setRefreshList(!refreshList);
  };

  return (
    <>
      <AppHeader />
      <main className="container grid gap-6">
        <UrlShortenerForm onShorten={handleShorten} />
        <UrlShortenerList key={refreshList} />{" "}
      </main>
    </>
  );
}
