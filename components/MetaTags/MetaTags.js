import Head from "next/head";

import React from "react";

const MetaTags = () => {
  return (
    <Head>
      <title>Cryptoslash</title>
      <meta name="robots" content="all" />
      <meta
        name="description"
        content="Financial dashboard front-end built using Next.js and MUI"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
    </Head>
  );
};

export default MetaTags;
