/**
 * Renders structured data as a JSON-LD script tag.
 * SSR-safe: the object is serialised verbatim at render time.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
