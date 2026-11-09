import Image from "next/image";

import { ContactList } from "@/components/layouts/contactList";
import { ContactsDisclosure } from "@/components/layouts/contactsDisclosure";
import { SocialLinks } from "@/components/layouts/socialLinks";
import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import { Card } from "@/components/ui/card/card";
import { DownloadIcon } from "@/components/ui/icons/icons";
import { ThemeToggle } from "@/components/ui/themeToggle/themeToggle";
import { Text } from "@/components/ui/typography/text";
import { profile } from "@/data/profile";
import { cn } from "@/utilities/helpers/cn";

type SidebarProps = {
  className?: string;
};

function CvButton({ className }: { className?: string }) {
  return (
    <Button
      href={profile.cv.href}
      download={profile.cv.fileName}
      startIcon={<DownloadIcon className="size-4" />}
      className={cn("flex-auto", className)}
    >
      {profile.cv.label}
    </Button>
  );
}

/**
 * One card for both layouts. Below lg it's a compact row with the contacts behind a toggle; from
 * lg up it's a centred column that sticks while the tab content scrolls.
 */
export function Sidebar({ className }: SidebarProps) {
  return (
    <Card
      as="aside"
      aria-label="Profile"
      padding="none"
      className={cn("flex flex-col gap-3.5 p-4 lg:sticky lg:top-6 lg:gap-5 lg:px-6 lg:py-7", className)}
    >
      <div className="flex items-center gap-3 lg:flex-col lg:text-center">
        {/* sizes is the real display width; the browser multiplies it by the screen's pixel
            density, so a 2x screen fetches the 256px file for the 128px photo. */}
        <Image
          src={profile.photo}
          alt={profile.photoAlt}
          sizes="(min-width: 1024px) 128px, 76px"
          quality={90}
          preload
          className="size-19 shrink-0 rounded-xl border border-border bg-surface-raised object-cover object-top lg:size-32 lg:rounded-2xl"
        />
        <div className="min-w-0 flex-1 lg:flex-none">
          {/* 16px below 360px wide, so the name stays on one line beside the 76px photo. */}
          <Text size="heading" weight="bold" tone="primary" className="max-[22.5rem]:text-base lg:text-2xl">
            {profile.name}
          </Text>
          {/* 12px on phones as in the design, 14px from lg. Allowed to wrap so it never slides
              under the theme toggle on very narrow screens. */}
          <Badge
            variant="accent"
            className="mt-1 whitespace-normal lg:mt-2 lg:rounded-lg lg:px-2.5 lg:py-1 lg:text-sm"
          >
            {profile.role}
          </Badge>
        </div>
        <ThemeToggle className="lg:hidden" />
      </div>

      <p className="text-sm text-text-secondary lg:text-center">
        <span aria-hidden="true">
          {profile.tagline.lead}{" "}
          <span className="font-medium text-accent-text">{profile.tagline.words[0]}</span>.
        </span>
        <span className="sr-only">{profile.tagline.accessibleText}</span>
      </p>

      <Badge variant="outline" className="self-start rounded-full px-2.5 py-1 font-medium lg:self-center">
        <span aria-hidden="true" className="relative size-2 rounded-full bg-success" />
        {profile.status}
      </Badge>

      <ContactsDisclosure
        showLabel={profile.contactsToggle.showLabel}
        hideLabel={profile.contactsToggle.hideLabel}
        cvButton={<CvButton />}
      >
        <div className="flex flex-col gap-3">
          <ContactList contacts={profile.contacts} />
          <SocialLinks links={profile.socialLinks} />
        </div>
      </ContactsDisclosure>

      {/* Desktop buttons. A separate copy keeps the tab order matching what's on screen. */}
      <div className="hidden gap-2 lg:flex">
        <CvButton />
        <ThemeToggle />
      </div>
    </Card>
  );
}
