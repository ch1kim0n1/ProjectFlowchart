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
            // Minimum 4 (WRONG INFO HERE!!!)
            new IBCredit("Biology","Biology", Minimum 4, "3 SCH free electives"),
            new IBCredit("Language A: Literature","Language A: Literature", Minimum 4, "3 SCH free electives"),
            new IBCredit("Language A: Language and Literature","Language A: Language and Literature", Minimum 4, "3 SCH free electives"),
            new IBCredit("Environmental Systems and Societies","Environmental Systems and Societies", Minimum 4, "3 SCH free electives"),
            new IBCredit("Geography","Geography", Minimum 4, "3 SCH free electives"),
            new IBCredit("Any B language offered by UTD	","Any B language offered by UTD", Minimum 4, "3 SCH free electives"),
            new IBCredit("Mathematics","Mathematics", Minimum 4, "3 SCH free electives"),
            new IBCredit("Music","Music", Minimum 4, "3 SCH free electives"),
            new IBCredit("Philosophy","Philosophy", Minimum 4, "3 SCH free electives"),
            new IBCredit("Theatre","Theatre", Minimum 4, "3 SCH free electives"),
            new IBCredit("Visual Arts","Visual Arts", Minimum 4, "3 SCH free electives"),
            new IBCredit("Film","Film", Minimum 4, "3 SCH free electives"),

            // Minimum 5

            new IBCredit("Biology","Biology", Minimum 5, "GEOS 2302(Same as ENVR 2302 and GEOG 2302"),
            new IBCredit("French","IB French Lang and Culture", Minimum 5, "FREN 1311 & 1312"),
            new IBCredit("GeogrIBhy","IB Human GeogrIBhy", Minimum 5, "GEOG 2302"),
            new IBCredit("German","IB German Lang and Culture", Minimum 5, "GERM 1311 & 1312"),
            new IBCredit("Gov and Politics","IB Comp Gov and Politics", Minimum 5, "3 SCH free electives"),
            new IBCredit("Gov and Politics","IB US Gov and Politics", Minimum 5, "GOVT 2305"),
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
