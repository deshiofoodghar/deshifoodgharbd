/* =========================================================
   দেশী ফুড ঘর
   SITE DATA
   Phase 1 — Step 2
========================================================= */

const SITE_DATA = {

    /* =====================================================
       BRAND
    ===================================================== */

    brand: {

        name: "দেশী ফুড ঘর",

        englishName: "desifoodghar",

        tagline: "বিশ্বস্ততায় আপোষহীন",

        description:
            "দেশী ফুড ঘর — প্রকৃত উৎস থেকে নির্বাচিত খাবারের একটি বিশ্বস্ত ঠিকানা। আমরা পণ্যের উৎসের কাছাকাছি থেকে পণ্য নির্বাচন ও সংগ্রহের মাধ্যমে গ্রাহকের কাছে মানসম্মত ও প্রামাণিক খাবার পৌঁছে দেওয়ার চেষ্টা করি। গুণমান ও গ্রাহকের আস্থাকে আমরা সর্বোচ্চ গুরুত্ব দিই।"

    },


    /* =====================================================
       CONTACT
    ===================================================== */

    contact: {

        whatsappNumbers: [

            "+8801850474096",

            "+8801323827480"

        ],

        primaryWhatsapp:
            "8801850474096",

        facebook:
            "https://www.facebook.com/share/19GaRUVoTc/",

        address:
            "Belabo, Narsingdi, Bangladesh",

        email:
            "",

        googleMaps:
            ""

    },


    /* =====================================================
       NAVIGATION
    ===================================================== */

    navigation: [

        {
            name: "হোম",
            icon: "🏠",
            link: "#home"
        },

        {
            name: "সকল পণ্য",
            icon: "🛍️",
            link: "#products"
        },

        {
            name: "সিজনাল ফল",
            icon: "🥭",
            link: "#categories"
        },

        {
            name: "মিষ্টান্ন ও গুড়",
            icon: "🍬",
            link: "#categories"
        },

        {
            name: "ন্যাচারাল ও অর্গানিক",
            icon: "🍯",
            link: "#categories"
        },

        {
            name: "ফ্রোজেন কর্নার",
            icon: "🧊",
            link: "#categories"
        },

        {
            name: "গ্রোসারি",
            icon: "🛒",
            link: "#categories"
        },

        {
            name: "আমাদের কথা",
            icon: "📖",
            link: "#about"
        }

    ],


    /* =====================================================
       CATEGORIES
    ===================================================== */

    categories: [

        {
            id: "seasonal-fruits",

            name: "সিজনাল ফল",

            icon: "🥭",

            description:
                "রাজশাহী ও সাতক্ষীরার নির্বাচিত মৌসুমি ফল",

            status: "active"

        },

        {
            id: "sweets-gur",

            name: "মিষ্টান্ন ও গুড়",

            icon: "🍬",

            description:
                "রাজশাহী থেকে সংগৃহীত খেজুরের গুড়",

            status: "active"

        },

        {
            id: "natural-organic",

            name: "ন্যাচারাল ও অর্গানিক",

            icon: "🍯",

            description:
                "সাতক্ষীরা থেকে সংগৃহীত বিভিন্ন ধরনের মধু",

            status: "active"

        },

        {
            id: "frozen",

            name: "ফ্রোজেন কর্নার",

            icon: "🧊",

            description:
                "ভবিষ্যতে যুক্ত হবে",

            status: "coming-soon"

        },

        {
            id: "grocery",

            name: "গ্রোসারি",

            icon: "🛒",

            description:
                "ভবিষ্যতে যুক্ত হবে",

            status: "coming-soon"

        }

    ],


    /* =====================================================
       PRODUCTS
    ===================================================== */

    products: [

        /* ---------------------------------------------
           MANGO
        --------------------------------------------- */

        {
            id: "gopalbhog-mango",

            category: "seasonal-fruits",

            subcategory: "আম",

            name: "গোপালভোগ আম",

            origin: "রাজশাহী ও সাতক্ষীরা",

            unit: "কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "seasonal",

            description:
                "সুস্বাদু ও জনপ্রিয় মৌসুমি গোপালভোগ আম।",

            features: [

                "মৌসুমি আম",

                "রাজশাহী ও সাতক্ষীরা থেকে সংগ্রহ",

                "নির্বাচিত উৎস থেকে সংগ্রহ",

                "তাজা অবস্থায় সরবরাহের চেষ্টা"

            ],

            image: "",

            video: ""

        },


        {
            id: "gobindobhog-mango",

            category: "seasonal-fruits",

            subcategory: "আম",

            name: "গোবিন্দভোগ আম",

            origin: "রাজশাহী ও সাতক্ষীরা",

            unit: "কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "seasonal",

            description:
                "সুগন্ধি ও মিষ্টি স্বাদের জনপ্রিয় গোবিন্দভোগ আম।",

            features: [

                "মৌসুমি আম",

                "রাজশাহী ও সাতক্ষীরা থেকে সংগ্রহ",

                "নির্বাচিত উৎস থেকে সংগ্রহ",

                "তাজা অবস্থায় সরবরাহের চেষ্টা"

            ],

            image: "",

            video: ""

        },


        {
            id: "himsagar-mango",

            category: "seasonal-fruits",

            subcategory: "আম",

            name: "হিমসাগর আম",

            origin: "রাজশাহী ও সাতক্ষীরা",

            unit: "কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "seasonal",

            description:
                "মিষ্টি স্বাদ ও সুগন্ধের জন্য জনপ্রিয় হিমসাগর আম।",

            features: [

                "মৌসুমি আম",

                "রাজশাহী ও সাতক্ষীরা থেকে সংগ্রহ",

                "নির্বাচিত উৎস থেকে সংগ্রহ",

                "তাজা অবস্থায় সরবরাহের চেষ্টা"

            ],

            image: "",

            video: ""

        },


        {
            id: "langra-mango",

            category: "seasonal-fruits",

            subcategory: "আম",

            name: "ল্যাংড়া আম",

            origin: "রাজশাহী ও সাতক্ষীরা",

            unit: "কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "seasonal",

            description:
                "জনপ্রিয় স্বাদের ঐতিহ্যবাহী ল্যাংড়া আম।",

            features: [

                "মৌসুমি আম",

                "রাজশাহী ও সাতক্ষীরা থেকে সংগ্রহ",

                "নির্বাচিত উৎস থেকে সংগ্রহ",

                "তাজা অবস্থায় সরবরাহের চেষ্টা"

            ],

            image: "",

            video: ""

        },


        {
            id: "amrapali-mango",

            category: "seasonal-fruits",

            subcategory: "আম",

            name: "আম্রপালি আম",

            origin: "রাজশাহী ও সাতক্ষীরা",

            unit: "কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "seasonal",

            description:
                "মিষ্টি ও সুগন্ধি স্বাদের জনপ্রিয় আম্রপালি আম।",

            features: [

                "মৌসুমি আম",

                "রাজশাহী ও সাতক্ষীরা থেকে সংগ্রহ",

                "নির্বাচিত উৎস থেকে সংগ্রহ",

                "তাজা অবস্থায় সরবরাহের চেষ্টা"

            ],

            image: "",

            video: ""

        },


        {
            id: "fazli-mango",

            category: "seasonal-fruits",

            subcategory: "আম",

            name: "ফজলি আম",

            origin: "রাজশাহী ও সাতক্ষীরা",

            unit: "কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "seasonal",

            description:
                "বড় আকার ও স্বাদের জন্য পরিচিত ফজলি আম।",

            features: [

                "মৌসুমি আম",

                "রাজশাহী ও সাতক্ষীরা থেকে সংগ্রহ",

                "নির্বাচিত উৎস থেকে সংগ্রহ",

                "তাজা অবস্থায় সরবরাহের চেষ্টা"

            ],

            image: "",

            video: ""

        },


        /* ---------------------------------------------
           HONEY
        --------------------------------------------- */

        {
            id: "mustard-flower-honey",

            category: "natural-organic",

            subcategory: "মধু",

            name: "সরিষা ফুলের মধু",

            origin: "সাতক্ষীরা",

            unit: "৫০০ গ্রাম / ১ কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "active",

            description:
                "সাতক্ষীরা থেকে সংগৃহীত সরিষা ফুলের মধু।",

            features: [

                "সাতক্ষীরা থেকে সংগ্রহ",

                "সরিষা ফুলের মধু",

                "প্রাকৃতিকভাবে সংগ্রহ করা",

                "নির্বাচিত উৎস"

            ],

            image: "",

            video: ""

        },


        {
            id: "litchi-flower-honey",

            category: "natural-organic",

            subcategory: "মধু",

            name: "লিচু ফুলের মধু",

            origin: "সাতক্ষীরা",

            unit: "৫০০ গ্রাম / ১ কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "active",

            description:
                "লিচু ফুল থেকে সংগৃহীত সুগন্ধি মধু।",

            features: [

                "সাতক্ষীরা থেকে সংগ্রহ",

                "লিচু ফুলের মধু",

                "প্রাকৃতিকভাবে সংগ্রহ করা",

                "নির্বাচিত উৎস"

            ],

            image: "",

            video: ""

        },


        {
            id: "khalisha-flower-honey",

            category: "natural-organic",

            subcategory: "মধু",

            name: "সুন্দরবনের খলিশা ফুলের মধু",

            origin: "সাতক্ষীরা / সুন্দরবন অঞ্চল",

            unit: "৫০০ গ্রাম / ১ কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "active",

            description:
                "সুন্দরবন অঞ্চলের খলিশা ফুল থেকে সংগৃহীত মধু।",

            features: [

                "সুন্দরবন অঞ্চল",

                "খলিশা ফুলের মধু",

                "প্রাকৃতিকভাবে সংগ্রহ করা",

                "নির্বাচিত উৎস"

            ],

            image: "",

            video: ""

        },


        {
            id: "kalojira-flower-honey",

            category: "natural-organic",

            subcategory: "মধু",

            name: "কালোজিরা ফুলের মধু",

            origin: "সাতক্ষীরা",

            unit: "৫০০ গ্রাম / ১ কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "active",

            description:
                "কালোজিরা ফুল থেকে সংগৃহীত মধু।",

            features: [

                "সাতক্ষীরা থেকে সংগ্রহ",

                "কালোজিরা ফুলের মধু",

                "প্রাকৃতিকভাবে সংগ্রহ করা",

                "নির্বাচিত উৎস"

            ],

            image: "",

            video: ""

        },


        /* ---------------------------------------------
           DATE MOLASSES / GUR
        --------------------------------------------- */

        {
            id: "patali-gur",

            category: "sweets-gur",

            subcategory: "গুড়",

            name: "পাটালি গুড়",

            origin: "রাজশাহী",

            unit: "কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "active",

            description:
                "রাজশাহী থেকে সংগৃহীত ঐতিহ্যবাহী পাটালি গুড়।",

            features: [

                "রাজশাহী থেকে সংগ্রহ",

                "ঐতিহ্যবাহী পাটালি গুড়",

                "নির্বাচিত উৎস",

                "গুণমানের প্রতি যত্নশীলতা"

            ],

            image: "",

            video: ""

        },


        {
            id: "jhola-gur",

            category: "sweets-gur",

            subcategory: "গুড়",

            name: "ঝোলা গুড়",

            origin: "রাজশাহী",

            unit: "কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "active",

            description:
                "রাজশাহী থেকে সংগৃহীত ঝোলা গুড়।",

            features: [

                "রাজশাহী থেকে সংগ্রহ",

                "ঐতিহ্যবাহী ঝোলা গুড়",

                "নির্বাচিত উৎস",

                "গুণমানের প্রতি যত্নশীলতা"

            ],

            image: "",

            video: ""

        },


        {
            id: "danadar-gur",

            category: "sweets-gur",

            subcategory: "গুড়",

            name: "দানাদার গুড়",

            origin: "রাজশাহী",

            unit: "কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "active",

            description:
                "রাজশাহী থেকে সংগৃহীত দানাদার গুড়।",

            features: [

                "রাজশাহী থেকে সংগ্রহ",

                "দানাদার গুড়",

                "নির্বাচিত উৎস",

                "গুণমানের প্রতি যত্নশীলতা"

            ],

            image: "",

            video: ""

        },


        {
            id: "chocolate-gur",

            category: "sweets-gur",

            subcategory: "গুড়",

            name: "চকলেট গুড়",

            origin: "রাজশাহী",

            unit: "কেজি",

            price: null,

            priceText: "মূল্য শীঘ্রই জানানো হবে",

            status: "active",

            description:
                "রাজশাহী থেকে সংগৃহীত বিশেষ চকলেট গুড়।",

            features: [

                "রাজশাহী থেকে সংগ্রহ",

                "বিশেষ চকলেট গুড়",

                "নির্বাচিত উৎস",

                "গুণমানের প্রতি যত্নশীলতা"

            ],

            image: "",

            video: ""

        }

    ],


    /* =====================================================
       FUTURE PRODUCTS
    ===================================================== */

    futureProducts: [

        "বগুড়ার দই",

        "ঘি",

        "কাঠের ঘানির সরিষার তেল",

        "ফ্রোজেন মাছ",

        "ফ্রোজেন মাংস",

        "রেডি-টু-কুক খাবার",

        "চাল",

        "ডাল",

        "গুঁড়া মসলা"

    ],


    /* =====================================================
       TRUST POINTS
    ===================================================== */

    trustPoints: [

        {
            title:
                "বিশুদ্ধতার প্রতি অঙ্গীকার",

            description:
                "পণ্যের মান ও গ্রাহকের আস্থাকে আমরা সর্বোচ্চ গুরুত্ব দিই।"

        },

        {
            title:
                "নির্বাচিত উৎস থেকে সংগ্রহ",

            description:
                "নির্বাচিত উৎস থেকে পণ্য সংগ্রহের মাধ্যমে মান বজায় রাখার চেষ্টা করি।"

        },

        {
            title:
                "উৎসের কাছাকাছি থেকে সংগ্রহ",

            description:
                "পণ্যের প্রকৃত উৎসের কাছাকাছি থেকে সংগ্রহের মাধ্যমে প্রামাণিকতা বজায় রাখার চেষ্টা করি।"

        },

        {
            title:
                "গ্রাহকসেবায় যত্নশীলতা",

            description:
                "গ্রাহকের প্রশ্ন, মতামত ও সমস্যাকে গুরুত্ব দিয়ে সাড়া দেওয়ার চেষ্টা করি।"

        }

    ],


    /* =====================================================
       COLLECTION STORY
    ===================================================== */

    collectionStory: [

        {
            source: "রাজশাহী",

            product: "আম",

            icon: "🥭"

        },

        {
            source: "সাতক্ষীরা",

            product: "মধু",

            icon: "🍯"

        },

        {
            source: "রাজশাহী",

            product: "খেজুরের গুড়",

            icon: "🌴"

        }

    ],


    /* =====================================================
       REVIEWS
       Empty initially — real reviews will be added later.
    ===================================================== */

    reviews: [],


    /* =====================================================
       MEDIA
       Images and videos can be added later.
    ===================================================== */

    media: {

        hero: "",

        collectionStory: "",

        farmVideo: "",

        packagingVideo: ""

    },


    /* =====================================================
       SOCIAL
    ===================================================== */

    social: {

        facebook:
            "https://www.facebook.com/share/19GaRUVoTc/",

        instagram:
            "",

        youtube:
            ""

    }

};


/* =========================================================
   GLOBAL ACCESS
========================================================= */

window.SITE_DATA = SITE_DATA;
