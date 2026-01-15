import React from "react";

const ProgramItem = ({ time, title, desc }) => (
  <div className="relative pl-8 md:pl-10">
    <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-white dark:bg-background-dark border-2 border-primary flex items-center justify-center z-10">
      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
    </div>
    <span className="text-xs font-bold text-primary block mb-1 uppercase tracking-wider">
      {time}
    </span>
    <h4 className="font-bold text-warm-gray dark:text-gray-100 text-base md:text-lg leading-tight mb-1">
      {title}
    </h4>
    <p className="text-sm text-warm-gray/60 dark:text-gray-400 leading-normal">
      {desc}
    </p>
  </div>
);

const Program = () => {
  return (
    <section
      className="py-16 md:py-24 bg-primary/5 dark:bg-background-dark/50"
      id="program"
    >
      <div className="max-w-250 mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif-text text-3xl md:text-4xl font-bold mb-4">
            Funeral Program
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto rounded-full opacity-60"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Day 1 Card */}
          <div className="bg-white dark:bg-gray-900/80 p-6 md:p-8 rounded-2xl shadow-sm border border-primary/10 hover:border-primary/30 transition-colors">
            <h3 className="text-primary font-bold text-lg mb-8 uppercase tracking-widest flex items-center gap-3 border-b border-primary/10 pb-4">
              <span className="material-symbols-outlined">calendar_today</span>{" "}
              Thu, Jan 15th
            </h3>
            <div className="space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-2.25 top-2 bottom-2 w-0.5 bg-primary/20"></div>

              <ProgramItem
                time="10:00 AM"
                title="Assembly"
                desc="Family assembles at home"
              />
              <ProgramItem
                time="11:30 AM"
                title="Tenwek Hospital"
                desc="Assembly at Tenwek Morgue"
              />
              <ProgramItem
                time="12:00 PM"
                title="Viewing & Prayers"
                desc="Removal of body and short service"
              />
              <ProgramItem
                time="2:00 PM"
                title="Arrival at Home"
                desc="Reception of body, Prayers, and Speeches"
              />
            </div>
          </div>

          {/* Day 2 Card */}
          <div className="bg-white dark:bg-gray-900/80 p-6 md:p-8 rounded-2xl shadow-sm border border-primary/10 hover:border-primary/30 transition-colors">
            <h3 className="text-primary font-bold text-lg mb-8 uppercase tracking-widest flex items-center gap-3 border-b border-primary/10 pb-4">
              <span className="material-symbols-outlined">event_available</span>{" "}
              Fri, Jan 16th
            </h3>
            <div className="space-y-8 relative">
              {/* Vertical Line */}
              <div className="absolute left-2.25 top-2 bottom-2 w-0.5 bg-primary/20"></div>

              <ProgramItem
                time="9:00 AM"
                title="Family Prayers"
                desc="Private family gathering"
              />
              <ProgramItem
                time="11:00 AM"
                title="Funeral Service"
                desc="Opening Hymn, Eulogy, Tributes (Family, Church, Leaders)"
              />
              <ProgramItem
                time="4:00 PM"
                title="Procession"
                desc="Movement to graveside"
              />
              <ProgramItem
                time="4:30 PM"
                title="Burial Rites"
                desc="Final blessings and interment"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Program;
