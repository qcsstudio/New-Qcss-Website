
import ReadMoreBlog from "@/components/BlogPostComponent/readMoreBlog";

export async function generateMetadata({ params }) {
const slug = decodeURIComponent(params.slug);
const OriginalHeading = slug.replace(/-/g, " "); 
const encodedHeading = encodeURIComponent(OriginalHeading);

const url = `${"https://www.qcsstudio.com"}/api/blog/${encodedHeading}`;

      const res = await fetch(url);
      if (!res.ok) throw new Error('Failed to fetch blog');
      const data = await res.json();


  return {
    title:data?.metaTitle,
    description: data?.metaDescription,
    openGraph: {
      title: data?.metaTitle,
      description: data?.metaDescription,
    },
  };
}
 

 export default function Page({ params, searchParams }) {
  
  return(
    <>
    <ReadMoreBlog/>
    </>
  )
 }
