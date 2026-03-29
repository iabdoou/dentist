export default function ReassuranceBar() {
  return (
    <section className="bg-surface-container-low py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex overflow-x-auto hide-scrollbar snap-x lg:grid lg:grid-cols-4 gap-4 md:gap-8">

          <div className="flex-none snap-center lg:flex-auto flex items-center gap-4 group bg-surface-container-lowest lg:bg-transparent px-5 py-3 lg:px-0 lg:py-0 rounded-full border border-outline-variant/10 lg:border-none">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
            </div>
            <span className="font-medium text-sm md:text-base text-on-surface-variant whitespace-nowrap lg:whitespace-normal">Aucun jugement</span>
          </div>
          <div className="flex-none snap-center lg:flex-auto flex items-center gap-4 group bg-surface-container-lowest lg:bg-transparent px-5 py-3 lg:px-0 lg:py-0 rounded-full border border-outline-variant/10 lg:border-none">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>sentiment_satisfied</span>
            </div>
            <span className="font-medium text-sm md:text-base text-on-surface-variant whitespace-nowrap lg:whitespace-normal">Patients anxieux bienvenus</span>
          </div>
          <div className="flex-none snap-center lg:flex-auto flex items-center gap-4 group bg-surface-container-lowest lg:bg-transparent px-5 py-3 lg:px-0 lg:py-0 rounded-full border border-outline-variant/10 lg:border-none">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            </div>
            <span className="font-medium text-sm md:text-base text-on-surface-variant whitespace-nowrap lg:whitespace-normal">Cabinet adapté aux enfants</span>
          </div>
          <div className="flex-none snap-center lg:flex-auto flex items-center gap-4 group bg-surface-container-lowest lg:bg-transparent px-5 py-3 lg:px-0 lg:py-0 rounded-full border border-outline-variant/10 lg:border-none">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>forum</span>
            </div>
            <span className="font-medium text-sm md:text-base text-on-surface-variant whitespace-nowrap lg:whitespace-normal">On prend le temps d&apos;expliquer</span>
          </div>
        </div>
      </div>
    </section>
  );
}