import Head from "next/head";

export default function Home() {
   return (
      <div>
         <Head>
            <title>Kevin & Gisela</title>
         </Head>
         <div
            className="flex flex-col justify-end items-center h-screen bg-cover bg-center relative overflow-hidden"
            style={{
               backgroundImage: "url('/Gallery/6.jpeg')",
            }}>
            <div
               className="absolute inset-0 bg-gradient-to-b from-transparent to-white"
               aria-hidden="true">
            </div>
            <div className="text-center bg-white bg-opacity-50 p-8 rounded-3xl mb-8 relative z-10">
               <h1 className="font-medium text-2xl md:text-4xl">Gisela Jeanette Mayella Sie</h1>
               <h1 className="font-medium text-2xl md:text-4xl">&</h1>
               <h1 className="font-medium text-2xl md:text-4xl">Kevin Lois</h1>
            </div>
         </div>
      </div>
   );
}
