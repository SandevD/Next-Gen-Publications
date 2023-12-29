/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon,
  GlobeAltIcon,
  LightningBoltIcon,
  MailIcon,
  ScaleIcon,
} from "@heroicons/react/outline";
import Values from "./Values";

const valuesOne = [
  {
    icon: GlobeAltIcon,
  },
  {
    icon: ScaleIcon,
  },
  {
    icon: LightningBoltIcon,
  },
  {
    icon: LightningBoltIcon,
  },
];
const valuesTwo = [
  {
    icon: AnnotationIcon,
  },
  {
    icon: MailIcon,
  },

  {
    icon: LightningBoltIcon,
  },

  {
    icon: LightningBoltIcon,
  },
];

export default function Mission(data) {
  return (
    <div className="bg-gray-50 overflow-hidden pb-10">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <svg
          className="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
            className="shadow-2xl"
          />
        </svg>

        <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="relative">
            <div
              className="bg-white py-8 px-5 rounded-2xl shadow-2xl bg-cover"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.05)), url(src/assets/img/animatesvg.svg)`,
              }}
            >
              <h3 className="text-md font-bold text-gray-900 tracking-tight sm:text-3xl font-poppins">
                <span className="text-teal-600">THE MISSION</span>,<br />{" "}
                <span className="mx-12">WE ASPIRE TO FULFILL</span>
              </h3>
              <p className="mt-5 text-sm sm:text-md text-gray-500 font-bold uppercase">
                {data.data.aboutUs_mission}
              </p>
            </div>
            <div
              className="bg-white py-8 px-5 rounded-2xl mt-16 bg-cover shadow-2xl"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.05),rgba(0,0,0,0.05)), url(src/assets/img/animatesvg.svg)`,
              }}
            >
              <h3 className="text-md font-bold text-gray-900 tracking-tight sm:text-3xl font-poppins ">
                <span className="text-fuchsia-600">THE VISION</span>,<br />{" "}
                <span className="mx-12">FOR THE NEXT GENERATION</span>
              </h3>
              <p className="mt-5 text-sm sm:text-md text-gray-500 font-bold uppercase">
                {data.data.aboutUs_vission}
              </p>
            </div>
          </div>

          <div className="mt-10 -mx-4 relative lg:mt-0 p-4 " aria-hidden="true">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 translate-y-16 lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={784}
                height={404}
                fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)"
              />
            </svg>
            <img
              className="relative mx-auto shadow-2xl rounded-xl"
              width={490}
              src="src/assets/img/3.png"
              alt=""
            />
          </div>
        </div>

        <svg
          className="hidden lg:block absolute right-full transform translate-x-1/2 translate-y-12"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width={404}
            height={784}
            fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
          />
        </svg>

        <div className="flex flex-col justify-center items-center mt-12 sm:mt-16 lg:mt-24 mb-5">
        </div>
        <Values />
      </div>
    </div>
  );
}
