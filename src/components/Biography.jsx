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
          {/* Left Column: The Timeline */}
          <div className="space-y-12">
            {/* 1. Early Life */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_4px_rgba(173,157,118,0.2)]"></div>
              <h3 className="text-xl font-bold mb-3 text-warm-gray dark:text-white">
                Early Life & Heritage
              </h3>
              <p className="text-warm-gray/80 dark:text-gray-400 leading-relaxed text-base mb-4">
                Born in 1945 at Koma Village, Tenwek to the late Simion
                Kipkosgei Lokyi and Zilpha Cherono Lokyi. As the 3rd born, he
                grew up herding, hunting, and grinding millet—values that shaped
                his resilience.
              </p>
              <div className="text-sm bg-primary/5 p-4 rounded-lg text-warm-gray/80 dark:text-gray-400">
                <strong className="block text-primary mb-1">
                  Family Ties:
                </strong>
                Loving brother to Mary Chesimet, the late Martha Togom, Mathew
                Kosgei, Winny Kibisach, Rita Mitei, the late Samuel Kosgei, and
                the late Rebecca Chemutai. <br />
                Son-in-law to the late Lazarus and Sarah Seronei of
                Chebungun'gong.
              </div>
            </div>

            {/* 2. Education & Career */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_4px_rgba(173,157,118,0.2)]"></div>
              <h3 className="text-xl font-bold mb-3 text-warm-gray dark:text-white">
                Education & Career
              </h3>
              <p className="text-warm-gray/80 dark:text-gray-400 leading-relaxed text-base mb-4">
                Started at Tenwek Primary (1954), proceeded to Tenwek High
                School (1966), and completed his P1 course at Eregi TTC (1977).
              </p>
              <ul className="list-disc ml-4 space-y-2 text-sm text-warm-gray/70 dark:text-gray-400 marker:text-primary">
                <li>
                  <strong>Teaching Service:</strong> Served at Muiywek, Motigo,
                  Njerian, Aisaik, and Chepngaina.
                </li>
                <li>
                  <strong>Leadership:</strong> Rose to TAC Tutor and APSI before
                  retiring in 2000.
                </li>
                <li>
                  <strong>Subjects:</strong> Passionately taught Music,
                  Gymnastics (PE), English, Math, and History.
                </li>
              </ul>
            </div>

            {/* 3. Marriage & Family */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_4px_rgba(173,157,118,0.2)]"></div>
              <h3 className="text-xl font-bold mb-3 text-warm-gray dark:text-white">
                Family Life
              </h3>
              <p className="text-warm-gray/80 dark:text-gray-400 leading-relaxed text-base mb-4">
                Married Emily Chelangat on May 5, 1984. A devoted father-in-law
                to Bevaline Mutai and Faridah Mutai, and a proud grandfather to
                Gerald, Sharlyne, Neville, Brianne, Chepkoech, Dan, Isaac,
                Blessing, Talisha, and Faith.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-warm-gray/70 dark:text-gray-400">
                <span>• Renson Mutai (Logistics)</span>
                <span>• Eng. Davis Mutai (Bomet County)</span>
                <span>• Dennis Mutai (Social Service)</span>
                <span>• Doreen Chepkemoi (Medic)</span>
                <span>• Mike Mutai (IT)</span>
                <span>• Allan Kiptoo (Student)</span>
              </div>
            </div>

            {/* 4. Christian Life */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_4px_rgba(173,157,118,0.2)]"></div>
              <h3 className="text-xl font-bold mb-3 text-warm-gray dark:text-white">
                Faith & Baptism
              </h3>
              <p className="text-warm-gray/80 dark:text-gray-400 leading-relaxed text-base">
                Baptized at Holy Trinity Church, Kericho in 1984. He was an
                active pillar of the Africa Gospel Church (AGC) in Tenwek and
                later at the Kaptilolwo local church.
              </p>
            </div>

            {/* 5. Health & Final Days */}
            <div className="relative pl-8 border-l-2 border-primary/20">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_0_4px_rgba(173,157,118,0.2)]"></div>
              <h3 className="text-xl font-bold mb-3 text-warm-gray dark:text-white">
                Health & Final Bow
              </h3>
              <p className="text-warm-gray/80 dark:text-gray-400 leading-relaxed text-base">
                Zakayo lived a full, healthy life until 2007 (Diabetes) and
                later hypertension in 2022. Despite brave management, his health
                deteriorated on Jan 5th, 2026. He rested peacefully at AGC
                Tenwek Hospital following cardiopulmonary failure.
              </p>
            </div>
          </div>

          {/* Right Column: Achievements & Legacy Cards */}
          <div className="flex flex-col gap-6 md:gap-8 sticky top-24">
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
                A master of the accordion and choir organizer for Kericho and
                Bomet districts. He is celebrated as a composer of the iconic
                song <strong>"Tawala Kenya"</strong>.
              </p>
              <div className="text-sm border-t border-primary/10 pt-4 mt-4 text-warm-gray/70 dark:text-gray-400">
                <p className="mb-2">
                  <strong>Impact:</strong> Secured a school bus, water pump, and
                  generator for Ndarawetta Girls School through music.
                </p>
                <p>
                  <strong>Recognition:</strong> Personally honored by President
                  Daniel arap Moi at Kabarak with a reward of dairy cows.
                </p>
              </div>
            </div>

            {/* Leadership Card - Expanded */}
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
              <p className="text-sm text-warm-gray/60 dark:text-gray-400 mb-4 italic">
                "An indefatigable spirit with a lasting legacy in development."
              </p>
              <ul className="space-y-3">
                {[
                  "Initiated Silibwet Stadium, Sot TTI & Public Library",
                  "Developed Kaptilolwo Primary (ECD to Polling Station)",
                  "Supported Koma–Tengecha Primary School",
                  "Former KANU Secretary (Bomet District)",
                  "Nominated Councillor & Bomet CDF Secretary",
                  "Member, Myoot Council of Elders",
                  "Chairman for Culture, Bomet County",
                  "PTA Chairman & BOM Member (Tenwek Boarding)",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-sm text-warm-gray/80 dark:text-gray-300"
                  >
                    <span className="material-symbols-outlined text-primary text-lg shrink-0 mt-0.5">
                      verified
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
