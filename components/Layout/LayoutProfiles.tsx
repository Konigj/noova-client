import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

type LayoutProps = {
    children: React.ReactNode,
    slug: string,
}

const LayoutProfiles = ({children, slug}: LayoutProps) => {
  return (
    <>
        <Head>
            <title>{slug} | Noova | Presentación digital</title>
            <meta name="description" content=" Noova - Página web de presentación digital al instante." />
            <meta name="author" content="Juan Rey"/>
            <link rel="icon" href="/favicon.ico" />
            <meta name="twitter:site" content="@JuanReyAl"/>
            <meta name="twitter:creator" content="@JuanReyAl"/>
        </Head>
        {children}
    </>
  )
}

export default LayoutProfiles;