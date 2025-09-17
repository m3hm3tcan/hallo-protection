import heroImage from "../assets/hero-image.jpg";

export const Hero = () => {
  return (
    <div
      className="relative w-full h-[90vh] bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80 mix-blend-multiply z-0"></div>

      {/* Flame particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-3 bg-orange-500 rounded-full blur-sm animate-flame z-0"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 140}px`,
            animationDelay: `${Math.random() * 13}s`,
          }}
        />
      ))}

      {/* Main content */}
      <section className="relative z-10 container grid lg:grid-cols-1 place-items-center py-20 md:py-32 gap-10 h-full">
        <div className="text-center lg:text-start space-y-6 p-6 rounded-m">
          <main className="text-5xl md:text-6xl font-bold">
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#ffbf00] via-[#f40101] to-[#ddf107] text-transparent bg-clip-text">
                Holló Protection
              </span>{" "}
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-12/12 mx-auto lg:mx-0">
            A Holló Protection Kft.-nél hiszünk abban, hogy a biztonságuk mindennél fontosabb.
            Teljes körű tűz- és munkavédelmi megoldásokat és dokumentációkat nyújtunk, amelyek egyszerre felelnek meg a hatósági előírásoknak és ügyfeleink valódi biztonsági igényeinek.
            Megbízhatóság, profizmus, biztonság, emberközpontúság, rugalmasság — ez a mi garanciánk.
          </p>
        </div>

        {/* Heartbeat glow */}
        {/* <div className="flex justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-[#61DAFB] shadow-lg animate-heartbeat"></div>
        </div> */}
      </section>
    </div>
  );
};
