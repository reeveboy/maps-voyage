export default function Form() {
  return (
    <form className="flex flex-col bg-white p-4">
      <p className="text-5xl leading-[90%] text-dark">
        Have any Question? Feel free to contact with us.
      </p>
      <input
        className="mt-4 bg-slate-200 px-7 py-5 text-lg text-dark"
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
        placeholder="Subject"
      />
      <textarea
        className="mt-2 bg-slate-200 px-7 py-5 text-lg text-dark"
        rows={4}
        placeholder="Your Message"
      />
      <button className="mt-2 bg-primary px-12 py-3 text-lg text-light shadow-md">
        Send Message
      </button>
    </form>
  );
}
