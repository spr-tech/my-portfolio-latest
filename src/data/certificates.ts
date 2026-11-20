import type { Certificate } from "@/models/experience";

// Shared by the Experience tab and the sidebar award badge, so each file path lives in one place.

export const tesaCertificate: Certificate = {
  label: "View certificate",
  href: "/files/tesa-best-graduating-student.jpg",
  ariaLabel: "View Best Graduating Student certificate (opens in a new tab)",
};

export const rwaCertificate: Certificate = {
  label: "View certificate",
  href: "/files/rwa-internship-certificate.jpg",
  ariaLabel: "View RWA Inc internship certificate (opens in a new tab)",
};
