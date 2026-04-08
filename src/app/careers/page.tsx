import Careers from "@/components/sections/Careers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Nanozenix Technologies",
};

export default function CareersPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen">
      <Careers />
    </main>
  );
}
