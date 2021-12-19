export default function Navbar() {
  return (
    <>
      <div className="flex justify-between text-lg bg-gray-800 text-white">
        <div className="m-4 space-x-3">
          <div className="inline-flex mr-5">
            <a href="/">FlorangeCart</a>
          </div>
          <a className="hover:text-teal-500" href="/">
            Home
          </a>
          <a className="hover:text-teal-500" href="/">
            Products
          </a>
          <a className="hover:text-teal-500" href="/">
            Donate
          </a>
          <a className="hover:text-teal-500" href="/">
            Contribute
          </a>
        </div>
        <div className="m-4 text-lg space-x-4">
          <a className="hover:text-teal-500" href="/"><i className="fab fa-instagram"></i></a>
          <a className="hover:text-teal-500" href="/"><i className="fab fa-twitter"></i></a>
          <a className="hover:text-teal-500" href="/"><i className="fab fa-facebook-square"></i></a>
        </div>
      </div>
    </>
  );
}
