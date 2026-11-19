import { ExternalLink } from "@/components/ui/link/externalLink";
import type { Certificate } from "@/models/experience";

type CertificateLinkProps = {
  certificate: Certificate;
  className?: string;
};

/** "View certificate", opening the image in a new tab; aria-label names the certificate. */
export function CertificateLink({ certificate, className }: CertificateLinkProps) {
  return (
    <ExternalLink
      href={certificate.href}
      aria-label={certificate.ariaLabel}
      hasArrow
      className={className}
    >
      {certificate.label}
    </ExternalLink>
  );
}
