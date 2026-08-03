export function localizedContentFile(contentFile) {
  const sourcePrefix = 'content/docs/';
  if (!contentFile.startsWith(sourcePrefix)) {
    throw new Error(`Unsupported Chat content file: ${contentFile}`);
  }
  return `content/zh/docs/${contentFile.slice(sourcePrefix.length)}`;
}

export function localizedContentFileCandidates(contentFile) {
  const primary = localizedContentFile(contentFile);
  if (!contentFile.startsWith('content/docs/chat/platform-api/')) return [primary];
  return [
    primary,
    primary.replace('content/zh/docs/chat/platform-api/', 'content/zh/docs/chat/platform-api/v3/'),
  ];
}

export function isChatDocumentationPath(path) {
  return (
    path === '/sdk' ||
    path.startsWith('/sdk/') ||
    path === '/platform-api' ||
    path.startsWith('/platform-api/')
  );
}
