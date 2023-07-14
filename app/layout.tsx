///Layout page

///Libraries -->
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import styles from "./layout.module.scss"
import { backend } from './utils/utils';

///Commencing the code

///Declaring the metadata
export const metadata = {
  title: 'Favour Syre',
  description: 'Portfolio website for freelancing and hiring software engineer',
  keywords: "software engineeer, web, blockchain, cyber security, AI, ML"
}

///This fetches the contact information
async function getContacts() {
  try {
    const response = await fetch(
        `${backend}/contacts`,
        {
          next: {
            revalidate: 60,
          },
        }
      );
    
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second
    
      const contacts = await response.json();
      return contacts;
} catch (error) {
    console.error(error);
}
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const contacts = await getContacts()

  return (
    <html lang="en" className={`${styles.html}`}>
      <body>
          <Header />
          {/* <ToastContainer /> */}
          <main className='container'>{children}</main>
          <Footer contact_={contacts} />
      </body>
    </html>
  )
}
