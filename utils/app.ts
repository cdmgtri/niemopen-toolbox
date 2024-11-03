
export function slugify(value: string) {
  // TODO: Match how API performs slugify
  return value.trim().toLowerCase().replaceAll(" ", "-");
}
