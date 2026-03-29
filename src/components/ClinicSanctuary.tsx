export default function ClinicSanctuary() {
  return (
    <section className="py-20 md:py-24 bg-primary md:bg-surface-container-lowest text-on-primary md:text-on-surface mx-4 md:mx-0 rounded-xl md:rounded-none">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4 relative">
            <img 
              className="rounded-lg w-full aspect-square md:h-48 object-cover shadow-md" 
              alt="Cozy dental waiting room" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-YoBbK94BaCyAIjSK59hn_21DYb8Tvx8uAHhsqARQipJLI4nLhfDF7gjdouExsvqg8NIrTqI2sngNZTjJXDvDG2RdyALwM1bwSglOsrjeTWeuhHsYS0zrznKAnjmYZ4lrC8jblv2RIQBnk-6SHpxP2mIYYx94V89pJleP0lSikKb_j6er6YYFBk1PTZPXa-kFLEyaWB-rNJ62J_sRdUWC7Y7H8DBs_dE-DKNB3nGBPGG9CnV73wJ6T6-4qSnQFIzrvrtzPYt-CJY"
            />
            <img 
              className="rounded-lg w-full aspect-square md:h-64 object-cover md:mt-12 shadow-md hidden md:block" 
              alt="Interior detail of modern clinic" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQXO606Tz4u2OgSKESc1m02BPz2Ld1K77XSrXYCwyeZnNQJcTb4X49Up-S0BMMz5vTJQ3oTUwpZ3X66a6Z2nUvRacFJsN2J7mriJNF5NMN9wBHwofHQXy3tfzN3eSy9i2uuhKoXxB_OSLO6rC9xTHPYZkQiwSt2Y8EU5yCseqH6x_BYLNJ9v44-9sPwIoHhwOBRm5MwJ6s_0t0xhMLyNtS_9JykfhwljLLfRYm2aoDqhhgRlcfx4O319kDmhd1vezMrLwqETDCXdY"
            />
            <img 
              className="rounded-lg w-full aspect-square md:h-64 md:-mt-12 shadow-md" 
              alt="Wide shot of treatment room" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKrWgkzfbkc6uW9GGbKFgR-ZBvKkW4XCKnYERF5AoNfJ0ZWPfq8FsQ-n67is4YXHWxHi0ruGb6WUb_6Z5el4Cw5q1R2cIDUzqC1kev_8HVE3vSm1loXNKjJQ580wbpyaPzHXm5UriXCTo7nGOVm07-o9vfqKDiWPfrRBxsjnseq9TlwCFoyxpc9q_z63fPcjzxqTMMRT5qIADum_qJGvdTgpbLDZS27o9CiOoFzzFIgYYzoKr1OJcRDkNhQkeROdOYRGL-glqFwNg"
            />
            <img 
              className="rounded-lg w-full aspect-square md:h-48 object-cover shadow-md hidden md:block" 
              alt="Dedicated kids corner" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl8xOxP1AIgk6STl66u99nFlE8n1stVt1vrM-FKjJ-Y99o9CG5HhPDVvDqZ1J8PffpsJQmehWYLSB2iQOVNhjFsWwBBvlu_21wQZXzRaGzVH09hzT88M5Ls0YOSwbXawLrIfDvfyqFDBC4ogN86EGxXGkeY49m79YKMIGwUCsOdmNzhzDEmW-Uo7W4s00V8NPS1WD6RaNWLqlu7s-DUp2ZdXpiPoEavdVmQFSZK-9Q5L5zFJyNkxj3xZGwwBerU8jtSJHM4EmfBWs"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-4 md:space-y-0">
            <span className="text-secondary font-semibold uppercase tracking-widest text-sm hidden md:block">Le Sanctuaire</span>
            <h2 className="font-headline text-3xl md:text-4xl font-extrabold md:font-bold md:mt-4 md:mb-8 text-on-primary md:text-on-surface">Un espace pensé pour votre sérénité</h2>
            <p className="opacity-80 md:opacity-100 md:text-on-surface-variant text-lg leading-relaxed mb-6">
                Loin des néons agressifs et du blanc clinique, notre cabinet à Aïn Benian a été conçu comme une extension de votre salon.
            </p>
            <ul className="space-y-4 hidden md:block">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Lumière naturelle dans toutes les salles de soin</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Matériaux nobles : bois clair et lin</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">check_circle</span>
                <span>Espace café et thé en libre service</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
