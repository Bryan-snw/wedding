import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import Image from "next/image";
import Countdown from 'react-countdown';

export default function InvitationPage(props) {
   const router = useRouter();
   const data = router.query.slug;

   const targetDate = new Date(2024, 10, 13, 12, 15, 0);
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

   const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <span>Countdown completed!</span>;
      } else {
        return (
          <div className="flex">
            <div className="grid justify-items-center">
               <span className="font-roboto font-bold text-4xl md:text-7xl lg:text-9xl">{days}</span>
               <span className="font-roboto font-medium text-xs lg:text-2xl">Days</span>
            </div>
            <span className="font-roboto font-bold text-4xl md:text-7xl lg:text-9xl mx-3">:</span>
            <div className="grid justify-items-center">
               <span className="font-roboto font-bold text-4xl md:text-7xl lg:text-9xl">{hours}</span>
               <span className="font-roboto font-medium text-xs lg:text-2xl">Hour</span>
            </div>
            <span className="font-roboto font-bold text-4xl md:text-7xl lg:text-9xl mx-3">:</span>
            <div className="grid justify-items-center">
               <span className="font-roboto font-bold text-4xl md:text-7xl lg:text-9xl">{minutes}</span>
               <span className="font-roboto font-medium text-xs lg:text-2xl">Minutes</span>
            </div>
            <span className="font-roboto font-bold text-4xl md:text-7xl lg:text-9xl mx-3">:</span>
            <div className="grid justify-items-center">
               <span className="font-roboto font-bold text-4xl md:text-7xl lg:text-9xl">{seconds}</span>
               <span className="font-roboto font-medium text-xs lg:text-2xl">Seconds</span>
            </div>
          </div>
        );
      }
    };

   return (
      <Fragment>
         <Head>
            <title>Inviation {nama}</title>
            <meta name="description" />
         </Head>
         <button className="fixed bottom-3 start-3" onClick={() => stopMusic()}>
            Stop
         </button>
         <div className="grid grid-cols-1 grid-rows-1 justify-items-center h-sceen align-middle">
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
            <div className="container mx-auto p-4">

               {/* Wedding Announcement Info */}
               <div className="container mx-auto text-center bg-blue-200">
                  <h1 className="text-2xl">Save <span className="font-cookie">The</span> Date</h1>
                  <div>
                     <h1 className="font-cookie font-medium text-4xl">Jeanette Mayella Sie S.E</h1>
                     <span className="font-cookie font-medium text-4xl">&</span>
                     <h1 className="font-cookie font-medium text-4xl">Kevin Lois</h1>
                  </div>
                  <div className="my-2 flex flex-col items-center justify-center text-center">
                     <h1 className="uppercase font-semibold mb-2">Are Getting Married</h1>
                     <img src={'/date-black.png'} width={120} height={120} alt="Sunday, 13 October 2024"/>
                  </div>
               </div>

               {/* Profile */}
               <div className="container my-4">
                  {/* The Groom */}
                  <div className="container mx-auto">
                     <div className="flex flex-col lg:flex-row lg:space-x-4">
                        <div className="my-4 flex-1 border border-black rounded-se-[120px] rounded-bl-[120px] overflow-hidden">
                           <img src={'/kevin.jpg'} className="object-cover" alt="The Groom" />
                        </div>
                        <div className="my-4 flex-1 lg:p-4">
                           <span className="border border-solid border-black rounded-3xl py-2 px-4 lg:text-3xl">The Groom</span>
                           <p className="mt-4 lg:mt-6 text-4xl font-semibold lg:text-6xl">Kevin Lois</p>
                           <p className="md:text-3xl">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                           Integer dignissim augue non erat gravida congue. Mauris feugiat molestie urna eu vulputate. 
                           Mauris non sollicitudin dui, varius pulvinar lorem. Aenean dapibus est sit amet arcu ultricies, 
                           auctor dictum sem iaculis. Quisque eget sem sit amet leo egestas feugiat sit amet non sem. Donec ligula enim, 
                           lobortis eget dapibus in, venenatis quis justo. In eget arcu eget massa porttitor ultricies at non massa.
                           </p>
                        </div>
                     </div>
                  </div>

                  <hr className="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
                  
                  {/* The Bride */}
                  <div className="container mx-auto">
                     <div className="flex flex-col lg:flex-row-reverse lg:space-x-4">
                        <div className="my-4 flex-1 border border-black rounded-ss-[120px] rounded-br-[120px] overflow-hidden">
                           <img src={'/gisella.jpg'} className="object-cover" alt="The Bride" />
                        </div>
                        <div className="my-4 flex-1 lg:p-4">
                           <span className="border border-solid border-black rounded-3xl py-2 px-4 lg:text-3xl">The Bride</span>
                           <p className="mt-4 lg:mt-6 text-4xl font-semibold lg:text-6xl">Gisella Jeanette Mayella Sie</p>
                           <p className="md:text-3xl">
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                           Integer dignissim augue non erat gravida congue. Mauris feugiat molestie urna eu vulputate. 
                           Mauris non sollicitudin dui, varius pulvinar lorem. Aenean dapibus est sit amet arcu ultricies, 
                           auctor dictum sem iaculis. Quisque eget sem sit amet leo egestas feugiat sit amet non sem. Donec ligula enim, 
                           lobortis eget dapibus in, venenatis quis justo. In eget arcu eget massa porttitor ultricies at non massa.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Countdown */}
               <div id="countdown" className="container mx-auto flex flex-col items-center justify-center text-center">
                  <Countdown
                     date={targetDate}  // 10 seconds from now
                     renderer={renderer}
                  />
                  <h1 className="mt-4 text-3xl lg:text-6xl">Until We Meet</h1>
               </div>

               {/* PostCard */}
               

               {/* Maps */}
               <div className="container mx-auto p-5 text-center">
                  <h1 className="my-2 lg:my-4 text-3xl lg:text-6xl">The Location</h1>
                  <div className="mapouter">
                     <div className="gmap_canvas">
                     <iframe
                        width="100%"
                        height="100%"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?q=Bambuden+1&t=&z=18&ie=UTF8&iwloc=&output=embed"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        title="Google Map"
                     ></iframe>
                     <a href="https://textcaseconvert.com"></a>
                     <br />
                     <a href="https://www.alarm-clock.net"></a>
                     <a href="https://www.ongooglemaps.com">insert google map html</a>
                     </div>
                  </div>
               </div>

            </div>
         )}
      </Fragment>
   );
}
