import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import Styles from "../../styles/Home.module.css";
export default function Tambahuser() {
  const route = useRouter();
  const { register, handleSubmit } = useForm();
  const submit = async (e) => {
    try {
      await axios.post(`/api/users/add`, {
        nama: e.nama,
        profesi: e.profesi,
      });
    } catch (err) {
      console.error(`eorrrrr${err}`);
    }
    route.push("/");
  };
  return (
    <form className={Styles.main}>
      <input {...register("nama")} />
      <input className="mt-2" {...register("profesi")} />
      <button onClick={handleSubmit(submit)}> kirim</button>
    </form>
  );
}
