import type { NextPage } from "next";
import Head from "next/head";
import { HomeView } from "../views";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>0euvreAI</title>
        <meta
          name="description"
          content="0euvreAI"
        />
      </Head>
      <HomeView />
    </div>
  );
};

export default Home;
