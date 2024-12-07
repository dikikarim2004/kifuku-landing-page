import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-accent">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Revolution?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Be among the first to experience the future of meme coins. Sign up for early access today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};