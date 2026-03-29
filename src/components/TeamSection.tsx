export default function TeamSection() {
  return (
    <section className="bg-surface-container-high py-20 md:py-24 px-6 md:px-0 rounded-t-xl md:rounded-none">
      <div className="max-w-7xl mx-auto md:px-8">
        <div className="mb-12 md:mb-16 space-y-4 text-left md:text-left">
          <h2 className="font-headline text-3xl md:text-4xl font-bold leading-tight">Nos visages bienveillants</h2>
          <p className="text-on-surface-variant text-base md:text-lg">Une équipe passionnée qui met l&apos;humain avant la technique.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Member 1 */}
          <div className="group">
            <div className="rounded-xl overflow-hidden aspect-square mb-6 relative border-8 md:border-0 border-surface-container-lowest md:border-none">
              <img 
                className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-500" 
                alt="Portrait d'Amira"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAROb_EtUVHahBqU3lCKqk28XlfKpamleiv5flCaILrBk1UZNBAijdTJhnCek3Enix5kyNUx5MGFwa_5kcpdwNP-Q_Ldo7xiK6DwwjdRcswoEb2rNoDC2pgWFHLzuBN5U7kw0FyIGCQwzrP0UutHJTCo1DUAmiLqaZ6xZEgVayOpuFxWGxnQkKGbyn_L2qEAUMKxiFlXFLY5aQHZlJ0fNIWn93rQXPNdb9fYXlxulkbZS8kvDUegpoN5J0eMFiPnzWQKiD6Ll77ggA"
              />
            </div>
            <div className="bg-surface-container-lowest md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-sm md:shadow-none relative z-10 -mt-12 mx-4 md:mt-0 md:mx-0">
              <span className="material-symbols-outlined text-primary mb-2 md:hidden">format_quote</span>
              <h3 className="font-headline text-2xl md:text-3xl font-bold hidden md:block">Amira</h3>
              <p className="text-secondary md:font-medium mb-4 italic text-lg md:text-base leading-relaxed">&quot;J’adore voir mes patients repartir avec le sourire.&quot;</p>
              <p className="font-bold text-primary md:hidden">— Dr. Amira, Fondatrice</p>
            </div>
          </div>
          
          {/* Member 2 */}
          <div className="group lg:mt-12">
            <div className="rounded-xl overflow-hidden aspect-square mb-6 relative">
              <img 
                className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-500" 
                alt="Portrait de Sofiane"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnuLV5PvJunD2e4SxPDEPDE07wB7qnG9zBzVe78kBm_drVlCdz5nX9AtyftlU8WKiSNCxXmu2t4mFA0ug2ZZB_NS4HDmqpnyi_xiEBIPG49bIUHhUcQx6k0HwTHo3tlyTOhAhTMElcIwGMRDTlI4KyB_VKiyxU8UKx_YF727twh03qSZ6tEPVkxOJPn3vPa6zGnZit58a-FOHlW0viGk75PQ30Umbgg6CTM8u1P4mATFjZbTMt01kcScyWOI0n9A5STQ5h1RhhVUA"
              />
            </div>
            <div className="px-4 md:px-0">
              <h3 className="font-headline text-3xl font-bold hidden md:block">Sofiane</h3>
              <p className="text-secondary font-medium mb-4 italic text-lg md:text-base">&quot;Prendre le temps d&apos;écouter, c&apos;est déjà la moitié du soin.&quot;</p>
              <p className="font-bold text-primary md:hidden">— Dr. Sofiane</p>
            </div>
          </div>
          
          {/* Member 3 */}
          <div className="group">
            <div className="rounded-xl overflow-hidden aspect-square mb-6 relative">
              <img 
                className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-500" 
                alt="Portrait de Yasmine"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1DZuegj43h5baqry4KnFlUM4WpQL_ml9Z8EzlxzdMyyG7IoXf2yKwB_MXbNWTyAyN47E9Oj4lUc9GMzW_ClKIMM1-iVyLcTshJRL6KH-_o4ijEwRhAXvu0u_-TJ8AZ6Y2mA6v2WXqqaPRVIprmOFOjj7V5_4aNsU74_szEXGDt5o1cAPTNlPxKhWsQhiGH9KOV3Kg8syL_0YgkiqclqfebqIWzKo-883uoscwVAbv_JLTi75n7T1wyfXkNEZxPf68rObkb9r8zMc"
              />
            </div>
            <div className="px-4 md:px-0">
              <h3 className="font-headline text-3xl font-bold hidden md:block">Yasmine</h3>
              <p className="text-secondary font-medium mb-4 italic text-lg md:text-base">&quot;Je suis là pour vous rassurer dès votre arrivée au cabinet.&quot;</p>
              <p className="font-bold text-primary md:hidden">— Yasmine, Réceptionniste</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
