import { Helmet, HelmetProvider } from 'react-helmet-async';
import { seoConfig } from '../data/seoConfig';

export function SEOHead() {
    // If SEO is disabled globally, return null
    if (!seoConfig.enabled) {
        return null;
    }

    // Generate Restaurant Schema
    const restaurantSchema = seoConfig.structuredData.enabled && seoConfig.structuredData.restaurant.enabled ? {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "@id": `${seoConfig.basicSEO.canonicalUrl}#restaurant`,
        "name": seoConfig.structuredData.restaurant.name,
        "image": seoConfig.structuredData.restaurant.image,
        "priceRange": seoConfig.structuredData.restaurant.priceRange,
        "servesCuisine": seoConfig.structuredData.restaurant.servesCuisine,
        "acceptsReservations": "True",
        "url": seoConfig.structuredData.restaurant.url,
        "telephone": seoConfig.structuredData.restaurant.telephone,
        "email": seoConfig.structuredData.restaurant.email,
        "address": {
            "@type": "PostalAddress",
            ...seoConfig.structuredData.restaurant.address
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": seoConfig.structuredData.restaurant.geo.latitude,
            "longitude": seoConfig.structuredData.restaurant.geo.longitude
        },
        "openingHoursSpecification": seoConfig.structuredData.restaurant.openingHours.map(hours => ({
            "@type": "OpeningHoursSpecification",
            ...hours
        })),
        "menu": `${seoConfig.basicSEO.canonicalUrl}#menu`,
        "aggregateRating": {
            "@type": "AggregateRating",
            ...seoConfig.structuredData.restaurant.aggregateRating,
            "bestRating": "5",
            "worstRating": "1"
        }
    } : null;

    // Generate Local Business Schema
    const localBusinessSchema = seoConfig.structuredData.enabled && seoConfig.structuredData.localBusiness.enabled ? {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": seoConfig.structuredData.localBusiness.name,
        "description": seoConfig.structuredData.localBusiness.description,
        "url": seoConfig.basicSEO.canonicalUrl,
        "telephone": seoConfig.structuredData.localBusiness.telephone,
        "priceRange": seoConfig.structuredData.localBusiness.priceRange,
        "paymentAccepted": seoConfig.structuredData.localBusiness.paymentAccepted,
        "hasMap": seoConfig.structuredData.localBusiness.hasMap,
        "address": {
            "@type": "PostalAddress",
            ...seoConfig.structuredData.restaurant.address
        }
    } : null;

    // Generate Breadcrumb Schema
    const breadcrumbSchema = seoConfig.structuredData.enabled && seoConfig.structuredData.breadcrumb.enabled ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": seoConfig.structuredData.breadcrumb.items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    } : null;

    return (
        <Helmet>
            {/* Basic SEO */}
            {seoConfig.basicSEO.enabled && (
                <>
                    <title>{seoConfig.basicSEO.title}</title>
                    <meta name="description" content={seoConfig.basicSEO.description} />
                    <meta name="keywords" content={seoConfig.basicSEO.keywords} />
                    <meta name="author" content={seoConfig.basicSEO.author} />
                    <link rel="canonical" href={seoConfig.basicSEO.canonicalUrl} />
                    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                </>
            )}

            {/* Geo Tagging */}
            {seoConfig.advanced.geoTagging.enabled && (
                <>
                    <meta name="geo.region" content={seoConfig.advanced.geoTagging.region} />
                    <meta name="geo.placename" content={seoConfig.advanced.geoTagging.placename} />
                </>
            )}

            {/* Open Graph */}
            {seoConfig.openGraph.enabled && (
                <>
                    <meta property="og:type" content={seoConfig.openGraph.type} />
                    <meta property="og:url" content={seoConfig.openGraph.url} />
                    <meta property="og:site_name" content={seoConfig.openGraph.siteName} />
                    <meta property="og:title" content={seoConfig.openGraph.title} />
                    <meta property="og:description" content={seoConfig.openGraph.description} />
                    <meta property="og:image" content={seoConfig.openGraph.image} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta property="og:locale" content={seoConfig.openGraph.locale} />
                </>
            )}

            {/* Twitter Card */}
            {seoConfig.twitterCard.enabled && (
                <>
                    <meta name="twitter:card" content={seoConfig.twitterCard.card} />
                    <meta name="twitter:site" content={seoConfig.twitterCard.site} />
                    <meta name="twitter:creator" content={seoConfig.twitterCard.creator} />
                    <meta name="twitter:title" content={seoConfig.twitterCard.title} />
                    <meta name="twitter:description" content={seoConfig.twitterCard.description} />
                    <meta name="twitter:image" content={seoConfig.twitterCard.image} />
                </>
            )}

            {/* Restaurant Schema */}
            {restaurantSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(restaurantSchema)}
                </script>
            )}

            {/* Local Business Schema */}
            {localBusinessSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(localBusinessSchema)}
                </script>
            )}

            {/* Breadcrumb Schema */}
            {breadcrumbSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            )}

            {/* Google Analytics */}
            {seoConfig.advanced.analytics.googleAnalytics.enabled && (
                <>
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${seoConfig.advanced.analytics.googleAnalytics.measurementId}`}></script>
                    <script>
                        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${seoConfig.advanced.analytics.googleAnalytics.measurementId}');
            `}
                    </script>
                </>
            )}

            {/* Google Tag Manager */}
            {seoConfig.advanced.analytics.googleTagManager.enabled && (
                <script>
                    {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${seoConfig.advanced.analytics.googleTagManager.containerId}');
          `}
                </script>
            )}
        </Helmet>
    );
}

// HOC to wrap app with Helmet provider
export function withSEO(Component) {
    return function SEOWrappedComponent(props) {
        return (
            <HelmetProvider>
                <SEOHead />
                <Component {...props} />
            </HelmetProvider>
        );
    };
}
