import { BlogType } from "@/lib/Types/BlogType";
import Image from "next/image";

// distructuring props

export default function BlogComponent({ profile, name, position } : BlogType) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={profile}
        alt=""
        width={100}
        height={100}
        loading="eager"
        className="rounded-full"
      ></Image>
      <div className="">
        <h1 className="font-bold">{name}</h1>
        <p className="text-gray-500">{position}</p>
      </div>
    </div>
  );
}
