import SectionContainer from "../components/Shared/SectionContainer";
import Image from "next/image";
import { pricingData } from "../../utils/PricingData";

const Pricing = () => {
  return (
    <SectionContainer className="mt-10 mb-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {pricingData.map(({ name, price, benefits }, index) => (
        <article
          key={index}
          className={`w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-8 
           ${index === 1 ? "bg-DarkViolet" : "bg-gray-700"}`}
        >
          <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
            {name}
          </h5>
          <header className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">
              {price}
            </span>
            <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
              /month
            </span>
          </header>
          <ul role="list" className="space-y-5 my-7">
            {benefits.map(({ icon, benefit }, index) => (
              <li
                key={index}
                className={`flex items-center ${
                  icon.includes("inactive") &&
                  "line-through decoration-gray-500"
                }`}
              >
                <Image
                  className="flex-shrink-0 w-4 h-4"
                  width={50}
                  height={50}
                  src={icon}
                  alt={benefit}
                />
                <span
                  className="text-base font-normal leading-tight text-gray-500 
                dark:text-gray-400 ms-3"
                >
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
          >
            Choose plan
          </button>
        </article>
      ))}
    </SectionContainer>
  );
};

export default Pricing;
