import { useRouter } from "next/router";
import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import { Gallery } from "react-grid-gallery";
import Countdown from 'react-countdown';

export default function InvitationPage(props) {
   const router = useRouter();
   const data = router.query.slug;

   const targetDate = new Date(2024, 10, 13, 12, 15, 0);
   const [pause, setPause] = useState(false);
   const [song, setSong] = useState();
   const [show, setShow] = useState(false);
   const [showGift, setShowGift] = useState(false);
   const [copy1, setCopy1] = useState("Copy Number");
   const [copy2, setCopy2] = useState("Copy Number");

   let nama = data && data[0];
   let meja = data && data[1];

   function BukaUndangan() {
      setShow(true);
      const music = new Audio("/Music/Started With You.mp3");
      setSong(music);
      music.play();
      music.loop = true;
      
      setTimeout(() => {
         const mainDiv = document.getElementById('main');
         if (mainDiv) {
            mainDiv.scrollIntoView({ behavior: 'smooth' });
         }
      }, 100);
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

   function bukaHadiah(){
      setShowGift(true);
   }

   function copyToClipboard(text ,id){
      navigator.clipboard.writeText(text).then(() => {
         if (id == "copy1") {
            setCopy1("Copied!");
         }else {
            setCopy2("Copied!");
         }
   
         alert('Account number copied to clipboard!');
       }).catch(err => {
         console.error('Failed to copy: ', err);
       });
   }

   const IMAGES = [
      {
        src: '/Gallery/1.jpeg',
        thumbnailWidth: 1000,  // Larger width
        thumbnailHeight: 400, // Larger height
        
      },
      {
        src: '/Gallery/4.jpeg',
        thumbnailWidth: 1000,  // Larger width
        thumbnailHeight: 800, // Larger height
        
      },
      {
        src: '/Gallery/3.jpeg',
        thumbnailWidth: 1000,  // Larger width
        thumbnailHeight: 800, // Larger height
        
      },
      {
         src: '/Gallery/2.jpeg',
         thumbnailWidth: 1000,  // Larger width
         thumbnailHeight: 800, // Larger height
         
       },
       {
         src: '/Gallery/5.jpeg',
         thumbnailWidth: 1000,  // Larger width
         thumbnailHeight: 800, // Larger height
         
       },
       {
         src: '/Gallery/6.jpeg',
         thumbnailWidth: 1000,  // Larger width
         thumbnailHeight: 800, // Larger height
         
       },
       {
         src: '/Gallery/7.jpeg',
         thumbnailWidth: 1000,  // Larger width
         thumbnailHeight: 800, // Larger height
         
       },
       {
         src: '/Gallery/8.jpeg',
         thumbnailWidth: 1000,  // Larger width
         thumbnailHeight: 800, // Larger height
         
       },
       {
         src: '/Gallery/9.jpeg',
         thumbnailWidth: 1000,  // Larger width
         thumbnailHeight: 800, // Larger height
         
       },
       {
         src: '/Gallery/10.jpeg',
         thumbnailWidth: 1000,  // Larger width
         thumbnailHeight: 800, // Larger height
         
       },
       {
         src: '/Gallery/11.jpeg',
         thumbnailWidth: 1000,  // Larger width
         thumbnailHeight: 800, // Larger height
         
       },
       {
         src: '/Gallery/12.jpeg',
         thumbnailWidth: 1000,  // Larger width
         thumbnailHeight: 800, // Larger height
         
       },
       {
         src: '/Gallery/14.jpeg',
         thumbnailWidth: 1000,  // Larger width
         thumbnailHeight: 800, // Larger height
         
       },       {
         src: '/Gallery/13.jpeg',
         thumbnailWidth: 1000,  // Larger width
         thumbnailHeight: 800, // Larger height
         
       },
      // Add more images as needed
    ];

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
         {show && (
            <button className="fixed bottom-3 start-3" onClick={() => stopMusic()}>
               Stop
            </button>
         )}
         <div
            className="flex flex-col justify-end items-center h-screen bg-cover bg-center relative overflow-hidden"
            style={{
               backgroundImage: "url('/Gallery/6.jpeg')",
            }}>
            <div
               className="absolute inset-0 bg-gradient-to-b from-transparent to-white"
               aria-hidden="true"></div>
            <div className="text-center bg-white bg-opacity-50 p-8 rounded-3xl mb-8 relative z-10">
               <p className="md:text-3xl">Kepada Bapak/Ibu/Saudara (i)</p>
               <p className="font-semibold md:text-3xl md:my-2">{nama}</p>
               <p className="md:text-3xl">Meja {meja}</p>
               <button
                  className="md:text-xl my-2 py-2 px-3 bg-red-400 md:mt-4 rounded-lg hover:bg-red-500 text-white"
                  onClick={() => BukaUndangan()}>
                  💞 Buka Undangan 💞
               </button>
            </div>
         </div>
         {show && (
            <div id="main" className="container mx-auto p-4 relative overflow-hidden">

               {/* Intro */}
               <div className="container text-center my-4">
                  <div className="flex justify-center my-6 md:my-10">
                     <img
                        className="w-full max-w-[200px] md:max-w-[400px] object-contain"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        src="/hias.png"
                        alt="hiasan"
                     />
                  </div>
                  <h1 data-aos='fade-down' data-aos-delay="600" className="md:text-3xl italic font-semibold">
                     "Maka hendaklah sekarang ini kelebihan kamu mencukupkan kekurangan mereka, 
                     agar kelebihan mereka kemudian mencukupkan kekurangan kamu, 
                     supaya ada keseimbangan."
                  </h1>
                  <p data-aos='fade-down' data-aos-delay="700" className="my-4 md:text-2xl italic font-bold">2 Korintus 8:14</p>
               </div>

               {/* Profile */}
               <div className="container my-6 md:my-10">
                  {/* The Groom */}
                  <div className="container mx-auto">
                     <div className="flex flex-col lg:flex-row lg:space-x-4">
                        <div data-aos='fade-right' data-aos-delay="800" className="my-4 flex-1 border border-black rounded-se-[120px] rounded-bl-[120px] overflow-hidden">
                           <img src={'/Profile/kevin1.jpeg'} className="object-cover" alt="The Groom" />
                        </div>
                        <div className="my-4 flex-1 lg:p-4">
                           <button data-aos='fade-up-left' className="cursor-default border border-solid border-black rounded-3xl py-2 px-4 lg:text-3xl">The Groom</button>
                           <div className="my-4 lg:my-6">
                              <p data-aos='fade-up' className=" text-4xl font-semibold lg:text-6xl">Kevin Lois</p>
                              <p data-aos='fade-up' className="font-semibold italic md:text-2xl">
                                 The Only Son of Mr. Gabriel Lois & Mrs. Lily Laiyerang
                              </p>
                           </div>
                           <p data-aos='zoom-in' className="md:text-3xl">
                              Kevin is a cheerful, friendly, and caring person. He brings positivity and warmth wherever he goes, 
                              making everyone around him feel welcome and valued. On this special day, 
                              Kevin is excited to share his joy and love with the people who mean the most to him, 
                              as he starts this new chapter in his life.
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Bridge */}
                  <div className="flex justify-center my-6 md:my-10">
                     <img
                        className="w-full max-w-[200px] md:max-w-[400px] object-contain"
                        data-aos="zoom-in"
                        data-aos-delay="500"
                        src="/batas.png"
                        alt="Flower Chain Divider"
                     />
                  </div>
                  
                  {/* The Bride */}
                  <div className="container mx-auto">
                     <div className="flex flex-col lg:flex-row-reverse lg:space-x-4">
                        <div data-aos='fade-left' data-aos-delay="800" className="my-4 flex-1 border border-black rounded-ss-[120px] rounded-br-[120px] overflow-hidden">
                           <img src={'/Profile/gisella1.jpeg'} className="object-cover" alt="The Bride" />
                        </div>
                        <div data-aos='zoom-in' className="my-4 flex-1 lg:p-4">
                           <button data-aos='fade-up-right' className="cursor-default border border-solid border-black rounded-3xl py-2 px-4 lg:text-3xl">The Bride</button>
                           <div className="my-4 lg:my-6">
                              <p data-aos='fade-up' className="text-4xl font-semibold lg:text-6xl">Gisela Jeanette Mayella Sie</p>
                              <p data-aos='fade-up' className="font-semibold italic md:text-2xl">
                                 The Eldest Daugther of Mr. Ricky Sie & Mrs. Lance Fongiman
                              </p>
                           </div>
                           <p data-aos='zoom-in' className="md:text-3xl">
                              Gisela navigates life with a deep sense of purpose and empathy. 
                              Though introverted and shy, Gisela is driven by a desire to connect with others on a meaningful level. 
                              Her kind and disciplined nature often guides her, and Gisela is deeply moved by the beauty and emotions around her. 
                              As she embarks on this new journey, Gisela looks forward to sharing these profound and heartfelt moments with those who mean the most to her.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Wedding Announcement Info */}
               <div className="text-center p-6 md:p-8 relative md:my-10">
                  {/* Top-left decoration */}
                  <img
                     data-aos='fade-right'
                     src="/top-left.png"
                     alt="Top Left Decoration"
                     className="absolute top-0 left-0 w-[80px] md:w-[200px] lg:w-[300px] z-10"
                  />
                  
                  {/* Top-right decoration */}
                  <img
                     data-aos='fade-left'
                     src="/top-right.png"
                     alt="Top Right Decoration"
                     className="absolute top-0 right-0  w-[80px] md:w-[200px] lg:w-[300px] z-10"
                  />

                  {/* Bottom-left decoration */}
                  <img
                     data-aos='fade-right'
                     data-aos-delay="600"
                     src="/bottom-left.png"
                     alt="Bottom Left Decoration"
                     className="absolute bottom-0 left-0 w-[80px] md:w-[200px] lg:w-[300px] z-10"
                  />

                  {/* Bottom-right decoration */}
                  <img
                     data-aos='fade-left'
                     data-aos-delay="600"
                     src="/bottom-right.png"
                     alt="Bottom Right Decoration"
                     className="absolute bottom-0 right-0 w-[80px] md:w-[200px] lg:w-[300px] z-10"
                  />

                  <h1 data-aos="fade-up" data-aos-delay="200" className="text-3xl my-4 md:text-6xl">
                     Save <div data-aos="zoom-out" data-aos-delay="500" className="inline font-cookie text-5xl md:text-8xl">The</div> Date
                  </h1>
                  <div className="md:my-6">
                     <div data-aos='fade-up' data-aos-delay="1000" className="font-cookie font-medium text-4xl md:text-6xl">Gisela Jeanette Mayella Sie</div>
                     <div data-aos='zoom-out' data-aos-delay="1200" className="font-cookie font-medium text-4xl md:text-6xl">&</div>
                     <h1 data-aos='fade-up' data-aos-delay="1400" className="font-cookie font-medium text-4xl md:text-6xl">Kevin Lois</h1>
                  </div>
                  <div className="my-4 md:my-6 flex flex-col items-center justify-center text-center">
                     <h1 data-aos="flip-left" data-aos-delay="1500" className="mb-4 uppercase font-semibold mb-2 md:text-4xl">Are Getting Married</h1>
                     <img data-aos="zoom-out" data-aos-delay="1600" src="/date-black.png" className="w-[150px] md:w-[350px]" alt="Sunday, 13 October 2024"/>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="500"> 
                     <h1 className="font-semibold text-2xl md:text-5xl">Holy Matrimony</h1>
                     <p className="md:text-2xl">At 10.00 WITA | Paroki St. Albertus Agung</p>
                     <p className="md:text-2xl">Jl. Danau TJ. Bunga Selatan No.127</p>
                     <p className="md:text-2xl">Makassar</p>
                  </div>
                  <div data-aos="fade-up" data-aos-delay="500" className="my-4">
                     <h1 className="font-semibold text-2xl md:text-5xl">Wedding Reception</h1>
                     <p className="md:text-2xl">At 12.15 WITA | Rest. Bambuden 1 Lt.2</p>
                     <p className="md:text-2xl">Jl. Gunung Latimojong No.55</p>
                     <p className="md:text-2xl">Makassar</p>
                  </div>
               </div>

               {/* Countdown */}
               <div data-aos="fade-up" data-aos-duration="1000" id="countdown" className="my-6 md:my-10 container mx-auto flex flex-col items-center justify-center text-center">
                  <Countdown
                     date={targetDate}  // 10 seconds from now
                     renderer={renderer}
                  />
                  <h1 className="mt-4 text-3xl md:text-6xl">Until We Meet</h1>
               </div>

               {/* PostCard */}
               <div className="container mx-auto my-6 md:my-10">

               </div>

               {/* Wedding Gift */}
               <div data-aos="fade-up" data-aos-duration="1500" className="my-4 container mx-auto text-center">
                  <h1 className="text-3xl md:text-6xl">Wedding Gift</h1>
                  <p className="my-4 text md:text-3xl">
                     For family and friend who would like to send a gift.
                     We would be glad to recieve it. Tap the button to send them to us.
                  </p>
                  <button onClick={() => setShowGift((prevShowGift) => !prevShowGift)} className="md:text-xl border border-black py-2 px-4 rounded-3xl hover:text-white hover:bg-slate-950">
                     <i className="fa-solid fa-gift"></i> Wedding Gift
                  </button>
                  {showGift && (
                     <div>
                        <div data-aos="fade-down" data-aos-duration="1500" className="mt-4 container px-2 py-3 bg-emerald-100 rounded-xl">
                           <div className="text-start">
                              <h2 className="mb-1 text-2xl font-semibold">Bank BCA</h2>
                              <p className="italic font-medium">0982309812</p>
                              <p className="italic font-medium">gisela Jeanette Mayella Sie</p>
                           </div>
                           <button id="copy1" className="mt-1 font-medium hover:text-white" onClick={() => copyToClipboard('0982309812', 'copy1')}>{copy1}</button>
                        </div>

                        <div data-aos="fade-down" data-aos-duration="1500" className="mt-4 container px-2 py-3 bg-emerald-100 rounded-xl">
                           <div className="text-start">
                              <h2 className="mb-1 text-2xl font-semibold">Bank BCA</h2>
                              <p className="italic font-medium">0982309812</p>
                              <p className="italic font-medium">Kevin Lois</p>
                           </div>
                           <button id="copy2" className="mt-1 font-medium hover:text-white" onClick={() => copyToClipboard('0982309812', 'copy2')}>{copy2}</button>
                        </div>
                     </div>
                  )}
               </div>

               {/* Photo Gallery */}
               <div className="md:my-10">
                  <h1 data-aos="fade-up" data-aos-duration="1500" className="mb-4 text-center text-3xl md:text-6xl">Our Best Moment</h1>
                  <div data-aos="fade-up" data-aos-duration="1500" className="grid-wrapper">
                     <div className="tall">
                        <img src="/Gallery/1.jpeg"/>
                     </div>
                     <div className="tall">
                        <img src="/Gallery/3.jpeg"/>
                     </div>
                     <div className="big">
                        <img src="/Gallery/5.jpeg"/>
                     </div>
                     <div className="tall">
                        <img src="/Gallery/7.jpeg"/>
                     </div>
                     <div className="tall">
                        <img src="/Gallery/2.jpeg"/>
                     </div>
                     <div className="tall">
                        <img src="/Gallery/9.jpeg"/>
                     </div>
                     <div className="tall">
                        <img src="/Gallery/10.jpeg"/>
                     </div>
                     <div className="tall">
                        <img src="/Gallery/8.jpeg"/>
                     </div>
                     <div className="tall">
                        <img src="/Gallery/11.jpeg"/>
                     </div>
                     <div className="big">
                        <img src="/Gallery/4.jpeg"/>
                     </div>
                     {/* <div className="big">
                        <img src="/Gallery/13.jpeg"/>
                     </div> */}
                     <div className="tall">
                        <img src="/Gallery/12.jpeg"/>
                     </div>
                     <div className="tall">
                        <img src="/Gallery/14.jpeg"/>
                     </div>
                  </div>
               </div>

               {/* Maps */}
               <div data-aos="fade-up" data-aos-duration="1500" className="container mx-auto p-5 text-center">
                  <h1 className="my-2 lg:my-4 text-3xl lg:text-6xl">The Location</h1>
                  <div className="flex flex-col lg:flex-row lg:space-x-4">
                     {/* Wedding Location */}
                     <div className="flex-1 mb-4 lg:mb-0">
                        <h1 className="text-xl lg:text-2xl mb-2">Wedding Reception</h1>
                        <div className="mapouter">
                        <div className="gmap_canvas">
                           <iframe
                              width="100%"
                              height="300"  // Adjust height as needed
                              id="gmap_canvas"
                              src="https://maps.google.com/maps?q=Bambuden+1&t=&z=18&ie=UTF8&iwloc=&output=embed"
                              frameBorder="0"
                              scrolling="no"
                              marginHeight="0"
                              marginWidth="0"
                              title="Google Map"
                           ></iframe>
                        </div>
                        </div>
                     </div>

                     {/* Holy Matrimony Location */}
                     <div className="flex-1">
                        <h1 className="text-xl lg:text-2xl mb-2">Holy Matrimony</h1>
                        <div className="mapouter">
                        <div className="gmap_canvas">
                           <iframe
                              width="100%"
                              height="300"  // Adjust height as needed
                              id="gmap_canvas"
                              src="https://maps.google.com/maps?q=Gerja+katolik+santo+albertur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                              frameBorder="0"
                              scrolling="no"
                              marginHeight="0"
                              marginWidth="0"
                              title="Google Map"
                           ></iframe>
                        </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         )}
      </Fragment>
   );
}
