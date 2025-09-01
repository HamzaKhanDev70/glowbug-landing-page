
import Link from 'next/link';
import Image from 'next/image';
import { FaXTwitter, FaTiktok, FaYoutube, FaInstagram, FaAt } from 'react-icons/fa6';

const companyLinks = [
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
];

const contactInfo = [
  { name: 'hello@dreamstream.com', href: 'mailto:hello@dreamstream.com' },
  { name: 'support@dreamstream.com', href: 'mailto:support@dreamstream.com' },
];

const siteLinks = [
  { name: "WHAT IS", href:"/"  },
  { name: "WHERE IS", href:"/#where-is"  },
  { name: "WHAT WE OFFER", href: "/#what-we-offer" },
  { name: "HOW IT WORKS?", href: "/#how-it-works" },
  { name: "KNOW US", href: "/#know-us" },
  { name: "FIND US", href: "/#find-us" },
];

const socialLinks = [
  { icon: <FaXTwitter />, href: '#' },
  { icon: <FaTiktok />, href: '#' },
  { icon: <FaYoutube />, href: '#' },
  { icon: <FaAt />, href: '#' },
  { icon: <FaInstagram />, href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white w-full  py-10 mt-14"  id="footer">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 text-center md:text-left" >
          <div className="lg:col-span-1">
            <h3 className="lg:heading-s mb-4 font-inter font-bold">Site Links</h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="body-normal transition-colors hover:text-[#FDE200]">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="lg:heading-s mb-4 font-inter font-bold">Company</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="body-normal transition-colors hover:text-gray-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="lg:heading-s  font-inter font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              {contactInfo.map((contact) => (
                <li key={contact.name}>
                  <Link href={contact.href} className="body-normal transition-colors hover:text-gray-300">
                    {contact.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start lg:col-span-2 lg:justify-self-end">
            <h3 className="lg:heading-s mb-4 font-inter font-bold">Download Now</h3>
            <div className="flex flex-col items-center body-normal gap-4">
              <Link href="#">
                <Image src="/images/playStore.png" alt="Get it on Google Play" width={135} height={40} />
              </Link>
              <Link href="#">
                <Image src="/images/appStore.png" alt="Download on the App Store" width={135} height={40} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col-reverse md:flex-row justify-between items-center">
          <p className="body-normal mt-4 md:mt-0">
            &copy;2025 DreamStream
          </p>
           <div className="flex space-x-4 items-center">
            <Link href="https://x.com/Dream_Stream_23" target="_blank">
              <Image
                src="/images/Vector.png"
                alt="X"
                width={18}
                height={16}
                className="hover:brightness-125 transition"
              />
            </Link>
            <Link href="https://www.tiktok.com/@dreamstream_magic" target="_blank">
              <Image
                src="/images/fi_3046120.png"
                alt="TikTok"
                width={18}
                height={16}
                className="hover:brightness-125 transition"
              />
            </Link>
            {/* <Link href="https://youtube.com" target="_blank">
              <Image
                src="/images/utube.png"
                alt="YouTube"
                 width={18}
                height={16}
                className="hover:brightness-125 transition"
              />
            </Link> */}
            <Link href="https://www.threads.net" target="_blank">
              <Image
                src="/images/thread.png"
                alt="Threads"
                  width={18}
                height={16}
                className="hover:brightness-125 transition"
              />
            </Link>
            <Link href="https://www.instagram.com/dreamstream_magic_in_motion/" target="_blank">
              <Image
                src="/images/Group 60.png"
                alt="Instagram"
                  width={18}
                height={16}
                className="hover:brightness-125 transition"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 