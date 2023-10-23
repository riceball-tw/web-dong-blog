export default function ThemeDropdown({ handleThemeChange, defaultTheme }) {
  const themeList = ['vs-light', 'vs-dark'];

  return (
    <select className="bg-transparent px-4" onChange={handleThemeChange} defaultValue={defaultTheme}>
      {themeList.map((theme) => (
        <option key={theme} value={theme} className="dark:text-primary-800">
          {theme}
        </option>
      ))}
    </select>
  );
}
