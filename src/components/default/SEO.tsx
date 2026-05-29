import React from 'react';
import { Helmet } from 'react-helmet-async';
import { COMPANY_INFO } from '../../constants';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage,
}) => {
  const defaultTitle = `${COMPANY_INFO.shortName} - Sarsılmaz Temeller`;
  const defaultDescription = `Mühendisliğin estetikle buluştuğu ${COMPANY_INFO.legalNameShortUpper} projeleri. Depreme dayanıklı, modern tasarımlar ve kaliteli yaşam alanları inşa ediyoruz.`;

  const finalTitle = title ? `${title} | ${COMPANY_INFO.shortName}` : defaultTitle;
  const finalDescription = description || defaultDescription;

  // Safe window location retrieval for canonical URLs
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const finalCanonical = canonical || currentUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      {finalCanonical && <meta property="og:url" content={finalCanonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical URL */}
      {finalCanonical && <link rel="canonical" href={finalCanonical} />}
    </Helmet>
  );
};

export default SEO;
