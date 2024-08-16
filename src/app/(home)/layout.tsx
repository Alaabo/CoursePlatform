import "../globals.css";








export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <div className="w-screen">{children}</div>
    
    </>
    
  );
}
