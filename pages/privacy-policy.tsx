import Head from "next/head";

export default function PrivacyPolicy(){
    return(
        <>
        <Head>
            <title>Privacy policy | YoshiB.se</title>
        </Head>
        <div className="h-screen">
            <h1 className="text-4xl text-semibold py-7">Privacy policy</h1>
            <p>We do not collect background data. We only collects data the user clearly gives to us.(Email, Name, Profile picture, etc) We do not sell any data nor gives away the data. We only uses it for our services.(Apps, this website)</p>
        </div>
        </>
    )
}