import Head from "next/head";

export default function PageHead({
  title,
  desc,
  img,
  url,
  author,
  keywords,
  summary,
  hasManifest,
}) {
  return (
    <Head>
      <title>{title || "Create Next App"}</title>
      <meta
        name="description"
        content={desc || "Generated by create next app"}
      />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      {/* FAVICON */}
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/favicon.ico" />
      {hasManifest && <link rel="manifest" href="/favicon.ico" />}
      {/* OPEN GRAPH */}
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={desc || "Generated by create next app"}
      />
      <meta property="og:site_name" content={title} />
      <meta property="og:url" content={url || ""} />
      <meta property="og:image" content={url || ""} />
      <meta name="twitter:card" content={summary || ""} />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={desc || "Generated by create next app"}
      />
      <meta name="twitter:site" content={url} />
      <meta name="twitter:creator" content={author} />{" "}
      <meta name="twitter:image" content={img} />
    </Head>
  );
}
