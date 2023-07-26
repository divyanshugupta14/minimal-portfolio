import GridItem from "@/components/grid-item";
import GridItemProps from "@/components/grid-item";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/constants/user-info";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full gap-10">
      <div className="max-w-md flex-1 p-6 h-full">
        {/** Left */}
        <div className="flex flex-col h-full rounded-md space-y-6">
          <Image src="/user-avatar-new.png" height={120} width={120} priority alt="avatar" loading="eager" />
          {/* Content Container */}
          <div>
            <div className="text-xl text-primary font-semibold">{siteConfig.title}</div>
            <div className="text-4xl font-bold mt-2">{siteConfig.creator}</div>
            <div className="text-lg text-neutral-500">{siteConfig.bio}</div>
          </div>
          {/* Bottom Container */}
          <div className="flex items-center justify-between gap-2">
            <a
              className="flex items-center px-3 py-2 gap-2 rounded-md border border-neutral-200 dark:border-neutral-700"
              href={siteConfig.locationLink}
            >
              <MapPin size={16} />
              {siteConfig.location}
            </a>
            <a
              className="flex items-center px-3 py-2 gap-2 rounded-md border border-neutral-200 dark:border-neutral-700"
              href={siteConfig.locationLink}
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
          {/* Footer */}
          <div className="border-t pt-6 text-xs flex items-center justify-between border-neutral-200 dark:border-neutral-700">
            <div className="text-neutral-500">Built by Divyanshu Gupta | ©2023. All Rights Reserved</div>
            <ThemeToggle />
          </div>
        </div>
      </div>
      {/** Right */}
      <div className="flex-1 p-6 h-full">
        {/* Grid Container */}
        <div className="w-full h-full grid grid-cols-4 p-6 auto-rows-[76px] gap-10">
          {/* Grid Items */}
          {siteConfig.items.map((item, index) => (
            <GridItem key={item.title + index} size={item.layout}>
              <div>{item.title}</div>
            </GridItem>
          ))}
        </div>
      </div>
    </main>
  );
}
