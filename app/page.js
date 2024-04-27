
import Link from "next/link";
import Third from "./components/Third";

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from "react-toastify";

export default function Home() {
  return <>
    <ToastContainer />
    <Third />
    {/* <For /> */}
    {/* <Link href="/components/second"></Link> */}
  </>

}
