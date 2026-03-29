export default function BentoSection() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto space-y-10 md:space-y-0">
      <div className="text-center mb-10 md:mb-16 space-y-3 md:space-y-0">
        <span className="text-secondary font-semibold tracking-widest uppercase text-xs md:text-sm">Votre parcours</span>
        <h2 className="font-headline text-3xl md:text-5xl font-bold mt-0 md:mt-4">Vous vous reconnaissez ?</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Card 1 */}
        <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl hover:shadow-xl transition-all border border-outline-variant/10 flex flex-col items-center text-center space-y-4 md:space-y-0">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-primary-container/20 rounded-full flex items-center justify-center mb-4 md:mb-8">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-primary" style={{ fontVariationSettings: "'FILL' 0" }}>psychology_alt</span>
          </div>
          <h3 className="font-headline text-xl font-bold mb-2 md:mb-4">Vous avez peur de la douleur</h3>
          <p className="text-on-surface-variant mb-6 md:mb-8 leading-relaxed">Nous utilisons des techniques modernes et une approche progressive pour que chaque soin reste confortable.</p>
          <button className="text-secondary font-bold flex items-center gap-2 mt-auto">En savoir plus <span className="material-symbols-outlined text-sm">chevron_right</span></button>
        </div>
        
        {/* Card 2 */}
        <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl hover:shadow-xl transition-all border border-outline-variant/10 flex flex-col items-center text-center space-y-4 md:space-y-0">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-tertiary-container/20 rounded-full flex items-center justify-center mb-4 md:mb-8">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-tertiary" style={{ fontVariationSettings: "'FILL' 0" }}>calendar_month</span>
          </div>
          <h3 className="font-headline text-xl font-bold mb-2 md:mb-4">Pas allé au dentiste depuis des années</h3>
          <p className="text-on-surface-variant mb-6 md:mb-8 leading-relaxed">Peu importe le temps écoulé, notre rôle est de vous accompagner aujourd&apos;hui, sans regard en arrière.</p>
          <button className="text-secondary font-bold flex items-center gap-2 mt-auto">On recommence ensemble <span className="material-symbols-outlined text-sm">chevron_right</span></button>
        </div>
        
        {/* Card 3 */}
        <div className="bg-surface-container-lowest p-8 md:p-10 rounded-xl hover:shadow-xl transition-all border border-outline-variant/10 flex flex-col items-center text-center space-y-4 md:space-y-0">
          <div className="w-16 h-16 md:w-24 md:h-24 bg-secondary-container/20 rounded-full flex items-center justify-center mb-4 md:mb-8">
            <span className="material-symbols-outlined text-3xl md:text-4xl text-secondary" style={{ fontVariationSettings: "'FILL' 0" }}>help_center</span>
          </div>
          <h3 className="font-headline text-xl font-bold mb-2 md:mb-4">Vous ne savez pas par où commencer</h3>
          <p className="text-on-surface-variant mb-6 md:mb-8 leading-relaxed">Le premier rendez-vous est une simple discussion pour faire le point sur vos besoins et vos envies.</p>
          <button className="text-secondary font-bold flex items-center gap-2 mt-auto">Réserver un bilan <span className="material-symbols-outlined text-sm">chevron_right</span></button>
        </div>
      </div>
    </section>
  );
}
