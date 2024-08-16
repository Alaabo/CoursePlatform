import "../globals.css";
import Navbar from "@/components/Mine/Navbar";







export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <nav className="fixed top-0 w-full">
        
        </nav>
        <section className="galssmorphism">{children}</section>
    <html lang="ar">
      

    </html>
    </>
    
  );
}
