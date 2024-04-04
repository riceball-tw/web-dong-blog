import Editor from '@monaco-editor/react';
import Split from 'react-split';
import { useState, useRef, useEffect } from 'react';
import { useLocalStorage } from 'usehooks-ts';
import ThemeDropdown from '@/components/react/editor/ThemeDropdown';
import { isGlobalThemeDark } from '@/helper/globalTheme.ts';

// eslint-disable-next-line import/prefer-default-export
export function MonacoEditor({ defaultHTML, defaultCSS, defaultJS }) {
  const tabBarHeight = '48px';
  const defaultTheme = isGlobalThemeDark() ? 'vs-dark' : 'vs-light';
  const files = {
    'index.html': {
      name: 'index.html',
      language: 'html',
      value: defaultHTML || '',
    },
    'style.css': {
      name: 'style.css',
      language: 'css',
      value: defaultCSS || '',
    },
    'script.js': {
      name: 'script.js',
      language: 'javascript',
      value: defaultJS || '',
    },
  };
  const [filename, setFilename] = useLocalStorage('filename', 'index.html');
  const [HTML, setHTML] = useLocalStorage('html', files['index.html'].value);
  const [CSS, setCSS] = useLocalStorage('css', files['style.css'].value);
  const [JS, setJS] = useLocalStorage('js', files['script.js'].value);
  const [srcDoc, setSrcDoc] = useState('');
  const editorRef = useRef(null);
  const currentFile = files[filename];
  const [theme, setTheme] = useLocalStorage('editorTheme', defaultTheme);

  useEffect(() => {
    editorRef.current?.focus();
  }, [currentFile.name]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
      <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>HTML 5 Boilerplate</title>
      </head>
        <body>${HTML}</body>
        <style>${CSS}</style>
        <script>${JS}</script>
      </html>
    `);
    }, 250);
    return () => clearTimeout(timeout);
  }, [HTML, CSS, JS]);

  function handleEditorDidMount(editor) {
    editorRef.current = editor;
  }

  function handleEditorChange(input) {
    if (currentFile.language === 'html') setHTML(input);
    if (currentFile.language === 'css') setCSS(input);
    if (currentFile.language === 'javascript') setJS(input);
  }

  function getDefaultValue(language) {
    if (language === 'html') return HTML;
    if (language === 'css') return CSS;
    if (language === 'javascript') return JS;
    throw new Error('Invalid language');
  }

  function handleThemeChange(event) {
    const newTheme = event.target.value;
    setTheme(newTheme);
  }

  return (
    <Split sizes={[40, 60]} className="split">
      <div className="border-r border-secondary/20 dark:border-secondary-light/20">
        <div className="flex justify-between" style={{ height: tabBarHeight }}>
          <div className="flex gap-4">
            {Object.entries(files).map((file) => {
              const property = file[1];
              return (
                <button
                  disabled={currentFile.name === property.name}
                  className={` border-b-4 border-transparent transition hover:opacity-100 ${
                    currentFile.language === property.language
                      ? 'border-primary-800 font-bold opacity-100 dark:border-primary-200'
                      : 'font-normal opacity-60'
                  }`}
                  onClick={() => {
                    setFilename(property.name);
                  }}
                  key={property.name}
                >
                  {property.name}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-4">
            <ThemeDropdown handleThemeChange={handleThemeChange} defaultTheme={theme} />
          </div>
        </div>
        <Editor
          className="mb-4 overflow-hidden rounded"
          onMount={handleEditorDidMount}
          height={`calc(100vh - var(--mainNav-height) - ${tabBarHeight})`}
          width="100%"
          theme={theme}
          path={currentFile.name}
          defaultLanguage={currentFile.language}
          value={getDefaultValue(currentFile.language)}
          onChange={handleEditorChange}
          options={{ fontSize: '16px' }}
        />
      </div>
      <div className="flex items-center justify-center border-l border-secondary/20 dark:border-secondary-light/20">
        <div className="h-full w-full bg-white">
          <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts allow-forms" width="100%" height="100%" />
        </div>
      </div>
    </Split>
  );
}
