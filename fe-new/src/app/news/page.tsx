import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { IoIosArrowDropright } from "react-icons/io";

// async function getData() {
//   const res = await fetch("http://127.0.0.1:8000/api/news", {
//     cache: "no-cache",
//   });

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     return [];
//   }

//   return res.json();
// }

export default async function page() {
    // const { data } = await getData();
  return (
    <div>
      {/* <h2 className="text-3xl font-bold">News List</h2>
      <div className="mt-3 grid grid-cols-2 gap-5 overflow-hidden">
        {data ? (
          data.map((d: any) => (
            <div className="mb-5 text-[#000371]">
              <Image
                src={d.thumbnail}
                width={1000}
                height={1000}
                alt="gambar"
                className="w-full h-[300px]"
              />
              <h2 className="text-xl my-2 font-Gilroy font-bold text-biru">{d.title}</h2>
              <div
                className="line-clamp-4 mb-2 text-biru font-Gilroy font-normal"
                dangerouslySetInnerHTML={{ __html: d.content }}
              />
              <Link
                href={`/news/detail/${d.slug}`}
                className="flex items-center gap-1 font-Gilroy font-bold lg:justify-end lg:text-base pe-2"
              >
                <span>Read More</span>
                <IoIosArrowDropright size={20} />
              </Link>
            </div>
          ))
        ) : (
          <p>Gagal Mengambil data</p>
        )}
      </div> */}
    </div>
  );
}
