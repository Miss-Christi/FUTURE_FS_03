'use client';

import Image from 'next/image';
import { useState } from 'react';

const fallbackCover = "https://plus.unsplash.com/premium_vector-1733925689480-08c807c00848?q=80&w=735&auto=format&fit=crop";

export default function BookCover({ src, alt, className }) {
  const [imgSrc, setImgSrc] = useState(src);

  // Handle Strapi object or direct string
  const validSrc = imgSrc?.url ? `http://localhost:1337${imgSrc.url}` : imgSrc;

  return (
    <Image
      src={validSrc || fallbackCover}
      fill
      alt={alt || "Book Cover"}
      className={className || "object-cover"}
      onError={() => setImgSrc(fallbackCover)}
    />
  );
}