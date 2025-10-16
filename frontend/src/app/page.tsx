"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/app.module.css";
import AppTable from "@/components/app.table";
import useSWR, { SWRConfig } from "swr";
export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "http://localhost:8000/blogs",
    fetcher,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href={"/Facebook"}>
            <span className={y["green"]}>Facebook</span>
          </Link>
        </li>
        <li>
          <Link href={"YouTube"}>youTube</Link>
        </li>
      </ul>
      <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
    </div>
  );
}
