export default function Form() {
  return (
    <form className="grid w-full grid-cols-1 gap-2 px-8 py-16 font-light md:grid-cols-2">
      <p className="mb-2 text-4xl leading-[90%] text-dark md:col-span-2">
        Have any Question? Feel free to contact with us.
      </p>
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
        placeholder="Subject"
      />
      <textarea
        className="text-md w-full bg-slate-200 px-5 py-3 text-slate-600 md:col-span-2"
        rows={5}
        placeholder="Your Message"
      />
      <button className="w-full bg-primary px-12 py-3 text-lg text-light shadow-md">
        Send Message
      </button>
    </form>
  );
}
