import { useState } from 'react';
import Fuse from 'fuse.js';

let fuseInstance;
export default function Search() {
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [results, setResults] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');

  function getPosts() {
    setIsLoading(true);
    return fetch('/search.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .catch((err) => console.error(err))
      .finally(setIsLoading(false));
  }

  async function handleInputFocus() {
    setIsSearching(true);
    if (!posts.length) {
      setPosts(await getPosts());
    }
  }

  function handleInputBlur(e) {
    const { currentTarget } = e;

    // Give browser time to focus the next element
    requestAnimationFrame(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setIsSearching(false);
      }
    });
  }

  function handleInputChange(e) {
    fuseInstance = new Fuse(posts, {
      includeScore: true,
      shouldSort: true,
      threshold: 0.5,
      keys: [
        {
          name: 'titleTC',
          weight: 1,
        },
        {
          name: 'title',
          weight: 1,
        },
      ],
    });

    setResults(fuseInstance.search(e.target.value));
  }

  return (
    <div className="relative hidden lg:block">
      <form
        onBlur={handleInputBlur}
        onSubmit={(e) => e.preventDefault()}
        className={`flex items-center gap-3 rounded-3xl border border-primary-900/40 px-4 transition-all dark:border-primary-50/40 ${
          isSearching ? 'rounded-xl rounded-b-none border-b-transparent' : ''
        }`}
      >
        <label htmlFor="search">
          <svg
            style={{ marginTop: '2px' }}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"></path>
          </svg>
          <span className="sr-only">搜尋</span>
        </label>
        <input
          onFocus={handleInputFocus}
          onChange={handleInputChange}
          required
          name="search"
          id="search"
          className="bg-transparent py-2 placeholder-current outline-none"
          type="text"
          max="15"
          placeholder="請輸入您想搜尋的文章……"
          autoComplete="off"
        />

        {isSearching && (
          <div className="absolute bottom-0 left-0 w-full translate-y-full transform-gpu rounded-b-xl border border-t-0 border-primary-900/40 backdrop-blur-xl transition-opacity dark:border-primary-50/40">
            {results.length > 0 ? (
              <ul tabIndex={0} style={{ maxHeight: '300px' }} className="overflow-y-auto">
                {results.map(({ item }) => (
                  <li>
                    <a
                      className="inline-flex w-full gap-4 px-8 py-4 outline-none  hover:bg-black/10 focus:bg-black/10 dark:hover:bg-white/10 dark:focus:bg-white/10"
                      href={`/post/${item.slug}`}
                    >
                      <div
                        style={{ backgroundColor: `${item.themeColor}` }}
                        className="saturate-90 w-1 rounded-full brightness-90"
                      ></div>
                      <div>
                        <div>{item.titleTC}</div>
                        <div className="opacity-60">{item.title}</div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className={`p-4 text-center text-lg ${searchPhrase.length <= 0 ? 'hidden' : ''}`}>沒有找到相關文章</p>
            )}
            <div className="flex flex-col gap-4 px-8 py-4">
              <div className="flex text-center">
                <a
                  className="flex-1 rounded-lg p-8 outline-none hover:bg-white/10 focus:bg-white/10"
                  href="/post/categories"
                >
                  <svg
                    className="mx-auto mb-4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 -960 960 960"
                    width="48"
                  >
                    <path d="m261-526 220-354 220 354H261ZM706-80q-74 0-124-50t-50-124q0-74 50-124t124-50q74 0 124 50t50 124q0 74-50 124T706-80Zm-586-25v-304h304v304H120Zm586.085-35Q754-140 787-173.085q33-33.084 33-81Q820-302 786.916-335q-33.085-33-81.001-33Q658-368 625-334.915q-33 33.084-33 81Q592-206 625.084-173q33.085 33 81.001 33ZM180-165h184v-184H180v184Zm189-421h224L481-767 369-586Zm112 0ZM364-349Zm342 95Z" />
                  </svg>
                  分類
                </a>
                <a className="flex-1 rounded-lg p-8 outline-none hover:bg-white/10 focus:bg-white/10" href="/post/tags">
                  <svg
                    className="mx-auto mb-4"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    height="48"
                    viewBox="0 -960 960 960"
                    width="48"
                  >
                    <path d="M840-480 671-241q-13 18-31 29.5T600-200H180q-24.75 0-42.375-17.625T120-260v-440q0-24.75 17.625-42.375T180-760h420q22 0 40 11.5t31 29.5l169 239Zm-75 0L611-700H180v440h431l154-220Zm-585 0v220-440 220Z" />
                  </svg>
                  標籤
                </a>
              </div>
              {isLoading && <p className="px-4">加載中……</p>}
            </div>
          </div>
        )}
      </form>
    </div>
  );
}
