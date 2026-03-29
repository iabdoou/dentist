export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
      <h2 className="font-headline text-center text-2xl md:text-3xl font-bold mb-10 md:mb-16">Ils nous font confiance</h2>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        
        {/* Review 1 */}
        <div className="bg-surface-container-low p-6 md:p-8 rounded-lg md:rounded-lg rounded-tl-xl rounded-tr-xl rounded-br-xl md:rounded-br-lg md:rounded-tr-lg md:rounded-tl-lg flex-1 max-w-[85%] md:max-w-none self-start md:self-auto border border-outline-variant/5">
          <div className="hidden md:flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center font-bold text-secondary text-xs">SL</div>
            <span className="font-bold">Sarah L.</span>
          </div>
          <p className="italic text-on-surface-variant leading-relaxed">
            &quot;Je n&apos;étais pas allée chez le dentiste depuis 5 ans à cause d&apos;une mauvaise expérience. Ici, j&apos;ai été écoutée et soignée sans aucune douleur. Merci pour votre patience !&quot;
          </p>
          <div className="mt-4 font-bold text-sm text-primary md:hidden">— Sarah L.</div>
        </div>
        
        {/* Review 2 */}
        <div className="bg-primary/10 md:bg-surface-container-low p-6 md:p-8 rounded-lg rounded-tl-xl rounded-tr-xl rounded-bl-xl flex-1 max-w-[85%] md:max-w-none ml-auto md:ml-0 text-right md:text-left md:mt-8 border border-outline-variant/5 text-primary md:text-on-surface">
          <div className="hidden md:flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xs">KM</div>
            <span className="font-bold">Karim M.</span>
          </div>
          <p className="italic text-on-surface-variant md:text-on-surface-variant leading-relaxed">
            &quot;Le cabinet ressemble plus à un spa qu&apos;à un cabinet dentaire. On s&apos;y sent tout de suite bien. Mes enfants demandent même quand est le prochain rendez-vous !&quot;
          </p>
          <div className="mt-4 font-bold text-sm text-primary md:hidden">— Karim M.</div>
        </div>
        
        {/* Review 3 - Desktop specific, mobile hidden to keep concise or shown based on view */}
        <div className="bg-surface-container-low p-6 md:p-8 rounded-lg rounded-tl-xl rounded-tr-xl rounded-br-xl flex-1 max-w-[85%] md:max-w-none self-start border border-outline-variant/5 md:block">
          <div className="hidden md:flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-tertiary/20 flex items-center justify-center font-bold text-tertiary text-xs">ND</div>
            <span className="font-bold">Nadia D.</span>
          </div>
          <p className="italic text-on-surface-variant leading-relaxed">
            &quot;Une équipe vraiment à l&apos;écoute. Ils prennent le temps de tout expliquer avec des mots simples. Je recommande à 100% pour les anxieux.&quot;
          </p>
          <div className="mt-4 font-bold text-sm text-primary md:hidden">— Nadia D.</div>
        </div>
        
      </div>
    </section>
  );
}
