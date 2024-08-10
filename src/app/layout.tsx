import "./globals.css";








export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <html lang="ar">
      <body className="font-fustat bg-clip-padding backdrop-blur-sm bg-custom-pattern bg-center bg-fixed bg-no-repeat bg-contain text-white h-screen  w-full">
        
        <section className="galssmorphism">{children}</section>
       
        </body>

    </html>
    </>
    
  );
}
