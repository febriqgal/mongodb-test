import React from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import styles from "../../styles/Home.module.css";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Id() {
  const route = useRouter();
  const { id } = route.query;
  const urlAPI = `http://localhost:3000/api/users/${id}`;
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { register, handleSubmit } = useForm();
  const submit = async (e) => {
    try {
      await axios.put(`/api/users/${id}`, {
        nama: e.nama,
      });
      alert("Berhasil");
    } catch (err) {
      console.error(err);
    }
  };
  const { data, error, isLoading } = useSWR(urlAPI, fetcher);

  if (error) return <div className={styles.main}>failed to load</div>;
  if (isLoading) return <div className={styles.main}>loading...</div>;
  return (
    <div>
      <h1>{data.nama}</h1>
      <input {...register("nama")} defaultValue={data.nama} />
      <button onClick={handleSubmit(submit)}> kirim</button>
    </div>
  );
}
