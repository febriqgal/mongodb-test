import React from "react";
import useSWR from "swr";
import { urlAPI } from "./controller";
import styles from "../../styles/Home.module.css";
import Layout from "@/components/layout";
import { useRouter } from "next/router";
import Link from "next/link";
export default function Index() {
  const route = useRouter();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(urlAPI, fetcher);

  if (error) return <div className={styles.main}>failed to load</div>;
  if (isLoading) return <div className={styles.main}>loading...</div>;

  return (
    <Layout>
      <div className={styles.main}>
        <Link
          href={"/users/tambah-user"}
          className="bg-red-500 py-4 px-2 rounded-xl"
        >
          Tambah
        </Link>
        <div className="grid grid-cols-4  gap-4">
          {data.map((e, i) => (
            <div
              onClick={() => {
                route.push(`users/${e._id}`);
              }}
              key={i}
              className={`bg-slate-50 text-black rounded-lg py-4 px-2`}
            >
              <h1>{e.nama}</h1>
              <h1>{e.profesi}</h1>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
