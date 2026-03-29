export default function TopNavBar() {
  return (
    <>
      {/* Mobile Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-sm shadow-primary/5 flex md:hidden justify-between items-center px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">menu</span>
          <h1 className="text-xl font-bold tracking-tight text-primary font-headline">Dental Expert</h1>
        </div>
        <button className="bg-primary text-on-primary px-4 py-2 rounded-full font-medium text-sm transition-transform active:scale-95">
            Prendre RDV
        </button>
      </header>
      
      {/* Desktop Header */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md shadow-[0_40px_40px_rgba(74,101,79,0.04)] hidden md:block">
        <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
          <div className="text-2xl font-bold text-primary font-headline">Aïn Benian | Dental Expert</div>
          <div className="flex items-center gap-8 font-headline font-medium text-sm tracking-tight">
            <a className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-secondary transition-colors duration-300" href="#">Accueil</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#">Soins</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#">Équipe</a>
            <a className="text-on-surface-variant hover:text-secondary transition-colors duration-300" href="#">Cabinet</a>
          </div>
          <button className="bg-sage-gradient text-white px-8 py-3 rounded-full font-medium hover:scale-95 transition-transform">
            Prendre rendez-vous
          </button>
        </div>
      </nav>
    </>
  );
}