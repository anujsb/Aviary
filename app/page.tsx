import { BackgroundCellAnimation } from "@/components/BackgroundRippleEffect";
import Features from "@/components/Features";
import { FloatingNavDemo } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <FloatingNavDemo />
      <BackgroundCellAnimation />
      {/* <Video /> */}
      <Features />
    </div>
  );
}
