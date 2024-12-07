import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" /> {/* Dark overlay for readability */}
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-secondary/10 text-secondary rounded-full backdrop-blur-sm">
            Powered by Polygon zkEVM
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-white">
            Create & Trade Meme Coins with Ease
          </h1>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            The first all-in-one platform for creating, distributing, and trading meme coins on the fastest and most secure network.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90">
            Get Early Access <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};