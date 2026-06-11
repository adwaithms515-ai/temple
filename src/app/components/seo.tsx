import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  locale?: "en" | "ml";
}

export function SEO({
  title,
  description,
  keywords = "Thiruvannur Sree Krishna Temple, Krishna temple Kozhikode, Kerala temple, vazhipadu, pooja booking, Thiruvannur temple, ശ്രീ കൃഷ്ണ ക്ഷേത്രം, കോഴിക്കോട്, kerala krishna temple, samuthiri",
  image = "https://images.unsplash.com/photo-1626094305030-351b21cea3e9",
  url = "https://thiruvannurtemple.org",
  locale = "en",
}: SEOProps) {
  const fullTitle = `${title} | Thiruvannur Sree Krishna Temple`;
  const siteName = "Thiruvannur Sree Krishna Temple";

  return (
    <Helmet>
      <html lang={locale === "ml" ? "ml-IN" : "en-IN"} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />

      {/* hreflang for bilingual support */}
      <link rel="alternate" hrefLang="ml" href={`${url}/ml`} />
      <link rel="alternate" hrefLang="en" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="ml_IN" />
      <meta property="og:locale:alternate" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data — PlaceOfWorship */}
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "PlaceOfWorship",
        "name": "Thiruvannur Sree Krishna Temple",
        "alternateName": "തിരുവണ്ണൂർ ശ്രീ കൃഷ്ണ ക്ഷേത്രം",
        "description": description,
        "url": url,
        "image": image,
        "telephone": "+91-9876543210",
        "email": "info@thiruvannurtemple.org",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Thiruvannur",
          "addressLocality": "Kozhikode",
          "addressRegion": "Kerala",
          "postalCode": "673029",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 11.2588,
          "longitude": 75.7804
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "05:00",
            "closes": "12:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
            "opens": "17:00",
            "closes": "20:30"
          }
        ],
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Online Transfer",
        "inLanguage": ["ml", "en"],
        "religion": "Hinduism",
        "denomination": "Vaishnavism"
      })}</script>

      <link rel="canonical" href={url} />
    </Helmet>
  );
}
