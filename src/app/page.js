import HomeContainer from "@/Container/HomeContainer/HomeContainer";
import Head from "next/head";
import Image from "next/image";

export const metadata = {
  title: "Agentic AI & Marketing Studio | QuantumCrafters Studio",
  description: "QuantumCrafters Studio Private Limited Engineers Agentic AI Platforms, Automation, Voice-First SEO, and AI-Powered Marketing that Attract, Convert, and Scale Revenue Growth.",
  verification: {
    google: "MbqWeyYPvPzsogXFxsL8o_LZUqhL-lqb0C6-EeSNemM",
  },
};

export default function Home() {
  return (
    <>
    {/* <Head>
      <meta name="google-site-verification" content="MbqWeyYPvPzsogXFxsL8o_LZUqhL-lqb0C6-EeSNemM" />
    </Head> */}
    <HomeContainer/>
    </>
  );
}
