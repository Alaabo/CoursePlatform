import Navbar from "@/components/Mine/Navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="ar" >
      <title>CODDZ</title>
      <body className="bg-black-1 max-w-full text-white">
        <Navbar/>
        <div className="w-full">{children}</div>
       
        </body>

    </html>
    </>
    
  );
}
