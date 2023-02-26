import Head from "next/head";
import Link from "next/link";

export default function PageNotFound() {
    return(
        <>
            <Head>
                <title>404 | YoshiB.se</title>
            </Head>
            <div className="grid h-screen gap-5 place-content-center">
                <h4 className="text-center text-purple-700">404</h4>
                <h1 className="text-5xl font-semibold text-center">This page does not exist.</h1>
                <h2 className="text-xl font-thin text-center ">The page you are looking for could not be found.</h2>
                <Link href="/" className="text-center text-violet-600">Home &#10140;</Link>
            </div>
        </>
    )
}