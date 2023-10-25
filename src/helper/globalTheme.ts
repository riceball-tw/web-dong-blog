// eslint-disable-next-line import/prefer-default-export
export function isGlobalThemeDark() {
  const isSystemPerferDark = !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isLocalStorageDark = localStorage.theme === 'dark';
  return isLocalStorageDark || isSystemPerferDark;
}
