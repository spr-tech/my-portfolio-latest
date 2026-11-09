import type { ComponentType, SVGProps } from "react";

import { MailIcon, MapPinIcon } from "@/components/ui/icons/icons";
import { Text } from "@/components/ui/typography/text";
import type { ContactItem, ContactKind } from "@/models/profile";
import { cn } from "@/utilities/helpers/cn";

const contactIcons: Record<ContactKind, ComponentType<SVGProps<SVGSVGElement>>> = {
  email: MailIcon,
  location: MapPinIcon,
};

type ContactListProps = {
  contacts: ContactItem[];
  className?: string;
};

/** Full contact rows (email, location) with an icon and a small label. */
export function ContactList({ contacts, className }: ContactListProps) {
  return (
    <ul className={cn("flex flex-col gap-3.5", className)}>
      {contacts.map((contact) => {
        const Icon = contactIcons[contact.kind];

        return (
          <li key={contact.kind} className="flex items-center gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-surface-raised text-accent-text">
              <Icon />
            </span>
            <div className="min-w-0">
              {/* Uppercased by CSS only, so screen readers still read "Email", not "E-M-A-I-L". */}
              <Text size="caption" weight="medium" className="tracking-wider uppercase">
                {contact.label}
              </Text>
              {contact.href ? (
                <a
                  href={contact.href}
                  className="text-sm wrap-break-word text-text-primary underline-offset-4 transition-colors duration-200 ease-out hover:text-accent-text hover:underline"
                >
                  {contact.value}
                </a>
              ) : (
                <Text size="small" tone="primary">
                  {contact.value}
                </Text>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
