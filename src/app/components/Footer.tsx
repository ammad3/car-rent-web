export default function Footer() {
  return (
    <footer className="relative bg-white w-[1440px] h-[480px]">
      <div className="container mx-auto px-4 lg:px-0">
        {/* Top Section */}
        <div className="absolute top-20 left-[60px]">
          <h1 className="text-xl font-bold text-blue-500">MORENT</h1>
          <p className="mt-2 text-gray-600 max-w-xs">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex flex-wrap justify-between lg:justify-start lg:space-x-10 w-full lg:w-auto">
          {/* About */}
          <div className="absolute top-20 left-[804px] w-[152px] h-[244px]">
            <h3 className="font-semibold text-black">About</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>How it works</li>
              <li>Featured</li>
              <li>Partnership</li>
              <li>Business Relation</li>
            </ul>
          </div>

          {/* Community */}
          <div className="absolute top-20 left-[1016px] w-[152px] h-[244px]">
            <h3 className="font-semibold text-black">Community</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>Events</li>
              <li>Blog</li>
              <li>Podcast</li>
              <li>Invite a friend</li>
            </ul>
          </div>

          {/* Socials */}
          <div className="absolute top-20 left-[1228px] w-[152px] h-[244px]">
            <h3 className="font-semibold text-black">Socials</h3>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="absolute top-[360px] border-t border-[#13131329] w-[1320px] left-[60px]"></div>
      <p className="text-black absolute top-[396px] left-[60px]">
        ©2022 MORENT. All rights reserved.
      </p>
      <div className="absolute top-[396px] left-[1032px]">
        <a href="#" className="text-black text-sm hover:underline">
          Privacy & Policy
        </a>
      </div>
      <div className="absolute top-[396px] left-[1236px]">
        <a href="#" className="text-black text-sm hover:underline">
          Terms & Condition
        </a>
      </div>
    </footer>
  );
}
