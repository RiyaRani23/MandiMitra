function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-8 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div>
          <h3 className="text-xl font-bold text-green-700">
            MandiMitra
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Sahi Mandi, Sahi Daam.
          </p>
        </div>

        <p className="text-sm text-gray-500">
          © 2026 MandiMitra. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;