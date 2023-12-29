import React from "react";
import { ParallaxProvider, ParallaxBanner } from "react-scroll-parallax";
import Phone from "../../assets/img/screen.png";

import bg1 from "../../image/bg-1.jpg";
import bg2 from "../../image/bg-2.png";
import bg3 from "../../image/bg-3.png";
import bg4 from "../../image/bg-4.png";
import bg5 from "../../image/bg-5.png";

import img1 from "../../svg/coming-soon.svg";
import img2 from "../../svg/12.svg";
import img3 from "../../svg/15.svg";

import "../../index.css";
import { Link } from "react-router-dom";

export default function Background() {
  return (
    <main>
      <ParallaxProvider>
        <header>
          <ParallaxBanner
            className="banner"
            layers={[
              {
                image: bg1,
                translateY: [0, 50],
                scale: [1.05, 1, "easeOutCubic"],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
                children: (
                  <div>
                    {" "}
                    <div className="absolute w-full inset-0 flex items-center pb-48 sm:pb-0 md:pb-48 sm:items-start pt-0 sm:pt-48 md:pt-48 lg:pt-8 justify-end md:pr-12 lg:pr-48">
                      <img
                        src={img3}
                        alt="img3"
                        className="w-[200px] h-[200px] lg:w-[250px] lg:h-[200px] sm:mt-4"
                      />
                    </div>
                    <div className="absolute inset-0 flex items-start justify-center pt-24">
                      <h1 className="text-4xl sm:text-6xl md:text-8xl text-white font-bold opacity-80 text-gradient p-4 text-center shine sm:hidden">
                        NextGen Publications
                      </h1>
                    </div>
                  </div>
                ),
              },
              {
                image: bg2,
                translateY: [5, 45],
                scale: [1.05, 1, "easeOutCubic"],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
                children: (
                  <div className="absolute w-full inset-0 flex items-center justify-start pt-8 lg:pt-0">
                    <img
                      src={img2}
                      alt="img2"
                      className="w-[200px] h-[200px] lg:w-[350px] lg:h-[500px]"
                    />
                  </div>
                ),
              },
              {
                image: bg3,
                translateY: [10, 30],
                scale: [1, 1.05, "easeOutCubic"],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
                children: (
                  <div>
                    <div className="absolute inset-0 flex items-center justify-center pb-8 sm:pb-24 pt-5">
                      <div
                        className="p-40 bg-red-00 rounded-3xl"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1280%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='url(%23SvgjsLinearGradient1281)'%3e%3c/rect%3e%3cpath d='M813.955%2c426.923C866.617%2c424.84%2c923.159%2c413.346%2c948.914%2c367.365C974.26%2c322.114%2c953.078%2c269.007%2c927.762%2c223.739C901.606%2c176.969%2c867.335%2c130.742%2c813.955%2c126.04C752.891%2c120.661%2c691.185%2c147.805%2c659.171%2c200.081C625.82%2c254.539%2c623.154%2c326.075%2c659.147%2c378.824C691.79%2c426.664%2c756.084%2c429.212%2c813.955%2c426.923' fill='rgba(143%2c 88%2c 140%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M917.828%2c480.088C937.854%2c480.32%2c957.241%2c470.828%2c967.132%2c453.414C976.913%2c436.193%2c975.604%2c414.394%2c964.425%2c398.046C954.441%2c383.444%2c935.516%2c381.448%2c917.828%2c381.31C899.796%2c381.169%2c879.963%2c382.309%2c869.954%2c397.309C859.05%2c413.65%2c860.629%2c435.288%2c870.464%2c452.294C880.287%2c469.278%2c898.209%2c479.861%2c917.828%2c480.088' fill='rgba(143%2c 88%2c 140%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1299.147%2c92.493C1326.66%2c91.78%2c1352.548%2c78.688%2c1366.388%2c54.899C1380.307%2c30.975%2c1379.872%2c1.432%2c1366.094%2c-22.574C1352.254%2c-46.689%2c1326.88%2c-60.279%2c1299.147%2c-62.258C1266.888%2c-64.56%2c1230.14%2c-61.098%2c1213.32%2c-33.475C1196.07%2c-5.146%2c1206.908%2c31.139%2c1225.584%2c58.549C1241.881%2c82.469%2c1270.213%2c93.243%2c1299.147%2c92.493' fill='rgba(143%2c 88%2c 140%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M1148.64%2c763.693C1197.156%2c763.607%2c1246.918%2c748.136%2c1271.799%2c706.486C1297.23%2c663.916%2c1288.649%2c611.756%2c1265.65%2c567.824C1240.509%2c519.799%2c1202.805%2c473.375%2c1148.64%2c471.227C1091.597%2c468.965%2c1040.94%2c507.331%2c1014.373%2c557.861C989.53%2c605.112%2c995.552%2c662.214%2c1024.718%2c706.926C1051.324%2c747.713%2c1099.943%2c763.78%2c1148.64%2c763.693' fill='rgba(143%2c 88%2c 140%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M252.305%2c508.927C273.568%2c509.465%2c293.699%2c497.856%2c303.876%2c479.179C313.663%2c461.218%2c311.261%2c438.906%2c299.624%2c422.085C289.373%2c407.266%2c270.324%2c404.752%2c252.305%2c404.631C233.988%2c404.508%2c213.915%2c406.123%2c203.871%2c421.441C193.048%2c437.948%2c195.503%2c459.41%2c205.064%2c476.679C214.962%2c494.557%2c231.877%2c508.41%2c252.305%2c508.927' fill='rgba(143%2c 88%2c 140%2c 0.4)' class='triangle-float1'%3e%3c/path%3e%3cpath d='M708.087%2c347.133C748.864%2c345.591%2c782.16%2c318.141%2c802.403%2c282.71C822.464%2c247.599%2c829.063%2c205.099%2c809.44%2c169.741C789.283%2c133.422%2c749.623%2c113.19%2c708.087%2c112.769C665.769%2c112.34%2c625.035%2c131.45%2c603.113%2c167.65C580.402%2c205.153%2c578.416%2c252.497%2c600.551%2c290.343C622.486%2c327.846%2c664.671%2c348.775%2c708.087%2c347.133' fill='rgba(143%2c 88%2c 140%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3cpath d='M208.806%2c342.807C229.935%2c342.686%2c252.384%2c336.612%2c262.528%2c318.077C272.39%2c300.058%2c263.792%2c279.034%2c253.411%2c261.309C243.179%2c243.839%2c229.043%2c226.95%2c208.806%2c226.353C187.748%2c225.731%2c170.145%2c240.416%2c159.394%2c258.533C148.38%2c277.093%2c143.089%2c300.083%2c154.005%2c318.701C164.823%2c337.152%2c187.417%2c342.93%2c208.806%2c342.807' fill='rgba(143%2c 88%2c 140%2c 0.4)' class='triangle-float2'%3e%3c/path%3e%3cpath d='M435.274%2c427.708C450.839%2c427.736%2c465.212%2c419.462%2c473.059%2c406.02C480.972%2c392.465%2c482.146%2c375.241%2c473.581%2c362.088C465.623%2c349.868%2c449.83%2c347.102%2c435.274%2c347.994C422.443%2c348.78%2c411.312%2c355.546%2c404.316%2c366.331C396.519%2c378.351%2c391.268%2c393.094%2c397.72%2c405.886C404.708%2c419.74%2c419.757%2c427.68%2c435.274%2c427.708' fill='rgba(143%2c 88%2c 140%2c 0.4)' class='triangle-float3'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1280'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3clinearGradient x1='15.28%25' y1='-39.29%25' x2='84.72%25' y2='139.29%25' gradientUnits='userSpaceOnUse' id='SvgjsLinearGradient1281'%3e%3cstop stop-color='%230e2a47' offset='0'%3e%3c/stop%3e%3cstop stop-color='rgba(0%2c 73%2c 158%2c 1)' offset='1'%3e%3c/stop%3e%3c/linearGradient%3e%3cstyle%3e %40keyframes float1 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-10px%2c 0)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float1 %7b animation: float1 5s infinite%3b %7d %40keyframes float2 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(-5px%2c -5px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float2 %7b animation: float2 4s infinite%3b %7d %40keyframes float3 %7b 0%25%7btransform: translate(0%2c 0)%7d 50%25%7btransform: translate(0%2c -10px)%7d 100%25%7btransform: translate(0%2c 0)%7d %7d .triangle-float3 %7b animation: float3 6s infinite%3b %7d %3c/style%3e%3c/defs%3e%3c/svg%3e")`,
                          backgroundSize: "cover",
                          opacity: "0.7",
                        }}
                      >
                        <div>
                          <h1 className="text-3xl sm:text-6xl md:text-6xl text-white font-bold opacity-80 text-gradient p-4 text-center shine hidden sm:block mb-10">
                            NextGen Publications
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                image: bg4,
                translateY: [15, 25],
                scale: [1, 1.05, "easeOutCubic"],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
                children: (
                  <div className="absolute inset-0 flex items-center justify-end pt-48 sm:pt-12 md:pt-12">
                    <img
                      src={img1}
                      alt="img1"
                      className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]"
                    />
                  </div>
                ),
              },
              {
                image: bg5,
                translateY: [20, 20],
                scale: [1, 1.1, "easeOutCubic"],
                shouldAlwaysCompleteAnimation: true,
                expanded: false,
              },
              {
                translateY: [25, 30],
                scale: [1, 1.1, "easeOutCubic"],
                children: (
                  <div className="absolute inset-0 flex items-center justify-center pt-12">
                    <h1 className="text-2xl md:text-4xl text-white font-bold font-poppins opacity-80 text-gradient p-2 text-center bounce2 cursor-pointer">
                      <a href="#phoneView">&darr;</a>
                    </h1>
                  </div>
                ),
              },
            ]}
          />
        </header>
      </ParallaxProvider>
    </main>
  );
}
