import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full h-16 bg-cyan-600 text-cyan-50 text-2xl">
			<ul className="flex justify-center list-none p-3 space-x-4">
				<li className="hover:text-cyan-100"><Link href="/">Home</Link></li>
				<li className="hover:text-cyan-100"><Link href="/provided-services">Services</Link></li>
				<li className="hover:text-cyan-100"><Link href="/contact">Contact</Link></li>
				<li className="hover:text-cyan-100"><Link href="/about">About</Link></li>
			</ul>
    </div>
  );
}
