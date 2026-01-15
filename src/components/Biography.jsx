import React from "react";

const Biography = () => {
  return (
    <section
      className="py-16 border-b border-primary/10 max-w-300 mx-auto px-6"
      id="biography"
    >
      <h2 className="serif-text text-3xl font-bold mb-12 text-center">
        A Journey of Purpose
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left Column: Timeline */}
        <div className="space-y-12">
          {/* Early Life */}
          <div className="relative pl-8 border-l-2 border-primary/20">
            <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="text-xl font-bold mb-3">Early Life & Roots</h3>
            <p className="text-warm-gray/80 dark:text-gray-400 leading-relaxed">
              Born in 1945 at Koma Village, Tenwek, Zakayo was the son of the
              late Simion Kipkosgei Lokyi and Zilpha Cherono Lokyi. The 3rd born
              in a disciplined family, he grew up herding, hunting, and grinding
              millet—instilling in him the values of hard work and resilience.
            </p>
          </div>

          {/* Education & Career */}
          <div className="relative pl-8 border-l-2 border-primary/20">
            <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="text-xl font-bold mb-3">Education & Service</h3>
            <p className="text-warm-gray/80 dark:text-gray-400 leading-relaxed">
              An alumnus of Tenwek High School (1966) and Eregi Teachers
              Training College (1977), he dedicated his life to education. He
              taught at Muiywek, Motigo, Njerian, Aisaik, and Chepngaina primary
              schools, rising to become a TAC Tutor and APSI before retiring in
              2000.
            </p>
          </div>

          {/* Family */}
          <div className="relative pl-8 border-l-2 border-primary/20">
            <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <h3 className="text-xl font-bold mb-3">Family Life</h3>
            <p className="text-warm-gray/80 dark:text-gray-400 leading-relaxed">
              Married to Emily Chelangat on May 5, 1984, they were blessed with
              six children: Renson, Eng. Davis, Dennis, Doreen, Mike, and Allan.
              He was a proud grandfather to Gerald, Sharlyne, Neville, Brianne,
              Chepkoech, Dan, Isaac, Blessing, Talisha, and Faith.
            </p>
          </div>
        </div>

        {/* Right Column: Achievements Cards */}
        <div className="space-y-8">
          {/* Musician Card */}
          <div className="bg-primary/5 p-8 rounded-xl border border-primary/20">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">
                music_note
              </span>
              <h3 className="serif-text text-2xl font-bold">The Musician</h3>
            </div>
            <p className="text-warm-gray/80 dark:text-gray-400 mb-4 leading-relaxed">
              A master of the accordion, Zakayo was a composer of the iconic
              patriotic song <strong>"Tawala Kenya"</strong>. His musical talent
              earned him recognition from President Daniel arap Moi. He used his
              talent to organize choirs and support institutions like Ndarawetta
              Girls School.
            </p>
          </div>

          {/* Leadership Card */}
          <div className="bg-white dark:bg-background-dark p-8 rounded-xl border border-primary/20 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="material-symbols-outlined text-primary text-3xl">
                handshake
              </span>
              <h3 className="serif-text text-2xl font-bold">
                Community Leader
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                "Championed Silibwet Stadium & Sot TTI",
                "Former KANU Secretary (Bomet District)",
                "Myoot Council of Elders Member",
                "Active Member of AGC Tenwek & Kaptilolwo",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm text-warm-gray/80 dark:text-gray-300"
                >
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
