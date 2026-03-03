import { useState, useEffect } from "react";
import { jazzQuotes } from "@/data/jazzQuotes";

const JazzQuote = () => {
  const [quoteIndex, setQuoteIndex] = useState(() =>
    Math.floor(Math.random() * jazzQuotes.length)
  );
  const [fadeKey, setFadeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % jazzQuotes.length);
      setFadeKey((k) => k + 1);
    }, 3600000); // 1 hour
    return () => clearInterval(interval);
  }, []);

  const quote = jazzQuotes[quoteIndex];

  return (
    <div key={fadeKey} className="animate-quote-fade text-center px-6 max-w-md mx-auto">
      <p className="font-display italic text-foreground/90 text-lg leading-relaxed">
        "{quote.text}"
      </p>
      <p className="font-mono text-xs tracking-[0.25em] uppercase mt-3 text-primary/80">
        — {quote.author}
      </p>
    </div>
  );
};

export default JazzQuote;
