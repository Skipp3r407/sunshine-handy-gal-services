/**
 * The one public address of the live site. Canonical tags, the sitemap, robots.txt,
 * Open Graph tags and the LocalBusiness schema all build their URLs from this.
 * The bare domain (sunshineshandygal.com) redirects here; see next.config.ts.
 */
export const SITE_URL = "https://www.sunshineshandygal.com";

/** Absolute URL on the live site for a path such as "/contact". */
export function absoluteUrl(path = ""): string {
  return `${SITE_URL}${path}`;
}
