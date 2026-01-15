import React from "react";

// Helper component for tribute cards
const TributeCard = ({ role, name, quote }) => (
  <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm border border-primary/10 relative h-full flex flex-col">
    <span className="material-symbols-outlined text-primary/30 absolute top-4 right-4 text-4xl">
      format_quote
    </span>
    <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-4">
      From His {role}
    </h4>
    <p className="text-warm-gray/80 dark:text-gray-400 italic mb-6 grow leading-relaxed">
      "{quote}"
    </p>
    {name && (
      <div className="text-sm font-bold mt-auto border-t border-primary/10 pt-4">
        — {name}
      </div>
    )}
  </div>
);

const Tributes = () => {
  return (
    <section className="py-20 px-6 max-w-300 mx-auto" id="tributes">
      <h2 className="serif-text text-3xl font-bold mb-12 text-center">
        Heartfelt Tributes
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TributeCard
          role="Wife"
          name="Emily Chelangat"
          quote="My love, my partner, my best friend. Every moment with you has been a gift. I promise to keep our love alive and raise our children with the same values you instilled in me. Rest in peace, my darling."
        />
        <TributeCard
          role="Sons"
          name="Renson, Davis, Dennis, Mike, Allan"
          quote="Dad, you taught us to be humble, truthful, and firm. Your legacy lives on through us. You'll forever be our north star."
        />
        <TributeCard
          role="Daughter"
          name="Doreen Chepkemoi"
          quote="Daddy, you're my hero and my role model. I'll always cherish the memories we made together, from jokes to heart-to-hearts. You'll always be my safe haven."
        />
        <TributeCard
          role="Grandchildren"
          name="Gerald, Sharlyne, Neville & Family"
          quote="You were a great storyteller, and from your stories, we learnt a lot about life. Everything about you made us smile."
        />
        <TributeCard
          role="Daughters-in-Law"
          name=""
          quote="Dad, you welcomed us into the family with open arms. We will always remember your kindness, generosity, and love."
        />
      </div>
    </section>
  );
};

export default Tributes;
