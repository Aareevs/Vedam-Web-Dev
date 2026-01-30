import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Sponsors } from "@/components/sections/Sponsors";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
    return (
        <div className="flex flex-col gap-0">
            <Hero />
            <Vision />
            <WhatWeDo />
            <Sponsors />
            <Testimonials />
        </div>
    );
}
