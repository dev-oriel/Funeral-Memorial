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

    <div className="text-warm-gray/80 dark:text-gray-300 italic mb-6 grow leading-relaxed font-serif text-base md:text-lg whitespace-pre-line">
      "{quote}"
    </div>

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
      className="py-16 md:py-24 px-4 md:px-6 max-w-[1200px] mx-auto"
      id="tributes"
    >
      <h2 className="serif-text text-3xl md:text-4xl font-bold mb-12 text-center">
        Heartfelt Tributes
      </h2>

      {/* Grid: 1 col on mobile, 2 on tablet, 3 on desktop. Some cards span 2 rows if needed */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Wife */}
        <div className="md:col-span-2 lg:col-span-2">
          <TributeCard
            role="Wife"
            name="Emily Chelangat"
            quote={`My love, my partner, my best friend. It's hard to put into words what you've meant to me over decades. We've built a life together, raised great sons and a beautiful daughter, and with them we created countless memories together. Every moment with you has been a gift, and I'll always treasure them.

            My husband, I promise to keep our love alive, to raise our children with the same values and love you instilled in me, and to honor your memory every day. Rest in peace, my darling, and know that I'll love you forever. Your legacy lives on through me, our children, and the countless lives you've touched. I'll carry you in my heart always. Rest in peace.`}
          />
        </div>

        {/* Daughter */}
        <TributeCard
          role="Daughter"
          name="Doreen Chepkemoi"
          quote={`Daddy, you're my hero and my role model. Your unwavering support, love, and guidance have shaped me into the person I am today. I'll always cherish the memories we made together, from jokes to heart-to-hearts.
          
          Daddy, I love you more than words can say. You'll always be my rock, my safe haven, and my forever friend. I'll miss you so much, but I'll keep you in my heart forever. Rest in peace, and know that I'll always carry you with me.`}
        />

        {/* Sons */}
        <div className="md:col-span-2 lg:col-span-1">
          <TributeCard
            role="Sons"
            name="Renson, Davis, Dennis, Mike, Allan"
            quote={`Dad, you're deeply missed. Your unwavering guidance and values have left an indelible mark on our lives. You taught us to be humble, truthful, and firm in our decisions, and those lessons will forever shape who we are.
            
            Your strength and resilience inspire us to be better each day. Though you're gone, your impact remains, and we'll continue to draw from the wisdom you imparted. We'll keep your memory alive, Dad, and cherish the moments we shared. Your love and guidance will forever be our north star.`}
          />
        </div>

        {/* Daughters-in-Law */}
        <TributeCard
          role="Daughters-in-Law"
          name="Bevaline Mutai & Faridah Mutai"
          quote={`Dad, you welcomed us into the family with open arms, and we have always felt like part of it. Your love, support, and guidance have meant the world to us.
          
          You raised amazing sons, and we are so proud to be their partners in life. Your values and principles have inspired us. Dad, we will miss you so much, and we will always remember your kindness, generosity, and love. We will do our best to support and love your family just as you would have wanted.`}
        />

        {/* Grandchildren */}
        <TributeCard
          role="Grandchildren"
          name="Gerald, Sharlyne, Neville, Brianne, Chepkoech, Dan, Isaac, Blessing, Talisha, Faith"
          quote={`Grandpa, you're gone but never forgotten. Your love and guidance meant the world to us. You were a great storyteller, and from your stories, we learnt a lot about life. Everything about you made us smile.
          
          Your legacy lives on through us, and we'll make sure to pass it down to the next generation. We’ll miss you so much, Grandpa, but we'll always keep you in our hearts. Bye, our Grandfather.`}
        />
      </div>
    </section>
  );
};

export default Tributes;
