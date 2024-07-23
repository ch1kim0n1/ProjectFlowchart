function getAPCreditData() {
    class APCredit {
        constructor(subject, test, score, creditAwarded) {
            this.subject = subject;
            this.test = test;
            this.score = score;
            this.creditAwarded = creditAwarded;
        }
    }

    let apCreditData = {
        credits: [
            // 3s
            new APCredit("Art History","AP Art History", 3, "3 SCH free electives"),
            new APCredit("Studio Art-2D Design","AP Studio Art 2D", 3, "3 SCH free electives"),
            new APCredit("Studio Art-Drawing","AP Studio Art Drawing", 3, "3 SCH free electives"),
            new APCredit("3D Art and Design","AP 3D and Design", 3, "ARTS 2381"),
            new APCredit("Biology","AP Biology", 3, "3 SCH free electives"),
            new APCredit("Chemistry","AP Chemistry", 3, "3 SCH free electives"),
            new APCredit("Chinese","AP Chinese Lang and Culture", 3, "CHIN 1311 & 1312"),
            new APCredit("Comp Sci","AP CSA", 3, "3 SCH free electives"),
            new APCredit("Economics","AP MacroEconomics", 3, "3 SCH free electives"),
            new APCredit("Economics","AP MicroEconomics", 3, "3 SCH free electives"),
            new APCredit("English","AP Eng Lang and Composition", 3, "3 SCH free electives or RHET 1301"),
            new APCredit("English","AP Lit and Composition", 3, "3 SCH free electives or RHET 1301"),
            new APCredit("Environmental Sci","APES", 3, "GEOS 2302(Same as ENVR 2302 and GEOG 2302"),
            new APCredit("French","AP French Lang and Culture", 3, "FREN 1311 & 1312"),
            new APCredit("Geography","AP Human Geography", 3, "GEOG 2302"),
            new APCredit("German","AP German Lang and Culture", 3, "GERM 1311 & 1312"),
            new APCredit("Gov and Politics","AP Comp Gov and Politics", 3, "3 SCH free electives"),
            new APCredit("Gov and Politics","AP US Gov and Politics", 3, "GOVT 2305"),
            new APCredit("History","AP European History", 3, "HIST 2360"),
            new APCredit("History","APUSH", 3, "HIST 1301"),
            new APCredit("History","APWH", 3, "HIST 2322"),
            new APCredit("Italian","AP Italian Lang and Culture", 3, "LANG 1311 & 1312"),
            new APCredit("Japanese","AP Japanese Lang and Culture", 3, "JAPN 1311 & 1312"),
            new APCredit("Latin","AP Latin Lang and Culture", 3, "LANG 1311 & 1312"),
            new APCredit("Math","AP Calc AB", 3, "MATH 2312"),
            new APCredit("Math","AP Calc BC", 3, "MATH 2312+1325 or MATH 2312+2413"),
            new APCredit("Math","AP Precalc", 3, "MATH 1306 or MATH 1314"),
            new APCredit("Music","AP Music Theory", 3, "MUSI 2328"),
            new APCredit("Physics","AP PhyB(non-calc)", 3, "3 SCH free electives"),
            new APCredit("Physics","AP Physics 1", 3, "3 SCH free electives"),
            new APCredit("Physics","AP Physics 2", 3, "3 SCH free electives"),
            new APCredit("Physics","AP Physics C:Mech", 3, "3 SCH free electives"),
            new APCredit("Physics","AP Physics C:Elec and Magnetic", 3, "3 SCH free electives"),
            new APCredit("Psychology","AP Psychology", 3, "PSY 2301"),
            new APCredit("Spanish","AP Spanish Lang and Culture", 3, "SPAN 1311 & 1312"),
            new APCredit("Spanish","AP Spanish Lit and Culture", 3, "SPAN 1311, 1312 & 2311"),
            new APCredit("Statistics","AP Statistics", 3, "3 SCH free electives"),


            // 4s
            new APCredit("Art History","AP Art History", 4, "AHST 2331"),
            new APCredit("Studio Art-2D Design","AP Studio Art 2D", 4, "ARTS 2380"),
            new APCredit("Studio Art-Drawing","AP Studio Art Drawing", 4, "ARTS 1316"),
            new APCredit("3D Art and Design","AP 3D and Design", 4, "ARTS 2381"),
            new APCredit("Biology","AP Biology", 4, "BIOL 2312+2112, BIOL 2311+2111"),
            new APCredit("Chemistry","AP Chemistry", 4, "CHEM 1311+Lab"),
            new APCredit("Chinese","AP Chinese Lang and Culture", 4, "CHIN 1311 & 1312 and 2311"),
            new APCredit("Comp Sci","AP CSA", 4, "CS 1436 + 1337"),
            new APCredit("Economics","AP MacroEconomics", 4, "ECON 2301"),
            new APCredit("Economics","AP MicroEconomics", 4, "ECON 2302"),
            new APCredit("English","AP Eng Lang and Composition", 4, "RHET 1302, RHET 1301(Eff.Fall 24)"),
            new APCredit("English","AP Lit and Composition", 4, "LIT 2331 or RHET 1301(Eff.Fall 24)"),
            new APCredit("Environmental Sci","APES", 4, "GEOS 2302(Same as ENVR 2302 and GEOG 2302"),
            new APCredit("French","AP French Lang and Culture", 4, "FREN 1311 & 1312 and 2311"),
            new APCredit("Geography","AP Human Geography", 4, "GEOG 2302"),
            new APCredit("German","AP German Lang and Culture", 4, "GERM 1311 & 1312 and 2311"),
            new APCredit("Gov and Politics","AP Comp Gov and Politics", 4, "3 SCH free electives"),
            new APCredit("Gov and Politics","AP US Gov and Politics", 4, "GOVT 2305"),
            new APCredit("History","AP European History", 4, "HIST 2360"),
            new APCredit("History","APUSH", 4, "HIST 1301 & HIST 1302"),
            new APCredit("History","APWH", 4, "HIST 2322"),
            new APCredit("Italian","AP Italian Lang and Culture", 4, "LANG 1311, 1312 & LANG 2-(3 Hours)"),
            new APCredit("Japanese","AP Japanese Lang and Culture", 4, "JAPN 1311 & 1312 and 2311"),
            new APCredit("Latin","AP Latin Lang and Culture", 4, "LANG 1311 & 1312 & LANG 2-(3 Hours)"),
            new APCredit("Math","AP Calc AB", 4, "MATH 2312+1325 or MATH 2312+2413"),
            new APCredit("Math","AP Calc BC", 4, "MATH 2312+1325 or MATH 2312+2417 or MATH 1325+1326 or MATH 2413+2414"),
            new APCredit("Math","AP Precalc", 4, "MATH 2312 or MATH 1316 or MATH 1306 or MATH 1314"),
            new APCredit("Music","AP Music Theory", 4, "MUSI 2328"),
            new APCredit("Physics","AP PhyB(non-calc)", 4, "PHYS 1301+1101"),
            new APCredit("Physics","AP Physics 1", 4, "PHYS 1301+1101"),
            new APCredit("Physics","AP Physics 2", 4, "PHYS 1302+1102"),
            new APCredit("Physics","AP Physics C:Mech", 4, "PHYS 2325+2125"),
            new APCredit("Physics","AP Physics C:Elec and Magnetic", 4, "PHYS 2326**+2126"),
            new APCredit("Psychology","AP Psychology", 4, "PSY 2301"),
            new APCredit("Spanish","AP Spanish Lang and Culture", 4, "SPAN 1311, 1312 & 2311"),
            new APCredit("Spanish","AP Spanish Lit and Culture", 4, "SPAN 1311, 1312, 2311 & 2312 or SPAN 1311, 1312 & 2311"),
            new APCredit("Statistics","AP Statistics", 4, "STAT 1342"),

            // 5s
            new APCredit("Art History","AP Art History", 5, "AHST 2331"),
            new APCredit("Studio Art-2D Design","AP Studio Art 2D", 5, "ARTS 2380"),
            new APCredit("Studio Art-Drawing","AP Studio Art Drawing", 5, "ARTS 1316"),
            new APCredit("3D Art and Design","AP 3D and Design", 5, "ARTS 2381"),
            new APCredit("Biology","AP Biology", 5, "BIOL 2311+2111, BIOL 2312+2112, BIOL 2281"),
            new APCredit("Chemistry","AP Chemistry", 5, "CHEM 1311 & 1312+Lab"),
            new APCredit("Chinese","AP Chinese Lang and Culture", 5, "CHIN 1311 & 1312, 2311 & 2312"),
            new APCredit("Comp Sci","AP CSA", 5, "CS 1436 + 1337"),
            new APCredit("Economics","AP MacroEconomics", 5, "ECON 2301"),
            new APCredit("Economics","AP MicroEconomics", 5, "ECON 2302"),
            new APCredit("English","AP Eng Lang and Composition", 5, "RHET 1302, RHET 1301 & RHET 1302(Eff.Fall 24)"),
            new APCredit("English","AP Lit and Composition", 5, "LIT 2331 or RHET 1301 & RHET 1302(Eff.Fall 24)"),
            new APCredit("Environmental Sci","APES", 5, "GEOS 2302(Same as ENVR 2302 and GEOG 2302"),
            new APCredit("French","AP French Lang and Culture", 5, "FREN 1311 & 1312, 2311 & 2312"),
            new APCredit("Geography","AP Human Geography", 5, "GEOG 2302"),
            new APCredit("German","AP German Lang and Culture", 5, "GERM 1311 & 1312, 2311 & 2312"),
            new APCredit("Gov and Politics","AP Comp Gov and Politics", 5, "3 SCH free electives"),
            new APCredit("Gov and Politics","AP US Gov and Politics", 5, "GOVT 2305"),
            new APCredit("History","AP European History", 5, "HIST 2360"),
            new APCredit("History","APUSH", 5, "HIST 1301 & HIST 1302"),
            new APCredit("History","APWH", 5, "HIST 2322"),
            new APCredit("Italian","AP Italian Lang and Culture", 5, "LANG 1311, 1312 & LANG 2-(6 Hours)"),
            new APCredit("Japanese","AP Japanese Lang and Culture", 5, "JAPN 1311 & 1312, 2311 & 2312"),
            new APCredit("Latin","AP Latin Lang and Culture", 5, "LANG 1311 & 1312 & LANG 2-(6 Hours)"),
            new APCredit("Math","AP Calc AB", 5, "MATH 2312+1325 or MATH 2312+2413"),
            new APCredit("Math","AP Calc BC", 5, "MATH 2312+1325 or MATH 2312+2417 or MATH 1325+1326 or MATH 2413+2414"),
            new APCredit("Math","AP Precalc", 5, "MATH 2312 or MATH 1316 or MATH 1306 or MATH 1314"),
            new APCredit("Music","AP Music Theory", 5, "MUSI 2328"),
            new APCredit("Physics","AP PhyB(non-calc)", 5, "PHYS 1301+1101"),
            new APCredit("Physics","AP Physics 1", 5, "PHYS 1301+1101"),
            new APCredit("Physics","AP Physics 2", 5, "PHYS 1302+1102"),
            new APCredit("Physics","AP Physics C:Mech", 5, "PHYS 2325+2125"),
            new APCredit("Physics","AP Physics C:Elec and Magnetic", 5, "PHYS 2326**+2126"),
            new APCredit("Psychology","AP Psychology", 5, "PSY 2301"),
            new APCredit("Spanish","AP Spanish Lang and Culture", 5, "SPAN 1311, 1312, 2311 & 2312"),
            new APCredit("Spanish","AP Spanish Lit and Culture", 5, "SPAN 1311, 1312, 2311 & 2312"),
            new APCredit("Statistics","AP Statistics", 5, "STAT 1342"),
        ],

        getCreditBySubject: function (subject) {
            return this.credits.filter(credit => credit.subject.includes(subject));
        },
        getCreditByTest: function (test) {
            return this.credits.filter(credit => credit.test.includes(test));
        },
        getCreditByScore: function (score) {
            return this.credits.filter(credit => credit.score === score);
        },
        getCreditByAward: function (award) {
            return this.credits.filter(credit => credit.creditAwarded.includes(award));
        },
        filterCredits: function (subject, score, award) {
            return this.credits.filter(credit => 
                (!subject || credit.subject.includes(subject)) &&
                (!score || credit.score === score) &&
                (!award || credit.creditAwarded.includes(award))
            );
        }
    };

    return apCreditData;
}