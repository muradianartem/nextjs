import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDlQeK-DmyFYHva1Bg0NJMAWsD_poogjcQ&libraries=places"
        ></script>
      </Head>
      <Link href="/checkin">Start to work, choose the dates! </Link>
    </div>
  );
}
