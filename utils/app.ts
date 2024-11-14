
export function slugify(value: string) {
  // TODO: Match how API performs slugify
  return value.trim().toLowerCase().replaceAll(" ", "-");
}

/**
 * @param start - Send earlier value from Date.now()
 */
export function elapsedSeconds(start: number) {
  let end = Date.now();
  return ((end - start) / 1000).toFixed(2);
}

export const FILE_UPLOAD_WARNING = "Do not upload sensitive or distribution-restricted files.";

