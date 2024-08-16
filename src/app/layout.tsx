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
      <body className="bg-black-1 text-white">
        <Navbar/>
        <div className="w-full">{children}</div>
       
        </body>

    </html>
    </>
    
  );
}
