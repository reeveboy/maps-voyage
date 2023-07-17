export default function BookForm() {
  return (
    <div className="">
      <div className="flex flex-col bg-white p-8">
        <p className="mb-2 text-3xl font-light text-dark">Book This Tour</p>
        <form className="flex flex-col gap-2 font-light">
          <input
            className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600"
            type="text"
            placeholder="Phone Number"
          />
          <input
            className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600"
            type="text"
            placeholder="Date"
          />
          <input
            className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600"
            type="text"
            placeholder="Tickets"
          />
          <textarea
            className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600"
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
