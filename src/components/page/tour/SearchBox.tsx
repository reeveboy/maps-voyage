export default function SearchBox() {
  return (
    <div className="my-8 px-4">
      <div className="flex flex-col bg-white p-8">
        <p className="text-3xl font-light text-dark">Search Tours</p>
        <form className="flex flex-col font-light">
          <input
            className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
            type="text"
            placeholder="Where to"
          />
          <input
            className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
            type="text"
            placeholder="Type"
          />
          <button className="mt-2 bg-primary px-12 py-3 text-lg text-light shadow-md">
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
}
