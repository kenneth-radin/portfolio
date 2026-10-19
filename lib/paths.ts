// Single source of truth for the GitHub Pages sub-path.
// Must match `basePath` in next.config.ts (which imports this).
export const BASE_PATH = "/portfolio";

/** Prefix a public-folder path (e.g. "/pics/x.png") with the base path. */
export const asset = (path: string) => `${BASE_PATH}${path}`;
