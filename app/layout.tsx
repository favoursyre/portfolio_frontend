///Layout page

///Libraries -->
import Layout from './components/layout/Layout'
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
    <>
      <Layout children={children} contact_={contacts} />
    </>
  )
}
