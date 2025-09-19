// import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import bigLogo from "../assets/hollo-big-logo.png";

export const Services = () => {
  return (
    <section className="container py-24 sm:py-24" id="rolunk">
      <div className="grid lg:grid-cols-[3fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-2xl md:text-3xl ">
            Rólunk-Hogyan született meg a{" "}
            <span className="bg-clip-text font-bold">
              Holló Protection Kft?{" "}
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mt-3 mb-2">
            Hosszú éveken keresztül több, tűz-és munkavédelemmel foglalkozó cégnél dolgoztam és sajnos azt tapasztaltam,
            hogy a vezetőség és a döntéshozók nem voltak szakmailag eléggé felkészültek, (főleg az egyedi eseteknél) illetve a megfelelő ügyfél
            és emberközpontúság sem volt jellemző egyik cégre sem. Mindezekből adódott, hogy rengeteg hanyagul elvégzett munkával találkoztam,
            köztük az információk elakadásával és a kommunikáció hiányával, mely több problémát is okozott,
            ezekhez pedig én nem szerettem volna továbbra a nevemet adni, így úgy döntöttem, más hibáiból tanulva a saját utamra lépek.
          </p>

          <p className="text-muted-foreground text-lg mt-1 mb-2 ">
            Számomra a biztonság nem csupán a kötelező szabályok betartását jelenti.
            Azt jelenti, hogy ügyfeleim nyugodtan végezhetik munkájukat, mert tudják:
            vállalkozásuk, munkatársaik és környezetük biztonságban van.
          </p>

          <p className="text-muted-foreground text-lg mt-1 mb-2 ">
            Így szültetett meg a Holló Protection Kft, mellyel szeretnénk minden ügyfélnek valódi értéket, elégedettséget és biztonságot adni.
            Szolgáltatásainkat úgy alakítottuk ki és fejlesztjük tovább a jövőben, melyeket ügyfeleink visszajelzéseire alapoztunk. Fontos,
            hogy akikkel együtt dolgozunk, azt kapják tőlünk, amit elvárnak, így számunkra a visszajelzés kultúrája az egyik legfontosabb!
          </p>

          <p className="text-muted-foreground text-lg mt-1 mb-2 ">
            Célunk, hogy egy olyan komplex, átfogó szolgáltatást tudjunk nyújtani, mely szakmailag kifogásolhatatlan, minden előírásnak és jogi követelménynek megfelel,
            illetve egy olyan rendszert adjunk a kezükbe, mely az esetleges hatósági ellenőrzésekkor könnyen átadható lesz bizonyos ellenőrző szervek részére.
            Ebben szeretnénk segíteni mindenkinek, aki ránk bízza cégének tűz-és munkavédelmi ellenőrzéseit, dokumentációt, egyéb hatósági követelményeket.
          </p>

          <p className="text-muted-foreground text-lg mt-1 mb-2 ">
            Jelenleg elsősorban Budapesten, Pest és Komárom-Esztergom megyében dolgozunk, de igény esetén az ország bármely részére ellátogatunk.
            Hiszünk abban, hogy minden ügyfél más, ezért <b>egyedi megoldásokat</b> kínálunk – kompromisszumok nélkül
          </p>
        </div>

        <img
          src={bigLogo}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
