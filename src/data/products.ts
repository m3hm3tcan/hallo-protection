export interface ProductsProps {
    title: string;
    cat: string;
    description: string;
    feature: Feature[];
    image: string;
}

export interface ProductListProps {
    name: string;
    cat: string;
}

export interface Feature {
    label: string;
    value: string;
}

export const productList: ProductListProps[] = [
    // { name: 'Minden', cat: '' },
    { name: 'Tűzoltó Készülékek', cat: 'tuzolto-keszulek' },
    { name: 'Alkatrészek', cat: 'alkatreszek' },
    { name: 'Készüléktartó Dobozok', cat: 'keszulektarto-dobozok' },
    { name: 'Tűzcsapszekrény', cat: 'tuzcsapszekreny' },
    { name: 'Tűzoltó Takarók', cat: 'tuzolto-takarok' },
];


export const products: ProductsProps[] = [
    // Tűzoltó Készülékek products
    {
        title: "1kg-os porral oltó",
        cat: 'tuzolto-keszulek',
        description: "",
        feature: [
            { label: 'MSZ EN 3 tanúsítvány', value: 'TVL 660/63/2009' },
            { label: 'CE 0036 – (PED', value: 'IS-ÉMI-TÜV-09-11-KJZ-001,IS-ÉMI-TÜV-09-11-KJZ-002' },
            { label: 'Vizsgált oltóképesség', value: '5A; 34B; C' },
            { label: 'Teljes magasság', value: '330 mm' },
            { label: 'Teljes szélesség', value: '100 mm' },
            { label: 'Tartály átmérő', value: '	85 mm' },
            { label: 'Bruttó súly', value: '2 kg' },
            { label: 'Oltóanyag', value: 'ISOCONP ABC 80' },
            { label: 'Oltóanyag töltet', value: '1 kg' },
            { label: 'Hajtóanyag', value: 'Nitrogén' },
            { label: 'Működési idő', value: '>6 s' },
            { label: 'Üzemi nyomás', value: '15 bar' },
            { label: 'Próbanyomás', value: '27 bar' },
            { label: 'Működési hőfoktartomány', value: '-20 °C -tól +60 °C-ig' },
        ],
        image: '1kg-os porral olto',
    },
    {
        title: "2kg-os porral oltó",
        cat: 'tuzolto-keszulek',
        description: "",
        feature: [
            { label: 'MSZ EN 3 tanúsítvány', value: 'TVL 660/54/2009' },
            { label: 'CE 0036 – (PED', value: 'IS-ÉMI-TÜV-09-11-KJZ-001,IS-ÉMI-TÜV-09-11-KJZ-002' },
            { label: 'Vizsgált oltóképesség', value: '13A; 89B; C' },
            { label: 'Teljes magasság', value: '375 mm' },
            { label: 'Teljes szélesség', value: '110 mm' },
            { label: 'Tartály átmérő', value: '	110 mm' },
            { label: 'Bruttó súly', value: '3,6 kg' },
            { label: 'Oltóanyag', value: 'ISOCONP ABC 80' },
            { label: 'Oltóanyag töltet', value: '2 kg' },
            { label: 'Hajtóanyag', value: 'Nitrogén' },
            { label: 'Működési idő', value: '>9 s' },
            { label: 'Üzemi nyomás', value: '15 bar' },
            { label: 'Próbanyomás', value: '27 bar' },
            { label: 'Működési hőfoktartomány', value: '-20 °C -tól +60 °C-ig' },
        ],
        image: 'porral-olto-2-kg',
    },
    {
        title: "6kg-os porral oltó",
        cat: 'tuzolto-keszulek',
        description: "",
        feature: [
            { label: 'MSZ EN 3 tanúsítvány', value: 'TVL 660/55/2009' },
            { label: 'CE 0036 – (PED', value: 'IS-ÉMI-TÜV-09-11-KJZ-001,IS-ÉMI-TÜV-09-11-KJZ-002' },
            { label: 'Vizsgált oltóképesség', value: '43A; 233B; C' },
            { label: 'Teljes magasság', value: '530 mm' },
            { label: 'Teljes szélesség', value: '270 mm' },
            { label: 'Tartály átmérő', value: '160 mm' },
            { label: 'Bruttó súly', value: '9,8 kg' },
            { label: 'Oltóanyag', value: 'ISOCONP ABC 80' },
            { label: 'Oltóanyag töltet', value: '6 kg' },
            { label: 'Hajtóanyag', value: 'Nitrogén' },
            { label: 'Működési idő', value: '>15 s' },
            { label: 'Üzemi nyomás', value: '15 bar' },
            { label: 'Próbanyomás', value: '27 bar' },
            { label: 'Működési hőfoktartomány', value: '-20 °C -tól +60 °C-ig' },
        ],
        image: 'porral-olto-6-kg',
    },
    // Alkatrészek products
    {
        title: "Alkatrészek",
        cat: 'alkatreszek',
        description: "",
        feature: [
            { label: '', value: 'manométer' },
            { label: '', value: 'komplett szelep (manométer nélkül)' },
            { label: '', value: 'szelephez szelepzár' },
            { label: '', value: 'szelephez működtető karpár' },
            { label: '', value: 'fúvóka' },
            { label: '', value: 'felszállócső' },
            { label: '', value: 'felszállócső szűrővel' },
            { label: '', value: 'címke' },
            { label: '', value: 'szerelt tömlő tűzoltó készülékhez' },
            { label: '', value: 'műanyag talpgyűrű' },
            { label: '', value: '50 kg-os készülékhez kocsi' },
            { label: '', value: 'hószórócső' },
            { label: '', value: 'O-gyűrű szelephez' },
            { label: '', value: 'biztosító szeg' },
            { label: '', value: 'biztosító zsinór' },
        ],
        image: 'alkatreszek',
    },
    // Készüléktartó dobozok products
    {
        title: "Készüléktartó dobozok",
        cat: 'keszulektarto-dobozok',
        description: "",
        feature: [
            { label: '', value: 'fali felfüggesztő' },
            { label: '', value: 'gépjármű felfüggesztő' },
            { label: '', value: 'kombinált felfüggesztő (konzolos)' },
            { label: '', value: 'gépjármű felfüggesztő (fémvázas, csatos, két hevederes)' },
            { label: '', value: 'gépjármű felfüggesztőhöz pánt' },
            { label: '', value: 'készüléktartó műanyag doboz (masszív kivitel) 6, 12 kg-os készülékhez (675 mm x 290 mm x 240 mm)' },
            { label: '', value: 'készüléktartó műanyag doboz (légmentesen zárt, 9 kg-os készülékig, két hevederrel)' },
            { label: '', value: 'készüléktartó üvegablakos lemezszekrény, zárható' },
            { label: '', value: 'készüléktartó műanyag doboz (masszív kivitel) 1 db 12 kg-os készülékhez (270 mm x 825 mm x 180mm)' },
            { label: '', value: 'kulcs tartó doboz üvegbetörővel' },
            { label: '', value: 'tűzoltó készülék takaró kabát (6, 12 és 50 kg-os készülékhez)' },
        ],
        image: 'keszulektarto-doboz',
    },
    // Tűzcsapszekrény products
    {
        title: "Tűzcsapszekrény (1″-os tömlővel)",
        cat: 'tuzcsapszekreny',
        description: "Tűzcsapszekrény kifordítható dobbal, 30m 1″-os alaktartó szerelt tömlővel",
        feature: [
            { label: 'Kivitel', value: 'Tele ajtóval, kifordítható dobbal' },
            { label: 'Méret', value: '720 x 700 x 280 mm' },
            { label: 'Anyag/szín', value: 'Acéllemez/Szinterezett, piros' },
            { label: 'Tömlő', value: 'D (1″-os vagy 3/4″-os ) alaktartó 30 méteres hossz' },
            { label: 'Szabvány megfelelőség', value: 'EN 671-1:2001' },
            { label: 'Tűzvédelmi megfelelőségi tanúsítvány', value: 'SZIE YMMFK 671-11/1/2006' },
        ],
        image: 'tuzcsapszekreny-01',
    },
    // Tűzoltó takaró products
    {
        title: "Tűzoltó takaró (1,2m x 1,8m)",
        cat: 'tuzolto-takarok',
        description: "Tűzcsapszekrény kifordítható dobbal, 30m 1″-os alaktartó szerelt tömlővel",
        feature: [
            { label: 'Mérete (m)', value: '1,2 x 1,8' },
            { label: 'Felülete (nm)', value: '2,16 nm' },
            { label: 'Tanúsítvány', value: 'TVL 660/52/2009' },
            { label: 'Szabvány', value: 'MSZ EN 1869:1998' },
        ],
        image: 'tuzolto-takaro',
    },
];

