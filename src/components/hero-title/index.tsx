export default function HeroFormCenterAlignedWithAForm() {
  return (
    <>
      {/* Hero */}
      <div className="overflow-hidden">
        <div className="mx-auto max-w-[85rem] px-4 py-20 sm:px-6 lg:px-8">
          <div className="relative mx-auto grid max-w-4xl space-y-5 sm:space-y-10">
            {/* Title */}
            <div className="text-center">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Small business solutions
              </p>
              <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Turn online shoppers into lifetime customers
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}
    </>
  );
}
