import ReadMoreBlog from "@/components/BlogPostComponent/readMoreBlog";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const url = `https://www.qcsstudio.com/api/blog/${slug}`;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch blog");
    const data = await res.json();

    return {
      title: data?.metaTitle || data?.title,
      description: data?.metaDescription || data?.excerpt,
      openGraph: {
        title: data?.metaTitle,
        description: data?.metaDescription,
      },
    };
  } catch (err) {
    return {
      title: "Blog Not Found",
      description: "The blog you are looking for does not exist.",
    };
  }
}

export default async function Page({ params }) {
  const { slug } = params;

  const url = `https://www.qcsstudio.com/api/blog/${slug}`;
  let blog = null;

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (res.ok) blog = await res.json();
  } catch (e) {
    console.error("Page Fetch Error:", e);
  }

  return (
    <>
      <ReadMoreBlog blog={blog} />
    </>
  );
}
