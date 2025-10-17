"use client";
import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/app.module.css";
export default function Home() {
  return (
    <div>
      <ul>
        <li className={x["red"]}>
          <Link href={"/Blog"}>
            <span className={y["green"]}>Blog</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
