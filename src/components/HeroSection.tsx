export default function HeroSection() {
  return (
    <section className="relative px-6 md:px-8 py-12 md:py-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 space-y-8">
          <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl font-extrabold text-on-surface leading-tight tracking-tight">
            Ici, on prend soin de vous — <span className="text-primary italic">vraiment.</span>
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Même si vous n’êtes pas venu chez le dentiste depuis longtemps, vous êtes les bienvenus. Nous redéfinissons l&apos;expérience dentaire par la douceur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-sage-gradient text-white px-10 py-5 rounded-full font-semibold shadow-lg hover:shadow-primary/20 transition-all active:scale-95 w-full sm:w-auto">
                Prendre rendez-vous
            </button>
            <button className="hidden sm:flex px-10 py-5 rounded-full font-semibold text-secondary items-center justify-center gap-2 group hover:bg-surface-container-low transition-colors">
                Découvrir le cabinet
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative w-full aspect-[4/5] lg:aspect-[4/5]">
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-tertiary-fixed-dim/30 rounded-full blur-3xl -z-10 hidden lg:block"></div>
          <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl relative">
            <img 
              alt="Equipe dentaire souriante" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDDQ0zqTrmQLSEV9XIKAQy7oa2mg2FNyOZM_GKY0yM8LVJiLsNwUWyLpEcrSesWOOvyaeSv2PiJi8oUUlTtmalakzAH_akhoxZEVNClacln6sOry5aiViUuaWqSjqZ-spMwSGoVkIZnKuUTaQ7mCjl0t_yB4s-_4Z7IVxG9OHwsaehPcA4U_MILN3Hr-_2UwO4Tbbn-IrbXx6J7qXctAEfAAolYD8VnxNlKGlBYM2aytnsOq-ljyQW9oYq5gGjc406KQHz099StY4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent lg:hidden"></div>
          </div>
          
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-lg shadow-xl max-w-[200px] hidden lg:block z-10">
            <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-1">Bienveillance</p>
            <p className="text-on-surface-variant text-sm italic">&quot;On prend le temps qu&apos;il faut.&quot;</p>
          </div>
        </div>
      </div>
    </section>
  );
}