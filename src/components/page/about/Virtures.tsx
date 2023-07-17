import Image from "next/image";
import H3 from "~/components/utility/H3";

export default function Virtures() {
  return (
    <div className="flex flex-col gap-8 p-4 md:p-8">
      <div className="flex flex-col items-center gap-4 md:flex-row">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <p className="h-[4px] w-16 bg-primary"></p>
              <h3 className="ml-2 text-4xl uppercase text-primary">
                Our Vision
              </h3>
            </div>
            <p className="mt-2 text-lg font-light leading-[120%] text-slate-600">
              At the heart of our operations lies a vision to revolutionize the
              travel industry by providing extraordinary adventures at an
              affordable price.
            </p>
            <p className="mt-2 text-lg font-light leading-[120%] text-slate-600">
              We understand that exploring the world shouldn't be limited to a
              privileged few, which is why we strive to make our services
              accessible to everyone.
            </p>
            <p className="mt-2 text-lg font-light leading-[120%] text-slate-600">
              We firmly believe that cost should never compromise the quality of
              service, and we are committed to offering world-class experiences
              that exceed your expectations.
            </p>
          </div>

          <div className="mt-4 flex flex-col">
            <div className="flex items-baseline">
              <p className="h-[4px] w-16 bg-primary"></p>
              <h3 className="ml-2 text-4xl uppercase text-primary">
                Our Commitment
              </h3>
            </div>
            <p className="mt-2 text-lg font-light leading-[120%] text-slate-600">
              Whether it's exploring the untouched beauty of remote islands,
              immersing in the vibrant cultures of local communities, or
              embarking on thrilling adventures in unexplored landscapes, we are
              dedicated to providing you with unique and memorable experiences
              that will stay with you for a lifetime.
            </p>
          </div>
        </div>

        <Image
          className="h-96 w-96 object-cover"
          src="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
          alt="Virtues 1"
          width={464}
          height={464}
        />
      </div>

      <div className="flex flex-col items-center gap-4 md:flex-row-reverse">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <p className="h-[4px] w-16 bg-primary"></p>
              <h3 className="ml-2 text-4xl uppercase text-primary">
                Our Approach
              </h3>
            </div>
            <p className="mt-2 text-lg font-light leading-[120%] text-slate-600">
              We understand that every traveler is unique, with distinct
              preferences and desires. That's why we take a personalized
              approach to crafting your travel itinerary.
            </p>
            <p className="mt-2 text-lg font-light leading-[120%] text-slate-600">
              From selecting the perfect destinations to arranging comfortable
              accommodations and transportation, we handle all the details so
              that you can relax and fully immerse yourself in the magic of your
              voyage.
            </p>
          </div>

          <div className="mt-4 flex flex-col">
            <div className="flex items-baseline">
              <p className="h-[4px] w-16 bg-primary"></p>
              <h3 className="ml-2 text-4xl uppercase text-primary">Our Team</h3>
            </div>
            <p className="mt-2 text-lg font-light leading-[120%] text-slate-600">
              We are a group of passionate travel enthusiasts who share a deep
              love for exploration and a commitment to exceptional service.
            </p>
            <p className="mt-2 text-lg font-light leading-[120%] text-slate-600">
              Our knowledgeable and friendly travel consultants are always
              available to assist you, providing expert guidance and
              recommendations to create the perfect travel experience for you.
            </p>
            <p className="mt-2 text-lg font-light leading-[120%] text-slate-600">
              With their extensive expertise and dedication to customer
              satisfaction, our team ensures that your journey with us is
              seamless, unforgettable, and filled with delightful surprises.
            </p>
          </div>
        </div>

        <Image
          className="h-96 w-96 object-cover"
          src="https://images.unsplash.com/photo-1511298341002-15d91b5d09b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
          alt="Virtues 2"
          width={435}
          height={435}
        />
      </div>
    </div>
  );
}
