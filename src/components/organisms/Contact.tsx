"use client";
import React from "react";
import Heading from "../atoms/typography/Heading";
import Image from "next/image";
import Body from "../atoms/typography/Body";
import { useTheme } from "@/contexts/ThemeContext";
import {
  FACEBOOK_LOGO,
  GITHUB_LOGO,
  GMAIL_LOGO,
  INSTAGRAM_LOGO,
  LINKEDIN_LOGO,
  TELEGRAM_LOGO,
  TOPMAT_LOGO,
  WHATSAPP_LOGO,
  YOUTUBE_LOGO,
} from "@/assests/svgConstants";
8;

// Define the shape of the social media platform object
interface SocialMediaPlatform {
  id: number;
  platform: string;
  icon: string;
  onPressAction: () => void;
}

const Contact: React.FC = () => {
  const { theme } = useTheme();

  const sendMessageToWhatsApp = () => {
    const phoneNumber = "+917234869244";
    const mobileLink = `whatsapp://send?phone=${phoneNumber}`;
    const webLink = `https://web.whatsapp.com/send?phone=${phoneNumber}`;
    const desktopLink = `https://wa.me/${phoneNumber}`;
    if (
      typeof navigator !== "undefined" &&
      /android|iphone|ipad|ipod/i.test(navigator.userAgent)
    ) {
      window.open(mobileLink, "_self");
    } else if (navigator.userAgent.includes("WhatsApp")) {
      window.open(desktopLink, "_self");
    } else {
      window.open(webLink, "_blank");
    }
  };

  const handleComposeMail = () => {
    console.log(navigator);

    const mailto =
      "mailto:electromonk01@gmail.com?subject=Hello&body=Hi there!";
    const webLink =
      "https://mail.google.com/mail/?view=cm&fs=1&to=electromonk01@gmail.com&su=Hello&body=Hi there!";

    if (
      typeof navigator !== "undefined" &&
      /android|iphone|ipad|ipod/i.test(navigator.userAgent)
    ) {
      window.location.href = mailto;
    } else if (
      navigator.userAgent.includes("Macintosh") ||
      navigator.userAgent.includes("Mac OS")
    ) {
      window.open(mailto, "_blank");
    } else if (navigator.userAgent.includes("Gmail")) {
      window.open(webLink, "_self");
    } else if (navigator?.platform === "MacIntel") {
      window.open(webLink, "_self");
    } else {
      window.open(mailto, "_blank");
    }
  };

  const sendMessageToTelegram = () => {
    const username = "SAURABH_S_O_N_I";
    const mobileLink = `tg://resolve?domain=${username}`;
    const webLink = `https://web.telegram.org/#/im?p=@${username}`;
    const desktopLink = `https://t.me/${username}`;

    if (
      typeof navigator !== "undefined" &&
      /android|iphone|ipad|ipod/i.test(navigator.userAgent)
    ) {
      window.open(mobileLink, "_self");
    } else if (navigator.userAgent.includes("Telegram")) {
      window.open(desktopLink, "_self");
    } else {
      window.open(webLink, "_blank");
    }
  };

  const socialMediaPlatforms: SocialMediaPlatform[] = [
    {
      id: 0,
      platform: "Linkedin",
      icon: LINKEDIN_LOGO,
      onPressAction: () => {
        window.open(
          "https://www.linkedin.com/in/saurabh-soni-48a567166/",
          "_blank"
        );
      },
    },
    {
      id: 1,
      platform: "Topmate",
      icon: TOPMAT_LOGO,
      onPressAction: () => {
        window.open(
          "https://topmate.io/saurabh_soni/?utm_source=linkedin&utm_medium=product&utm_campaign=ss",
          "_blank"
        );
      },
    },
    {
      id: 2,
      platform: "Instagram",
      icon: INSTAGRAM_LOGO,
      onPressAction: () => sendMessageToTelegram,
    },
    {
      id: 3,
      platform: "Youtube",
      icon: YOUTUBE_LOGO,
      onPressAction: () => {
        window.open(
          "https://youtube.com/@electro_monk?si=TKzY2N9lIu0OwxJO",
          "_blank"
        );
      },
    },
    {
      id: 4,
      platform: "Facebook",
      icon: FACEBOOK_LOGO,
      onPressAction: () => {
        window.open("https://www.facebook.com", "_blank");
      },
    },
    {
      id: 5,
      platform: "Whatsapp",
      icon: WHATSAPP_LOGO,
      onPressAction: sendMessageToWhatsApp,
    },
    {
      id: 6,
      platform: "Telegram",
      icon: TELEGRAM_LOGO,
      onPressAction: () => {
        window.open("https://www.telegram.org", "_blank");
      },
    },
    {
      id: 7,
      platform: "Gmail",
      icon: GMAIL_LOGO,
      onPressAction: handleComposeMail,
    },
    {
      id: 8,
      platform: "Github",
      icon: GITHUB_LOGO,
      onPressAction: () => {
        window.open("https://github.com/Mrdynamic-soni", "_blank");
      },
    },
  ];

  return (
    <div className="md:px-32 py-8">
      <Heading heading="Contact" size="xl" customStyles="text-center" />

      <div className="mt-4 flex justify-center flex-wrap items-center space-x-2 space-y-2">
        {socialMediaPlatforms.map((item) => (
          <button
            key={item.id}
            className="flex justify-start items-center space-x-4 w-max px-6 py-3 rounded-md transition-all duration-300 hover:scale-105"
            onClick={item.onPressAction}
            style={{
              backgroundImage: `linear-gradient(to right, ${theme?.colors?.surface?.secondary}, ${theme?.colors?.surface?.tertiary})`,
            }}
            aria-label={`Visit ${item.platform}`}
          >
            <Image
              src={item.icon}
              height={24}
              width={24}
              alt={`${item.platform} logo`}
              className="inline-block"
            />
            <Body
              body={item.platform}
              size="medium"
              textColor={theme?.colors?.text?.invertPrimary}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Contact;
