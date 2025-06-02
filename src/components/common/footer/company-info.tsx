import Image from 'next/image';

export default function CompanyInfo() {
  return (
    <div className="mt-[-135px] w-full bg-[#f0f0f0] px-4 pt-[180px] pb-[80px] md:mt-[-90px] md:px-[100px] md:pt-[140px]">
      <div className="flex flex-col">
        <div className="flex flex-col justify-between md:flex-row">
          <div>
            <div className="mb-3 text-3xl font-bold md:mb-6 md:text-4xl">SHOP.CO</div>
            <div className="mb-5 text-[14px] text-[#000]/60 md:mb-9 md:text-[16px]">
              <div>We have clothes that suits your style and</div>
              <div>which you&apos;re proud to wear. From</div>
              <div>women to men.</div>
            </div>
            <div className="flex flex-row gap-3">
              <Image src="/ic_twitter.svg" width={28} height={28} alt="twitter icon" />
              <Image src="/ic_facebook.svg" width={28} height={28} alt="facebook icon" />
              <Image src="/ic_instagram.svg" width={28} height={28} alt="instagram icon" />
              <Image src="/ic_github.svg" width={28} height={28} alt="github icon" />
            </div>
          </div>
          <div className="hidden md:block">
            <ul>
              <li className="mb-6 font-medium">C O M P A N Y</li>
              <li className="mb-4 font-medium text-[#000]/60">About</li>
              <li className="mb-4 font-medium text-[#000]/60">Features</li>
              <li className="mb-4 font-medium text-[#000]/60">Works</li>
              <li className="font-medium text-[#000]/60">Career</li>
            </ul>
          </div>
          <div className="hidden md:block">
            <ul>
              <li className="mb-6 font-medium">H E L P</li>
              <li className="mb-4 font-medium text-[#000]/60">Customer Support</li>
              <li className="mb-4 font-medium text-[#000]/60">Delivery Details</li>
              <li className="mb-4 font-medium text-[#000]/60">Terms & Conditions</li>
              <li className="font-medium text-[#000]/60">Privacy Policy</li>
            </ul>
          </div>
          <div className="hidden md:block">
            <ul>
              <li className="mb-6 font-medium">F A Q</li>
              <li className="mb-4 font-medium text-[#000]/60">Account</li>
              <li className="mb-4 font-medium text-[#000]/60">Orders</li>
              <li className="mb-4 font-medium text-[#000]/60">Payments</li>
              <li className="font-medium text-[#000]/60">Returns</li>
            </ul>
          </div>
          <div className="hidden md:block">
            <ul>
              <li className="mb-6 font-medium">R E S O U R C E S</li>
              <li className="mb-4 font-medium text-[#000]/60">Free eBooks</li>
              <li className="mb-4 font-medium text-[#000]/60">Development Tutorial</li>
              <li className="mb-4 font-medium text-[#000]/60">How to - Blog</li>
              <li className="font-medium text-[#000]/60">YouTube Playlist</li>
            </ul>
          </div>
          <div className="mt-[20px] grid grid-cols-2 md:hidden">
            <div>
              <ul>
                <li className="mb-6 font-medium">C O M P A N Y</li>
                <li className="mb-4 font-medium text-[#000]/60">About</li>
                <li className="mb-4 font-medium text-[#000]/60">Features</li>
                <li className="mb-4 font-medium text-[#000]/60">Works</li>
                <li className="font-medium text-[#000]/60">Career</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-6 font-medium">H E L P</li>
                <li className="mb-4 font-medium text-[#000]/60">Customer Support</li>
                <li className="mb-4 font-medium text-[#000]/60">Delivery Details</li>
                <li className="mb-4 font-medium text-[#000]/60">Terms & Conditions</li>
                <li className="font-medium text-[#000]/60">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-6 font-medium">F A Q</li>
                <li className="mb-4 font-medium text-[#000]/60">Account</li>
                <li className="mb-4 font-medium text-[#000]/60">Orders</li>
                <li className="mb-4 font-medium text-[#000]/60">Payments</li>
                <li className="font-medium text-[#000]/60">Returns</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="mb-6 font-medium">R E S O U R C E S</li>
                <li className="mb-4 font-medium text-[#000]/60">Free eBooks</li>
                <li className="mb-4 font-medium text-[#000]/60">Development Tutorial</li>
                <li className="mb-4 font-medium text-[#000]/60">How to - Blog</li>
                <li className="font-medium text-[#000]/60">YouTube Playlist</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[40px] mb-[20px] h-[1px] w-full bg-[#000]/10 md:mt-[50px]"></div>
      <div className="flex flex-col items-center justify-between md:flex-row md:items-baseline">
        <div className="text-base">Shop.co 2000-2023. All Rights Reserved</div>
        <div className="flex flex-row gap-3">
          <Image width={46} height={30} src="/ic_visa.svg" alt="visa icon" />
          <Image width={46} height={30} src="/ic_master_card.svg" alt="master card icon" />
          <Image width={46} height={30} src="/ic_paypal.svg" alt="paypal icon" />
          <Image width={46} height={30} src="/ic_apple_pay.svg" alt="apple pay icon" />
          <Image width={46} height={30} src="/ic_google_pay.svg" alt="google pay icon" />
        </div>
      </div>
    </div>
  );
}
