import e1 from "../public/events/e1.jpg";
import e2 from "../public/events/e12.jpg";
import e3 from "../public/events/e3.jpg";
import e4 from "../public/events/e4.jpg";
import e5 from "../public/events/e5.jpg";
import e6 from "../public/events/e6.jpg";
import e7 from "../public/events/e7.jpg";
import e8 from "../public/events/e8.jpg";
import e9 from "../public/events/e9.jpg";
import e10 from "../public/events/e10.jpg";
import e11 from "../public/events/e11.jpg";
import e12 from "../public/events/e12.jpg";
import e13 from "../public/events/e13.jpg";
import e14 from "../public/events/e14.jpg";
import e15 from "../public/events/e15.jpg";
import e16 from "../public/events/e16.jpg";
import e17 from "../public/events/e17.jpg";
import e18 from "../public/events/e18.jpg";
import e19 from "../public/events/e19.jpg";
import e20 from "../public/events/e20.jpg";
import e21 from "../public/events/e21.jpg";
import e22 from "../public/events/e22.jpg";
import e23 from "../public/events/e23.jpg";
import e24 from "../public/events/e24.jpg";
import e25 from "../public/events/e25.jpg";
import e26 from "../public/events/e26.jpg";
import e27 from "../public/events/e27.jpg";
import e28 from "../public/events/e28.jpg";
import e29 from "../public/events/e29.jpg";

import Navbar from "../components/Navbar";
import Image from "next/image";
import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
function Gallery() {
  const [data, getData] = useState({ post: [] });
  useEffect(() => {
    axios
      .get("https://bravosfood.pythonanywhere.com/api/gallery/")
      .then((res) => {
        getData({
          post: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, []);
  const slide = data.post;
  console.log(slide);
  return (
    <div>
      <Navbar />
      <div className="min-h-screen w-full bg-gray-100 text-center text-2xl font-bold text-red-700">
        <div>
          <Head>
            <title>Bravo - Gallery</title>
            <meta
              name="description"
              content="Bravos Food is Food restaurant located in Ho at;1st Floor, Ahoe Satellite Market Shopping Center And Top Floor,Bayport Office,Opposite High Court, Adjacent to NHIS,Old Traffic
          Light,Ho"
            />
            <meta property="og:title" content="Bravos Food locate us in Ho  " />
            <meta property="og:site_name" content="BRAVOS FOOD - Gallery" />
            <meta property="og:type" content="food" />
            <meta property="og:url" content="www.bravosfoodgh.com/gallery" />
            <link rel="icon" href="/favi.ico" />
          </Head>
          <div className="h-full w-screen bg-gray-100 flex flex-col text-center pb-10">
            <div className="mb-20 p-4">
              <div className="mb-4">
                <h1 className=" uppercase text-xl md:2xl font-extrabold tracking-widest text-red-600">
                  Events Gallery
                </h1>
              </div>
              <div>
                <div className="flex flex-col md:flex-row flex-wrap md:min-w-full space-y-2 md:space-x-2 w-80 md:ml-2 xl:ml-14 ml-4">
                  <div className=" ">
                    <Image src={e21} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e22} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e23} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e24} height="300" width="400" />
                  </div>
                  <div className=" ">
                    <Image src={e25} height="300" width="400" />
                  </div>
                  <div className=" ">
                    <Image src={e26} height="300" width="400" />
                  </div>{" "}
                  <div className="">
                    <Image src={e27} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e28} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e29} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e1} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e2} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e3} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e4} height="300" width="400" />
                  </div>
                  <div className=" ">
                    <Image src={e5} height="300" width="400" />
                  </div>
                  <div className=" ">
                    <Image src={e6} height="300" width="400" />
                  </div>{" "}
                  <div className="">
                    <Image src={e7} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e8} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e9} height="300" width="400" />
                  </div>
                  <div className=" ">
                    <Image src={e10} height="300" width="400" />
                  </div>
                  <div className=" ">
                    <Image src={e11} height="300" width="400" />
                  </div>{" "}
                  <div className="">
                    <Image src={e12} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e13} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e14} height="300" width="400" />
                  </div>
                  <div className=" ">
                    <Image src={e15} height="300" width="400" />
                  </div>
                  <div className=" ">
                    <Image src={e16} height="300" width="400" />
                  </div>{" "}
                  <div className="">
                    <Image src={e17} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e18} height="300" width="400" />
                  </div>
                  <div className="">
                    <Image src={e19} height="300" width="400" />
                  </div>
                  <div className=" ">
                    <Image src={e20} height="300" width="400" />
                  </div>
                  {slide.map((pro) => (
                    <div key={pro.id}>
                      <div className=" ">
                        <Image src={pro.picture} height="300" width="400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
