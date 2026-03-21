import { businessInfo, serviceAreas } from "@/lib/site-data";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CleaningService",
    name: businessInfo.name,
    image: "https://sunshineshandygalservices.com/images/logo.png",
    telephone: "+1-321-339-6686",
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Orlando",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: serviceAreas.map((area) => area.name),
    priceRange: "$$",
    founder: businessInfo.owner,
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
