export default function NewPatientOffer() {
  return (
    <section className="px-6 md:px-8 py-24 text-center md:text-center space-y-8 md:space-y-0">
      <div className="max-w-4xl mx-auto md:bg-surface-container-low bg-secondary-fixed md:rounded-xl rounded-xl p-10 md:p-12 md:border-2 border-none border-primary-container/20 space-y-6 md:space-y-0 text-center">
        
        <span className="material-symbols-outlined text-5xl text-primary mb-6 hidden md:inline-block">handshake</span>
        
        <h2 className="font-headline text-2xl md:text-3xl font-bold mb-4 md:mb-4 text-on-secondary-container md:text-on-surface">
            Votre première visite, c’est avant tout une rencontre.
        </h2>
        
        <p className="md:text-xl text-base text-on-secondary-container/80 md:text-on-surface-variant mb-6 md:mb-10 max-w-2xl mx-auto">
            Nous prenons le temps de discuter, d&apos;écouter vos appréhensions et de définir ensemble votre parcours de soins, sans pression.
        </p>
        
        <button className="bg-secondary md:bg-primary text-white px-8 md:px-12 py-4 rounded-full font-bold shadow-lg md:shadow-lg shadow-secondary/20 md:shadow-none hover:bg-primary/90 transition-all active:scale-95">
            Réserver ma consultation
        </button>
        
      </div>
    </section>
  );
}
