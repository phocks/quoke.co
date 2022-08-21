export function getSlugFromFilePath(filePath: string): string {
    const slug = filePath.match(/[^\\/]+?(?=\.\w+$)/);
    return slug[0];
  }