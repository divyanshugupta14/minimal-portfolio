"use client";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";
import { siteConfig } from "@/constants/user-info";
import Icon from "@/components/icon";
import Button from "./button";

const LeftPanel = () => {
  return (
    <div key="left-panel" className="flex flex-col justify-between py-6 xl:max-w-sm xl:py-10 xl:h-full w-[30rem]">
      {/* Top Container */}
      <div>
        <div>
          <Image
            priority
            loading="eager"
            alt="avatar"
            placeholder="blur"
            src="/user-avatar-new.png"
            width={120}
            height={120}
            blurDataURL="/user-avatar-new.png"
          />
        </div>

        {/* Text Container */}
        <div className="mt-6">
          <h1 className="mt-2 text-4xl font-bold">{siteConfig.creator}</h1>
          <div className="text-lg font-medium text-primary flex items-center gap-2">
            <span>A Dedicated</span>
            <Image priority width={50} height={50} src="/js-icon.png" alt="js-logo" />
            <span>Developer</span>
            <span></span>
          </div>
          {/* <p className="text-lg font-light text-neutral-500">{siteConfig.bio}</p> */}
        </div>
        {/* Buttons Container */}
        <div className="flex items-center gap-3 mt-6">
          <a
            href={`${siteConfig.locationLink}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <MapPin size="14" />
            {siteConfig.location}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center w-full gap-2 px-4 py-2 text-sm font-medium border rounded-md border-neutral-100 dark:border-neutral-800"
          >
            <Mail size="14" />
            Contact Me
          </a>
        </div>
        <div className="flex justify-between items-center gap-2 mt-4 p-2 border-t border-neutral-100 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <Github className="cursor-pointer" />
            <Linkedin className="cursor-pointer" />
          </div>
          <button className="flex gap-1 items-center rounded-lg bg-primary py-1 px-2">
            Resume <Download />
          </button>
        </div>
        <div>Education</div>
        {/* Footer */}
        <div className="hidden xl:flex">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;
