export default function Contact() {
  return (
    <div>
      <h2 className="text-4xl font-extrabold mb-4">Contact Us</h2>
      <p className="mb-4">Feel free to reach out to us at:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Email: <a href="mailto:info@company.com" className="text-blue-500">info@company.com</a></li>
        <li>Phone: <span className="text-blue-500">+123-456-7890</span></li>
        <li>Address: 1234 Street Name, City, Country</li>
      </ul>
      <p className="mb-4">We look forward to hearing from you!</p>
    </div>
  );
}
