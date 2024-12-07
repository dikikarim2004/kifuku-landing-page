import { Coins, Zap, Shield, Share2 } from "lucide-react";

const features = [
  {
    icon: Coins,
    title: "Create Meme Coins",
    description: "Launch your own meme coin in minutes with our intuitive platform",
  },
  {
    icon: Share2,
    title: "Distribute & Trade",
    description: "Seamlessly distribute and trade meme coins with our advanced tools",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience instant transactions with Polygon zkEVM technology",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Built on battle-tested blockchain infrastructure for maximum security",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl font-bold mb-4">Why Choose Kifuku</h2>
          <p className="text-xl text-gray-600">Everything you need to succeed in the meme coin ecosystem</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-accent hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="h-12 w-12 text-secondary mb-6" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};