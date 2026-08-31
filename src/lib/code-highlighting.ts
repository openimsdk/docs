import { codeToHtml } from 'shiki';

const codeTheme = {
  light: 'github-dark',
  dark: 'github-dark',
} as const;

/** Render code on the server so custom Markdown uses the same Shiki theme as MDX. */
export async function highlightCode(code: string, language: string) {
  const options = {
    defaultColor: false,
    lang: language || 'text',
    themes: codeTheme,
  } as const;

  try {
    return await codeToHtml(code, options);
  } catch {
    return await codeToHtml(code, { ...options, lang: 'text' });
  }
}
