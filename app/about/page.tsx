import Image from "next/image";
import Boundary from "../components/Boundry";
import Breadcrumb from "../components/BreadCrumb";
import BenefitCard from "../components/about/BenefitCard";

export default function About() {
  return (
    <div>
      <Breadcrumb title="About Us" />
      <div className="w-full p-[100px] flex gap-4 history">
        <div className="w-1/2 flex flex-col gap-4 pr-[50px] hl">
          <Boundary>
            <h2 className="text-[2.2rem] leading-[2.8rem]  section-heading">
              Green Dwarf Hosting: Our Story
            </h2>
          </Boundary>
          <p className="">
            Green Dwarf Hosting started with a simple mission — to make web
            hosting faster, greener, and more accessible to everyone. What began
            as a two-person team working out of a small home office has grown
            into a full-scale hosting provider serving thousands of websites
            across the globe. From day one, we’ve prioritized performance and
            sustainability. Unlike traditional hosting companies, we power our
            data centers with 100% renewable energy and continually invest in
            eco-friendly infrastructure.
          </p>
          <p>
            This commitment to the planet earned us the name “Green Dwarf” —
            small in carbon footprint, big in performance. Over the years, we’ve
            expanded our services from shared and VPS hosting to fully managed
            cloud solutions tailored for developers, creators, and businesses of
            all sizes. With 24/7 expert support, state-of-the-art security, and
            a focus on uptime and speed, Green Dwarf Hosting is now recognized
            as one of the most reliable and responsible hosting providers in the
            industry. As we look to the future, our goal remains the same:
            empower the digital world — one green server at a time.
          </p>
        </div>
        <div className="w-1/2 hr">
          <Image
            src={"/server.webp"}
            alt="server"
            height={100}
            width={100}
            className="w-full rounded-sm"
          />
        </div>
      </div>
      <div
        className="w-full p-[100px] flex flex-col gap-5 items-center justify-center bg-center bg-cover mission"
        style={{ background: 'url("/textured-bg.png")' }}
      >
        <div>
          <Boundary>
            <h2 className="text-[2.2rem] leading-[2.8rem] text-white section-heading">
              Our Mission
            </h2>
          </Boundary>
        </div>
        <p className="text-white text-center w-[70%]">
          At Green Dwarf Hosting, our mission is to deliver high-performance,
          secure, and sustainable web hosting solutions that empower businesses,
          creators, and developers to thrive online — without compromising the
          planet. We strive to lead the hosting industry with innovation,
          transparency, and eco-conscious technology, ensuring every website we
          host runs fast, stays online, and leaves a minimal carbon footprint.
        </p>
      </div>
      <div className="benefits w-full flex flex-col p-[100px] bg-[#EFEEEC]">
        <div className="w-full flex flex-col gap-4 items-center">
          <Boundary>
            <h2 className="text-[2.2rem] leading-[2.8rem]  section-heading">
              Key Benefits of Choosing Us
            </h2>
          </Boundary>
        </div>
        <div className="w-full flex justify-between mt-10 gap-5" >
          <BenefitCard icon="/bolt.svg" title="Blazing Fast Servers" description="We use the latest SSD and NVMe storage combined with cutting-edge server technology to deliver ultra-fast load times and optimal performance for every website. Whether you're running a personal blog or a high-traffic eCommerce store, speed is never compromised." />
          <BenefitCard icon="/padlock.svg" title="Advanced Security " description="Security is at the heart of everything we do. With built-in DDoS protection, regular malware scanning, proactive firewalls, and free SSL certificates, your site is safeguarded against online threats 24/7. We also offer automatic backups to ensure your data is never lost." />
          <BenefitCard icon="/support.svg" title="24/7 Real Human Support" description="Have a question or run into an issue? Our expert support team is available 24/7 via live chat, email, or ticket system. We’re not just fast — we’re helpful, friendly, and obsessed with solving your problems quickly and effectively." />
        </div>
      </div>
    </div>
  );
}
