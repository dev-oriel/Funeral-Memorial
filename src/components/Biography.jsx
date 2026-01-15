import React from "react";

const Biography = () => {
  return (
    <section
      className="py-16 md:py-24 border-b border-primary/10 px-4 md:px-6"
      id="biography"
    >
      <div className="max-w-[1200px] mx-auto">
        <h2 className="serif-text text-3xl md:text-4xl font-bold mb-12 md:mb-16 text-center">
          A Journey of Purpose
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column: Timeline */}
          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_4px_rgba(173,157,118,0.2)]"></div>
              <h3 className="text-xl font-bold mb-3 text-warm-gray dark:text-white">
                Early Life & Roots
              </h3>
              <p className="text-warm-gray/80 dark:text-gray-400 leading-relaxed text-base">
                Born in 1945 at Koma Village, Tenwek, Zakayo was the son of the
                late Simion Kipkosgei Lokyi and Zilpha Cherono Lokyi. As the 3rd
                born in a disciplined family, he grew up herding, hunting, and
                grinding millet—instilling in him the values of hard work and
                resilience that would define his future.
              </p>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_4px_rgba(173,157,118,0.2)]"></div>
              <h3 className="text-xl font-bold mb-3 text-warm-gray dark:text-white">
                Education & Service
              </h3>
              <p className="text-warm-gray/80 dark:text-gray-400 leading-relaxed text-base">
                An alumnus of Tenwek High School (1966) and Eregi Teachers
                Training College (1977). He served with dedication at Muiywek,
                Motigo, Njerian, Aisaik, and Chepngaina primary schools, rising
                to become a TAC Tutor and APSI before retiring in 2000.
              </p>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_4px_rgba(173,157,118,0.2)]"></div>
              <h3 className="text-xl font-bold mb-3 text-warm-gray dark:text-white">
                Family Life
              </h3>
              <p className="text-warm-gray/80 dark:text-gray-400 leading-relaxed text-base">
                Married to Emily Chelangat on May 5, 1984. They were blessed
                with six children: Renson, Eng. Davis, Dennis, Doreen, Mike, and
                Allan. He was a proud grandfather to Gerald, Sharlyne, Neville,
                Brianne, Chepkoech, Dan, Isaac, Blessing, Talisha, and Faith.
              </p>
            </div>
          </div>

          {/* Right Column: Achievements Cards */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Musician Card */}
            <div className="bg-primary/5 p-6 md:p-8 rounded-2xl border border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white dark:bg-primary/20 p-3 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    music_note
                  </span>
                </div>
                <h3 className="serif-text text-xl md:text-2xl font-bold">
                  The Musician
                </h3>
              </div>
              <p className="text-warm-gray/80 dark:text-gray-400 mb-4 leading-relaxed text-sm md:text-base">
                A master of the accordion, Zakayo was a composer of the iconic
                patriotic song <strong>"Tawala Kenya"</strong>. His musical
                talent earned him recognition from President Daniel arap Moi. He
                used his talent to organize choirs and support institutions like
                Ndarawetta Girls School.
              </p>
            </div>

            {/* Leadership Card */}
            <div className="bg-white dark:bg-background-dark p-6 md:p-8 rounded-2xl border border-primary/20 shadow-sm grow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-full shrink-0">
                  <span className="material-symbols-outlined text-primary text-2xl">
                    handshake
                  </span>
                </div>
                <h3 className="serif-text text-xl md:text-2xl font-bold">
                  Community Leader
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Championed Silibwet Stadium & Sot TTI",
                  "Former KANU Secretary (Bomet District)",
                  "Myoot Council of Elders Member",
                  "Active Member of AGC Tenwek & Kaptilolwo",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm md:text-base text-warm-gray/80 dark:text-gray-300"
                  >
                    <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Biography;
