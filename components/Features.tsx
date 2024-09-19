import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
const Features = () => {
  return (
    <div className="my-20 pt-10 px-20 w-full flex flex-col items-center justify-center text-center" id="features">
      <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
        <Image
          src="/KeyFeatures.svg"
          width={15}
          height={15}
          alt="versatile icon"
          className="mr-1"
        />
        <div>Key Features</div>
      </div>
      <h1 className="my-6 text-2xl lg:text-4xl">
        {/* Beyond just LGTM-as-a-service */}
        Everything you are looking for
      </h1>
      <div className="grid grid-flow-row gap-4 p-10">
        <div className="grid grid-flow-col gap-4 grid-cols-12">
          <div className="border rounded-lg p-4 col-span-7 bg-gradient-to-br from-[#f8f9fa] to-[#ebedfc]">
            <div className="flex justify-between items-center gap-2">
              <div className="flex flex-col justify-center w-1/3">
                {/* <Image
                  src="/Search.svg"
                  width={35}
                  height={35}
                  alt="learn more icon"
                  className="ml-2 h-4 w-4 border rounded-full"
                /> */}
                <h1 className="text-xl font-semibold">
                  AI-Powered Video Search
                </h1>
                <p className="font-light mt-2">
                  Search millions of videos automatically, no tagging needed.
                </p>
              </div>
              <div className="mt-2 w-2/3">
                <Card className="w-full max-w-2xl mx-auto">
                  <CardHeader>
                    <CardTitle>AI-Powered Video Search</CardTitle>
                    <CardDescription>
                      Search for videos using natural language
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex gap-2 mb-4">
                      <Input
                        type="text"
                        placeholder="Enter your search query..."
                        className="flex-grow"
                      />
                      <Button variant="outline">
                        Search
                        <Image
                          src="/Search.svg"
                          width={25}
                          height={25}
                          alt="learn more icon"
                          className="ml-2 h-4 w-4"
                        />
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-gray-500">
                    Powered by AI technology
                  </CardFooter>
                </Card>
              </div>
            </div>{" "}
          </div>
          <div className="border rounded-lg p-4 col-span-5 brain ">
            <div className="flex items-center ">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <Image
                  src="Brain.svg"
                  width={25}
                  height={25}
                  alt="search icon"
                />
              </div>
              <h1 className="text-xl mr-4 font-semibold">
                Contextual Understanding
              </h1>
            </div>
            <p className="font-light mt-4">
              Search millions of videos automatically, no tagging needed.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-col gap-4">
          <div className="border rounded-lg p-4 ">
            <div className="flex items-center">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <Image
                  src="Search.svg"
                  width={25}
                  height={25}
                  alt="search icon"
                />
              </div>
              <h1 className="text-xl mr-4 font-semibold">Sub-clip Search</h1>
            </div>
            <p className="font-light mt-4">
              Search millions of videos automatically, no tagging needed.
            </p>
            <div className="p-2 bg-light-lavender rounded-xl border mr-4 mt-5 min-h-48 bg-white">
              <Image src="" width={70} height={70} alt="image" />
              <p className="text-gray-300">PlaceHolder for image</p>
            </div>
          </div>
          <div className="border rounded-lg p-4">
            <div className="flex items-center">
              <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
                <Image
                  src="Analytics.svg"
                  width={25}
                  height={25}
                  alt="search icon"
                />
              </div>
              <h1 className="text-xl mr-4 font-semibold">
                Analytics & Reporting
              </h1>
            </div>
            <p className="font-light mt-4">
              Generate detailed reports and insights on your video collection.
            </p>
            <div className="p-2 bg-light-lavender rounded-xl border mr-4 mt-5 min-h-48 bg-white">
              <Image src="" width={70} height={70} alt="image" />
              <p className="text-gray-300">PlaceHolder for image</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;

// import React from "react";
// import Image from "next/image";

// interface FeatureCardProps {
//   icon: string;
//   title: string;
//   description: string;
//   image: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({
//   icon,
//   title,
//   description,
//   image,
// }) => (
//   <div className="flex flex-col justify-center bg-sec-col p-4 border shadow-sm rounded-2xl w-full h-full lg:w-[555px]">
//     <div className="flex items-center">
//       <div className="p-2 bg-light-lavender rounded-2xl border mr-4">
//         <Image src={icon} width={25} height={25} alt={`${title} icon`} />
//       </div>
//       <h1 className="text-xl mr-4">{title}</h1>
//     </div>
//     <p className="text-dark-grey font-light mt-4">{description}</p>
//     <div className="p-2 bg-light-lavender rounded-xl border mr-4 mt-5 min-h-48">
//       <Image src={image} width={70} height={70} alt={`${title} image`} />
//       <p className="text-gray-300">PlaceHolder for image</p>
//     </div>
//   </div>
// );

// const Features = () => {
//   const features = [
//     {
//       icon: "/ai.svg",
//       title: "AI-Powered Video Search",
//       description:
//         "Search millions of videos automatically, no tagging needed.",
//       image: "",
//     },
//     {
//       icon: "/Brain.svg",
//       title: "Contextual Understanding",
//       description:
//         "Understand videos like a human, allowing precise search by description.",
//       image: "",
//     },
//     {
//       icon: "/Search.svg",
//       title: "Sub-clip Search",
//       description: "Find specific video moments, not just full files.",
//       image: "",
//     },
//     {
//       icon: "/Analytics.svg",
//       title: "Analytics & Reporting",
//       description:
//         "Generate detailed reports and insights on your video collection.",
//       image: "",
//     },
//   ];

//   return (
//     <div
//       id="MoreFeatures"
//       className="container mx-auto px-4 my-10 lg:my-32 flex flex-col items-center justify-center"
//     >
//       <div className="w-full lg:w-2/4 flex flex-col items-center justify-center text-center">
//         <div className="flex items-center justify-center bg-sec-col border border-5black rounded-full px-2 py-1">
//           <Image
//             src="/KeyFeatures.svg"
//             width={15}
//             height={15}
//             alt="versatile icon"
//             className="mr-1"
//           />
//           <div>Key Features</div>
//         </div>
//         <h1 className="my-6 text-2xl lg:text-4xl">
//           {/* Beyond just LGTM-as-a-service */}
//           Everything you are looking for
//         </h1>
//         {/* <p className="text-dark-grey font-light">
//           Ellipsis functions as an AI teammate adept at answering questions,
//           crafting release notes, developing features, and resolving build
//           issues.
//         </p> */}
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
//         {features.map((feature, index) => (
//           <FeatureCard
//             key={index}
//             icon={feature.icon}
//             title={feature.title}
//             description={feature.description}
//             image={feature.image}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Features;
