import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";

export default function InvitationPage(props) {
   const router = useRouter();
   const data = router.query.slug;

   const [pause, setPause] = useState(false);
   const [song, setSong] = useState();
   const [show, setShow] = useState(false);

   let nama = data && data[0];
   let meja = data && data[1];

   function BukaUndangan() {
      setShow(true);
      const music = new Audio("/TipToe.mp3");
      setSong(music);
      music.play();
      music.loop = true;
   }

   function stopMusic() {
      // song.muted = true;
      console.log(pause);
      if (!pause) {
         song.muted = true;
         setPause(true);
      } else {
         song.muted = false;
         setPause(false);
      }
   }

   return (
      <Fragment>
         <Head>
            <title>Inviation {nama}</title>
            <meta name="description" />
         </Head>
         <button className="fixed bottom-3 start-3" onClick={() => stopMusic()}>
            Stop
         </button>
         <div className="grid grid-cols-1 grid-rows-1 justify-items-center align-middle">
            <div className="">
               {/* <Image src={""} /> */}
               <p className="font-bold ">Kepada {nama}</p>
               <p>Meja {meja}</p>
               <button
                  className="my-2 py-2 px-3 bg-red-400 rounded-lg hover:bg-red-500 text-white"
                  onClick={() => BukaUndangan()}>
                  💞 Buka Undangan 💞
               </button>
            </div>
         </div>
         {show && (
            <div>
               <h1>Test</h1>
            </div>
         )}
      </Fragment>
   );
}
