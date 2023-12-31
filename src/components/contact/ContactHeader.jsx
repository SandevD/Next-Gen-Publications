/* This example requires Tailwind CSS v2.0+ */
export default function ContactHeader() {
  return (
    <div className="max-w-7xl mx-auto pb-16 px-4 pt-16 sm:px-6 lg:px-8">
      <div className="relative bg-indigo-800 rounded-3xl shadow-2xl">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover rounded-3xl"
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
            alt=""
          />
          <div
            className="absolute inset-0 bg-indigo-900 mix-blend-multiply rounded-3xl"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sky-500 via-blue-800 opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Contact us right now for any inquiries. Once we recieve your inquiry
            our agents will reach out to you
          </p>
        </div>
      </div>
    </div>
  );
}
