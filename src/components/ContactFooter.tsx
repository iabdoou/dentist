export default function ContactFooter() {
  return (
    <>
      {/* Contact Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 max-w-7xl mx-auto bg-surface-container-low/50 md:bg-transparent" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
          
          <div className="space-y-4 md:space-y-0">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-0 md:mb-6">Prêt à retrouver le sourire ?</h2>
            <p className="text-on-surface-variant text-base md:text-lg mb-12 hidden md:block">N&apos;hésitez pas à nous appeler ou à nous envoyer un message sur WhatsApp pour toute demande urgente ou particulière.</p>
            <p className="text-on-surface-variant md:hidden mb-12">Situé à Aïn Benian, nous vous accueillons tous les jours.</p>
            
            <div className="flex flex-col gap-4 md:hidden mb-8">
              <a href="#" className="flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-full font-bold shadow-md">
                <span className="material-symbols-outlined">chat</span>
                Nous écrire sur WhatsApp
              </a>
              <a href="#" className="flex items-center justify-center gap-3 border-2 border-primary text-primary py-4 rounded-full font-bold">
                <span className="material-symbols-outlined">call</span>
                Appeler le cabinet
              </a>
            </div>

            <div className="space-y-8 hidden md:block">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-secondary shadow-sm">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h4 className="font-bold">Téléphone</h4>
                  <p className="text-on-surface-variant">+213 555 123 456</p>
                  <p className="text-secondary text-sm font-semibold mt-1">Urgence ? Appelez-nous directement.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-[#25D366] shadow-sm">
                  <span className="material-symbols-outlined">chat</span>
                </div>
                <div>
                  <h4 className="font-bold">WhatsApp</h4>
                  <p className="text-on-surface-variant">Disponible pour vos questions rapides</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold">Adresse</h4>
                  <p className="text-on-surface-variant">Rue des Oliviers, Aïn Benian, Alger</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest md:bg-white p-8 md:p-10 rounded-xl md:rounded-lg shadow-none md:shadow-xl border-none md:border border-outline-variant/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="hidden md:block">
                  <label className="block text-sm font-medium text-on-surface-variant mb-2">Prénom</label>
                  <input type="text" className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-on-surface-variant mb-2 md:hidden">Nom complet</label>
                  <label className="hidden md:block text-sm font-medium text-on-surface-variant mb-2">Nom</label>
                  <input type="text" placeholder="Votre nom" className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/20" />
                </div>
              </div>
              
              <div className="hidden md:block">
                <label className="block text-sm font-medium text-on-surface-variant mb-2">Email ou Téléphone</label>
                <input type="text" className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/20" />
              </div>
              
              <div className="space-y-2 md:space-y-0">
                <label className="block text-sm font-medium text-on-surface-variant mb-0 md:mb-2">Message</label>
                <textarea rows={4} placeholder="Comment pouvons-nous vous aider ?" className="w-full bg-surface-container-low border-none rounded-lg p-4 focus:ring-1 focus:ring-primary/20"></textarea>
              </div>
              
              <button type="button" className="w-full bg-primary md:bg-sage-gradient text-white py-4 md:py-5 rounded-full font-bold shadow-none md:shadow-lg hover:scale-95 transition-transform">
                  Envoyer le message
              </button>
            </form>
          </div>
          
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-sm md:hidden mt-8 md:mt-0">
            <img 
              className="w-full h-full object-cover" 
              alt="Map location Ain Benian" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr_PEX7uT17v5958xLtIGKwYG_q0Yvd9UFgXdq_jsmmF7Gi6LBIoTJ2jceNs8ZSrpq-hItaitgggtC0uVIWdGYCt-WobhiojebqYsTGnZ_u27OfsnscYaba3CAKypSHofVn6SbqYDlRN5XR2Q5qBYK6ZbaXqt7JqDP3hKqegKOKpSU7o5YpIhda183dde1NeJGov_g0JTdz_Blua8H7hKLfzC4C7HpvSINWWTg-IuG3p6IWD1Ts5nMQCCC0QlYt0zCcFzy2BWB2sU" 
            />
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface-variant md:bg-surface-variant dark:bg-[#1B1C1A] w-full rounded-t-[3rem] mt-20 flex flex-col md:block items-center md:items-stretch gap-6 md:gap-0 px-8 py-12 md:py-16 text-center md:text-left pb-32 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto font-body text-on-surface-variant leading-relaxed">
          
          <div className="flex justify-center md:justify-start flex-col">
            <div className="text-xl md:text-xl font-bold text-primary mb-0 md:mb-4 font-headline">Dental Expert Sanctuary</div>
            <p className="mb-6 hidden md:block">Une approche humaine et douce de la dentisterie au cœur de l&apos;Algérie.</p>
            <div className="flex justify-center md:justify-start flex-wrap gap-6 md:gap-4 font-medium md:font-normal mt-6 md:mt-0">
              <a className="text-on-surface-variant hover:text-primary transition-colors text-sm md:hidden" href="#">Mentions Légales</a>
              <a className="text-on-surface-variant hover:text-primary transition-colors text-sm md:hidden" href="#">Confidentialité</a>
              <a className="text-secondary underline text-sm md:hidden" href="#">Urgences</a>
              <span className="material-symbols-outlined text-primary hidden md:inline-block">social_leaderboard</span>
              <span className="material-symbols-outlined text-primary hidden md:inline-block">camera_alt</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <h4 className="font-bold text-primary mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary underline transition-all">Horaires: Lun-Ven 09:00-18:00</a></li>
              <li><a href="#" className="hover:text-primary underline transition-all">Contact: +213 555 123 456</a></li>
              <li><a href="#" className="hover:text-primary underline transition-all">WhatsApp</a></li>
              <li><a href="#" className="hover:text-primary underline transition-all">Localisation</a></li>
            </ul>
          </div>
          
          <div className="hidden md:block">
            <h4 className="font-bold text-primary mb-6">Mentions</h4>
            <p className="mb-4">© 2024 Dental Expert. Tous droits réservés.</p>
            <p className="text-sm opacity-70">Designé pour votre bien-être. Les informations de ce site ne remplacent pas une consultation médicale.</p>
          </div>
          
        </div>
        
        <div className="text-on-surface-variant/80 text-sm font-body md:hidden -mt-4">
            © 2024 Dental Expert Aïn Benian
        </div>
      </footer>
    </>
  );
}
