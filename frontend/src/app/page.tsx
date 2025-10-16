import Link from "next/link";
import x from "@/styles/app.module.css";
import y from "@/styles/app.module.css";
export default function Home() {
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
    </div>
  );
}
