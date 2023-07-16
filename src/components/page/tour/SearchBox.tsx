export default function SearchBox() {
  return (
    <div className="mt-8 px-4">
      <div className="flex flex-col bg-white p-8">
        <p className="text-2xl font-light text-dark">Search Tours</p>
        <form className="flex flex-col font-light">
          <input
            className="text-md mt-2 bg-slate-200 px-5 py-3 text-slate-600"
            type="text"
            placeholder="Where to"
          />
          <input
            className="text-md mt-2 bg-slate-200 px-5 py-3 text-slate-600"
            type="text"
            placeholder="Type"
          />
          <button className="text-md mt-2 bg-primary py-3 text-light shadow-md">
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
}
