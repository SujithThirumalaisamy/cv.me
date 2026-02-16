"use client";

import { CalendarIcon } from "lucide-react";
import { formatDatetime } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface BlogCardProps {
  slug: string;
  title: string;
  datetime: string;
  image?: string;
}

export function BlogCard({ slug, title, datetime, image }: BlogCardProps) {
  return (
    <Link href={`/blogs/${slug}`} className="block h-full">
      <div className="group flex h-full cursor-pointer flex-col">
        {image && (
          <div className="relative mb-3 h-[16em] w-full flex-shrink-0 overflow-hidden rounded-lg md:h-[12em] lg:h-[8em]">
            <Image src={image} alt={title} fill className="object-cover" />
          </div>
        )}

        <div className="flex flex-1 flex-col">
          <h3 className="mb-1 line-clamp-2 text-lg font-medium text-foreground transition-colors group-hover:text-primary md:text-sm">
            {title}
          </h3>

          {/* 👇 This is the key change */}
          <div className="mt-auto flex items-center text-xs text-muted-foreground">
            <CalendarIcon className="mr-1 h-3 w-3" />
            {formatDatetime(datetime)}
          </div>
        </div>
      </div>
    </Link>
  );
}
