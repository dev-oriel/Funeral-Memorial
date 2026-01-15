import React from "react";

const Hymns = () => {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-6 max-w-[800px] mx-auto"
      id="hymns"
    >
      <h2 className="serif-text text-3xl md:text-4xl font-bold mb-10 text-center">
        Hymns of Hope
      </h2>

      <div className="space-y-4 md:space-y-6">
        {/* Hymn 1: Count Your Blessings */}
        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-primary/20 overflow-hidden transition-all shadow-sm open:shadow-md">
          <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-primary/5 select-none list-none">
            <span className="text-lg md:text-xl font-bold text-warm-gray dark:text-gray-100">
              Count Your Blessings
            </span>
            <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">
              expand_more
            </span>
          </summary>
          <div className="p-6 md:p-8 pt-0 serif-text italic text-warm-gray/80 dark:text-gray-300 leading-relaxed text-center bg-background-light dark:bg-background-dark/20 text-base md:text-lg">
            <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <p>
                When upon life's billows you are tempest tossed,
                <br />
                When you are discouraged, thinking all is lost,
                <br />
                Count your many blessings, name them one by one,
                <br />
                And it will surprise you what the Lord hath done.
              </p>

              <p className="font-bold text-primary not-italic bg-primary/5 py-4 rounded-lg">
                Count your blessings, name them one by one;
                <br />
                Count your blessings, see what God hath done;
                <br />
                Count your blessings, name them one by one;
                <br />
                And it will surprise you, what the Lord hath done.
              </p>

              <p>
                Are you ever burdened with a load of care?
                <br />
                Does the cross seem heavy you are called to bear?
                <br />
                Count your many blessings, every doubt will fly,
                <br />
                And you will be singing as the days go by.
              </p>

              <p>
                When you look at others with their lands and gold,
                <br />
                Think that Christ has promised you His wealth untold;
                <br />
                Count your many blessings, money cannot buy
                <br />
                Your reward in Heaven, nor your home on high.
              </p>

              <p>
                So, amid the conflict, whether great or small,
                <br />
                Do not be discouraged, God is over all;
                <br />
                Count your many blessings, angels will attend,
                <br />
                Help and comfort give you to your journey's end.
              </p>
            </div>
          </div>
        </details>

        {/* Hymn 2: Sweet By And By */}
        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-primary/20 overflow-hidden transition-all shadow-sm open:shadow-md">
          <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-primary/5 select-none list-none">
            <span className="text-lg md:text-xl font-bold text-warm-gray dark:text-gray-100">
              Sweet By And By
            </span>
            <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">
              expand_more
            </span>
          </summary>
          <div className="p-6 md:p-8 pt-0 serif-text italic text-warm-gray/80 dark:text-gray-300 leading-relaxed text-center bg-background-light dark:bg-background-dark/20 text-base md:text-lg">
            <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <p>
                There's a land that is fairer than day,
                <br />
                And by faith we can see it afar;
                <br />
                For the Father waits over the way,
                <br />
                To prepare us a dwelling place there.
              </p>

              <p className="font-bold text-primary not-italic bg-primary/5 py-4 rounded-lg">
                In the sweet by and by,
                <br />
                We shall meet on that beautiful shore;
                <br />
                In the sweet by and by,
                <br />
                We shall meet on that beautiful shore.
              </p>

              <p>
                We shall sing on that beautiful shore,
                <br />
                The melodious songs of the blest,
                <br />
                And our spirits shall sorrow no more,
                <br />
                But a sigh for the blessing of rest.
              </p>

              <p>
                To our bountiful father above,
                <br />
                We will offer our tribute of praise,
                <br />
                For the glorious gift of His love,
                <br />
                And the blessings that hallow our days.
              </p>
            </div>
          </div>
        </details>

        {/* Hymn 3: Yetindenyun, Indoi̱ywa */}
        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-primary/20 overflow-hidden transition-all shadow-sm open:shadow-md">
          <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-primary/5 select-none list-none">
            <span className="text-lg md:text-xl font-bold text-warm-gray dark:text-gray-100">
              Yetindenyun, Indoi̱ywa (Hymn 48)
            </span>
            <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">
              expand_more
            </span>
          </summary>
          <div className="p-6 md:p-8 pt-0 serif-text italic text-warm-gray/80 dark:text-gray-300 leading-relaxed text-center bg-background-light dark:bg-background-dark/20 text-base md:text-lg">
            <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <p>
                1. Yetindenyun, indoiywa,
                <br />
                Eng’ oreng’ung’ kotugul .<br />
                A ribot eng’ chamnyeng’ung’,
                <br />
                Amu kibendoti t’wai.
              </p>

              <p className="font-bold text-primary not-italic bg-primary/5 py-4 rounded-lg">
                Ndoiywa, ‘ndoiywa
                <br />
                Ndoiywa, jesu , si mabet
                <br />
                Ndoiywa betusiek tugul.
                <br />
                Si asubun kotugul
              </p>

              <p>
                2. Mwechinin sobondanyu,
                <br />
                Ye kabwa nyalilwogik.
                <br />
                Ma 'ywe-i ye kimi t'wai;
                <br />
                Inye Kamang'unennyu.
              </p>

              <p>
                3. 'Ndo'ywa kot koit betut,
                <br />
                Ne ka'gesgei usisiet,
                <br />
                Ak kibukwa beekab kong',
                <br />
                Eng' olin bo kipsengwet.
              </p>
            </div>
          </div>
        </details>

        {/* Hymn 4: Jesu, I Ruandet Ne Kim */}
        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-primary/20 overflow-hidden transition-all shadow-sm open:shadow-md">
          <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-primary/5 select-none list-none">
            <span className="text-lg md:text-xl font-bold text-warm-gray dark:text-gray-100">
              Jesu, I Ruandet Ne Kim (Hymn 109)
            </span>
            <span className="material-symbols-outlined text-primary group-open:rotate-180 transition-transform duration-300">
              expand_more
            </span>
          </summary>
          <div className="p-6 md:p-8 pt-0 serif-text italic text-warm-gray/80 dark:text-gray-300 leading-relaxed text-center bg-background-light dark:bg-background-dark/20 text-base md:text-lg">
            <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
              <p>
                1. Jesu, I Ruandet ne Kim -<br />
                Inye ne amwechini.
                <br />
                I-ngouna korotik
                <br />
                Che kibun karastang'ung`,
                <br />
                Amu mami or age -<br />
                Korotiguk ichegei.
              </p>

              <p>
                2. Mami kiy ne tos ayai
                <br />
                Si kowong'gei tengekto.
                <br />
                Ama tilei Kiy rirek
                <br />
                Agobo chalwoktanyu.
                <br />
                Mamuchi ayaakta kiy-
                <br />
                Inyege ne isorua.
              </p>

              <p>
                3. Mami kiy ne agonin;
                <br />
                Amang'un Inye kityo.
                <br />
                Ka-anyo ilaaksewa;
                <br />
                Tugena imandang'ung'.
                <br />
                Amwe-u eng' ya-ityo;
                <br />
                Asomin irirena.
              </p>

              <p>
                4. Ye igesgei bandanyu
                <br />
                AK aitu oldang'ung',
                <br />
                Alosun, Yetindennyu,
                <br />
                Amu Ki-irirena.
                <br />
                Jesu, I Ruandet ne Kim
                <br />
                Inye ne amwechini...
              </p>
            </div>
          </div>
        </details>
      </div>
    </section>
  );
};

export default Hymns;
