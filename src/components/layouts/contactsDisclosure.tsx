"use client";

import { useId, useState, type ReactNode } from "react";

import { Button } from "@/components/ui/button/button";
import { ChevronDownIcon } from "@/components/ui/icons/icons";
import { cn } from "@/utilities/helpers/cn";

type ContactsDisclosureProps = {
  showLabel: string;
  hideLabel: string;
  /** Sits beside the toggle on mobile. Rendered on the server and passed in. */
  cvButton: ReactNode;
  /** The contact list, rendered on the server and passed in. */
  children: ReactNode;
};

/**
 * Below lg the contacts collapse behind a "Show contacts" button. From lg up the button is hidden
 * and the list is always shown, with a divider above and below it.
 */
export function ContactsDisclosure({ showLabel, hideLabel, cvButton, children }: ContactsDisclosureProps) {
  const [isOpen, setIsOpen] = useState(false);
  const listId = useId();

  return (
    <>
      {/* flex-auto, not flex-1: on very narrow phones the buttons wrap to two rows instead of
          pushing the page wider than the screen. */}
      <div className="flex flex-wrap gap-2 lg:hidden">
        <Button
          variant="secondary"
          aria-expanded={isOpen}
          aria-controls={listId}
          onClick={() => setIsOpen((wasOpen) => !wasOpen)}
          className="flex-auto gap-1.5"
          endIcon={
            <ChevronDownIcon
              className={cn("size-4 transition-transform duration-350 ease-out", isOpen && "rotate-180")}
            />
          }
        >
          {isOpen ? hideLabel : showLabel}
        </Button>
        {cvButton}
      </div>

      <div
        id={listId}
        className={cn(
          "lg:border-y lg:border-border lg:py-5",
          // display:none also removes the links from the tab order and screen readers.
          !isOpen && "max-lg:hidden",
        )}
      >
        {children}
      </div>
    </>
  );
}
