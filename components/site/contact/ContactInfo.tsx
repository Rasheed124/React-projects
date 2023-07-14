import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";

type Props = {
  contacts: Contact[];
};

const ContactInfo = ({ contacts }: Props) => {
  return (
    <div>
      {contacts.map((contact) => (
        <section className="py-16 lg:py-20 " key={contact._id}>
          <div className=" max-w-6xl mx-auto  px-5">
            <div className="  px-5 text-center">
              <h4 className="font-migra-light text-[6rem] ">
                {contact.heading}
              </h4>
            </div>
            <div className="self-center mt-10">
              <Link
                className="block hover:transition-colors duration-500 self-center mt-10 "
                id="btn-link"
                href={"/"}
              >
                <div className="flex justify-center items-center gap-3 text-lg font-Antonio">
                  <div className="uppercase font-bold">Get in touch</div>
                  <div className="relative btn overflow-x-hidden">
                    <span>
                      <HiArrowNarrowRight className="text-3xl hover:transform hover:-translate-x-full hover:transition-transform hover:duration-500" />
                    </span>
                    <span className="absolute top-0 left-0 transform -translate-x-full transition-transform duration-500">
                      <HiArrowNarrowRight className="text-3xl" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>

            <div className="flex uppercase flex-col lg:flex-row justify-center lg:justify-between items-center mt-16 space-y-3">
              <div>
                <h3 className="text-xl font-bold font-Antonio">
                  {contact.logo}
                </h3>
              </div>
              <div>
                <h3 className="text-xl font-bold font-Antonio">
                  {contact.text}
                </h3>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ContactInfo;
