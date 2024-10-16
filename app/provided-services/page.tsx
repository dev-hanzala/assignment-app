import Link from "next/link";

export default function ProvidedServices() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-extrabold">Services</h1>
      <Link className="text-xl font-bold p-4 border border-solid border-black rounded-lg mt-4" href="/provided-services/web-dev">Web Development</Link>
    </div>
  );
}
