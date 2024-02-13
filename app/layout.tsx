///Layout page

///Libraries -->
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import styles from "./layout.module.scss"
import { domainName } from '@/config/utils';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import store from "@/config/redux/store"

///Commencing the code

///Declaring the metadata
export const metadata = {
  metadataBase: new URL(domainName), 
  title: {
    default: `Favour Syre`,
    template: `%s | Favour Syre`
  },
  icons: {
    icon: 'uchiha_.png',
  },
  description: `Favour Ndubuisi's portfolio website for freelancing and hiring for software engineering gigs`,
  keywords: "software engineeer, web, blockchain, cyber security, AI, ML, freelancer"
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className={styles.html} style={{ scrollBehavior: 'smooth' }}>
      <body className={styles.body}>
        <ToastContainer autoClose={5000} limit={5} newestOnTop={true} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
