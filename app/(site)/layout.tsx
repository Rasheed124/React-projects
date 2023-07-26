

import "../styles/globals.css";

import { fonts } from "../fonts/fonts";



export const metadata = {
  title: "Rasheed Tolulope",
  description: "",
};

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

    
  return (
    <html lang="en">
      <body
       className={`${fonts.calibreMedium} ${fonts.calibreBold} bg-primary-color text-secondary-color`}
      >
        {/* Header */}
        <main className=" max-w-6xl mx-auto ">
          <div className=" ">
            {children}

        
          </div>
        </main>
      </body>
    </html>
  );
}
