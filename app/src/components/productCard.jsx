// src/components/ProductCard.js
"use client";

import React from 'react';
import Link from 'next/link';
import {ItemRating} from "@/components/itemRating";

export function ProductCard({ item}) {


    return (
        <div className="w-80 border-black border-2 p-10 bg-amber-200 flex flex-col items-center gap-3">
            <p>{item.id}</p>
            <img className="border-2 border-black w-40" src={item.image} alt="" />
            <strong className="text-center">{item.title}</strong>
            <ItemRating rate={item.rating.rate} count={item.rating.count}/>
            <p>{item.price},-</p>
            <Link href={'/' + item.id}>Click for detail</Link>
        </div>
    );
}
