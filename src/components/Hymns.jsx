import React from "react";

const Hymns = () => {
  return (
    <section
      className="py-16 md:py-24 px-4 md:px-6 max-w-200 mx-auto"
      id="hymns"
    >
      <h2 className="serif-text text-3xl md:text-4xl font-bold mb-10 text-center">
        Hymns of Hope
      </h2>

      <div className="space-y-4 md:space-y-6">
        {/* Hymn 1 */}
        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-primary/20 overflow-hidden transition-all shadow-sm open:shadow-md">
          <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-primary/5 select-none list-none">
            <span className="text-lg md:text-xl font-bold text-warm-gray dark:text-gray-100">
              Sweet By and By
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
            </div>
          </div>
        </details>

        {/* Hymn 2 */}
        <details className="group bg-white dark:bg-gray-800 rounded-xl border border-primary/20 overflow-hidden transition-all shadow-sm open:shadow-md">
          <summary className="flex items-center justify-between p-5 md:p-6 cursor-pointer hover:bg-primary/5 select-none list-none">
            <span className="text-lg md:text-xl font-bold text-warm-gray dark:text-gray-100">
              Yetindenyun, Indoi̱ywa
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
            </div>
          </div>
        </details>
      </div>
    </section>
  );
};

export default Hymns;
