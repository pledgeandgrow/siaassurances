'use client';

import Script from 'next/script';

export default function ClientAnalyticsScript() {
  return (
    <Script
      src="https://cdn.example.com/analytics.js"
      strategy="lazyOnload"
      onLoad={() => {
        console.log('Script d\'analyse chargé correctement')
      }}
    />
  );
}
