import Head from "next/head"
import Header from "./Header"
import Footer from "./Footer"

type LayoutProps = {
    children: React.ReactNode,
    pageTitle: string,
}

const Layout = ({children, pageTitle}: LayoutProps) => {
  return (
    <>
        <Head>
            <title>Noova | {pageTitle}</title>
            <meta name="description" content=" Noova - Página web de presentación digital al instante. " />
            <meta name="author" content="Juan Rey"/>
            <link rel="icon" href="/favicon.ico" />
            <meta name="twitter:site" content="@JuanReyAl"/>
            <meta name="twitter:creator" content="@JuanReyAl"/>
            
        </Head>

        <Header/>
            {children}
        <Footer/>
    </>
  )
}

export default Layout;