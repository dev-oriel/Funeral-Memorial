import React from "react";

const TributeCard = ({ role, name, quote }) => (
  <div className="bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl shadow-sm border border-primary/10 relative h-full flex flex-col hover:-translate-y-1 transition-transform duration-300">
    <span className="material-symbols-outlined text-primary/20 absolute top-4 right-4 text-5xl select-none">
      format_quote
    </span>

    <div className="mb-4">
      <h4 className="font-bold text-primary text-xs md:text-sm uppercase tracking-widest inline-block bg-primary/5 px-2 py-1 rounded">
        From His {role}
      </h4>
    </div>

    <p className="text-warm-gray/80 dark:text-gray-300 italic mb-6 grow leading-relaxed font-serif text-base md:text-lg">
      "{quote}"
    </p>

    {name && (
      <div className="text-sm font-bold mt-auto border-t border-primary/10 pt-4 text-warm-gray dark:text-white flex items-center gap-2">
        <span className="w-4 h-px bg-primary"></span>
        {name}
      </div>
    )}
  </div>
);

const Tributes = () => {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-6 max-w-300 mx-auto"
      id="tributes"
    >
      <h2 className="serif-text text-3xl md:text-4xl font-bold mb-12 text-center">
        Heartfelt Tributes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TributeCard
          role="Wife"
          name="Emily Chelangat"
          quote="My love, my partner, my best friend. Every moment with you has been a gift. I promise to keep our love alive and raise our children with the same values you instilled in me."
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
