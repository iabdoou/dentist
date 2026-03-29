export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 w-full h-20 bg-background flex md:hidden justify-around items-center px-4 pb-safe z-50 rounded-t-[3rem] border-t border-outline-variant/20 shadow-[0_-4px_40px_rgba(74,101,79,0.04)]">
      <div className="flex flex-col items-center justify-center text-primary bg-surface-container-high rounded-full px-4 py-1 scale-110 transition-all duration-300">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>home</span>
        <span className="font-headline text-[11px] font-medium">Accueil</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary transition-colors">
        <span className="material-symbols-outlined">medical_services</span>
        <span className="font-headline text-[11px] font-medium">Soins</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary transition-colors">
        <span className="material-symbols-outlined">location_on</span>
        <span className="font-headline text-[11px] font-medium">Cabinet</span>
      </div>
      <div className="flex flex-col items-center justify-center text-on-surface-variant hover:text-secondary transition-colors">
        <span className="material-symbols-outlined">call</span>
        <span className="font-headline text-[11px] font-medium">Contact</span>
      </div>
    </nav>
  );
}
