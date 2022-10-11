import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Name from "../components/Name/Name";

const DynamicName = dynamic(
  () => import("../components/NameWithCSR/Name"),
  { ssr: false }
);



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DynamicName />
        <Name />
      </main>
    </div>
  );
};

export default Home;
