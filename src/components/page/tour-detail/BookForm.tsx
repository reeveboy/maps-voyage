export default function BookForm() {
  return (
    <div className="mb-8 px-4">
      <div className="flex flex-col bg-white p-8">
        <p className="text-3xl font-light text-dark">Book This Tour</p>
        <form className="flex flex-col font-light">
          <input
            className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
            type="text"
            placeholder="Date"
          />
          <input
            className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
            type="text"
            placeholder="Tickets"
          />
          <textarea
            className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
            rows={4}
            placeholder="Your Message"
          />
          <button className="mt-2 bg-primary px-12 py-3 text-lg text-light shadow-md">
            SEARCH
          </button>
        </form>
      </div>
    </div>
  );
}
