function getIBCreditData() {
    class IBCredit {
        constructor(subject, test, score, creditAwarded) {
            this.subject = subject;
            this.test = test;
            this.score = score;
            this.creditAwarded = creditAwarded;
        }
    }

    let ibCreditData = {
        credits: [
            // 3s (WRONG INFO HERE!!!)
            new IBCredit("Art History","IB Art History", 3, "3 SCH free electives"),
            new IBCredit("Studio Art-2D Design","IB Studio Art 2D", 3, "3 SCH free electives"),
            new IBCredit("Studio Art-Drawing","IB Studio Art Drawing", 3, "3 SCH free electives"),
            new IBCredit("3D Art and Design","IB 3D and Design", 3, "ARTS 2381"),
            new IBCredit("Biology","IB Biology", 3, "3 SCH free electives"),
            new IBCredit("Chemistry","IB Chemistry", 3, "3 SCH free electives"),
            new IBCredit("Chinese","IB Chinese Lang and Culture", 3, "CHIN 1311 & 1312"),
            new IBCredit("Comp Sci","IB CSA", 3, "3 SCH free electives"),
            new IBCredit("Economics","IB MacroEconomics", 3, "3 SCH free electives"),
            new IBCredit("Economics","IB MicroEconomics", 3, "3 SCH free electives"),
            new IBCredit("English","IB Eng Lang and Composition", 3, "3 SCH free electives or RHET 1301"),
            new IBCredit("English","IB Lit and Composition", 3, "3 SCH free electives or RHET 1301"),
            new IBCredit("Environmental Sci","IBES", 3, "GEOS 2302(Same as ENVR 2302 and GEOG 2302"),
            new IBCredit("French","IB French Lang and Culture", 3, "FREN 1311 & 1312"),
            new IBCredit("GeogrIBhy","IB Human GeogrIBhy", 3, "GEOG 2302"),
            new IBCredit("German","IB German Lang and Culture", 3, "GERM 1311 & 1312"),
            new IBCredit("Gov and Politics","IB Comp Gov and Politics", 3, "3 SCH free electives"),
            new IBCredit("Gov and Politics","IB US Gov and Politics", 3, "GOVT 2305"),
            new IBCredit("History","IB European History", 3, "HIST 2360"),
            new IBCredit("History","IBUSH", 3, "HIST 1301"),
            new IBCredit("History","IBWH", 3, "HIST 2322"),
            new IBCredit("Italian","IB Italian Lang and Culture", 3, "LANG 1311 & 1312"),
            new IBCredit("JIBanese","IB JIBanese Lang and Culture", 3, "JIBN 1311 & 1312"),
            new IBCredit("Latin","IB Latin Lang and Culture", 3, "LANG 1311 & 1312"),
            new IBCredit("Math","IB Calc AB", 3, "MATH 2312"),
            new IBCredit("Math","IB Calc BC", 3, "MATH 2312+1325 or MATH 2312+2413"),
            new IBCredit("Math","IB Precalc", 3, "MATH 1306 or MATH 1314"),
            new IBCredit("Music","IB Music Theory", 3, "MUSI 2328"),
            new IBCredit("Physics","IB PhyB(non-calc)", 3, "3 SCH free electives"),
            new IBCredit("Physics","IB Physics 1", 3, "3 SCH free electives"),
            new IBCredit("Physics","IB Physics 2", 3, "3 SCH free electives"),
            new IBCredit("Physics","IB Physics C:Mech", 3, "3 SCH free electives"),
            new IBCredit("Physics","IB Physics C:Elec and Magnetic", 3, "3 SCH free electives"),
            new IBCredit("Psychology","IB Psychology", 3, "PSY 2301"),
            new IBCredit("Spanish","IB Spanish Lang and Culture", 3, "SPAN 1311 & 1312"),
            new IBCredit("Spanish","IB Spanish Lit and Culture", 3, "SPAN 1311, 1312 & 2311"),
            new IBCredit("Statistics","IB Statistics", 3, "3 SCH free electives")
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

    return ibCreditData;
}