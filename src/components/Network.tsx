import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Network = () => {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-secondary/20 text-secondary rounded-full">
            Powered by Polygon zkEVM
          </span>
          <h2 className="text-4xl font-bold mb-6">Built on the Future of Web3</h2>
          <p className="text-xl mb-10 text-gray-300">
            Experience lightning-fast transactions, near-zero fees, and maximum security with Polygon's zkEVM technology.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 rounded-2xl bg-white/5">
              <h3 className="text-2xl font-bold mb-2">100x</h3>
              <p className="text-gray-300">Faster Transactions</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5">
              <h3 className="text-2xl font-bold mb-2">0.001$</h3>
              <p className="text-gray-300">Average Fee</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/5">
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-gray-300">Ethereum Compatible</p>
            </div>
          </div>
          <Button variant="secondary" size="lg">
            Learn More About zkEVM <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};