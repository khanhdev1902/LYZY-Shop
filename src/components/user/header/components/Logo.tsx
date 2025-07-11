import { cn } from "@/lib/utils";
interface LogoProps {
  className?: string;
}
export default function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex flex-row gap-2 justify-start items-center cursor-pointer",className)}>
      {/* <img src="/Logo.png" alt="Logo.png" className="size-8" /> */}
    <span className={cn("text-[40px] font-bold text-col")}>ZORO</span>
    </div>
  );
}
