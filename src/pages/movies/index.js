/* eslint-disable @next/next/no-img-element */
import Layout from "@/components/layout";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Link from "next/link";
import useSWR from "swr";
import { titleWeb } from "..";

export default function Home() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:3000/api/movies",
    fetcher
  );

  if (error) return <div className={styles.main}>failed to loadccc</div>;
  if (isLoading) return <div className={styles.main}>loading...</div>;

  return (
    <Layout>
      <Head>
        <title>{titleWeb}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className="grid grid-cols-3 gap-4">
          {data.map((e, i) => {
            return (
              <div key={i}>
                <h1>{e.title}</h1>
                <div className="w-[300px] h-[200px] overflow-clip rounded-xl">
                  <Link href={`/movies/${e._id}`}>
                    <img
                      className="hover:scale-125 duration-500"
                      src={e.poster}
                      alt={"#"}
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
}
