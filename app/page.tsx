import SearchIconInput from "./Search";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-end">
        <div>
          <SearchIconInput />
        </div>
        <div>
          <p>
            Pure CSS Search Icon Expand <a href="https://github.com/SeanPlusPlus/search-expand-demo/blob/main/app/Search.tsx" target='_blank'>TSX</a> / <a href="https://github.com/SeanPlusPlus/search-expand-demo/blob/main/app/SearchInput.css" target='_blank'>CSS</a>
          </p>
        </div>
      </main>
    </div>
  );
}
