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
            new APCredit("Chinese Language and Culture", "AP Chinese Language and Culture", 3, "CHIN 2311, CHIN 2312"),
            new APCredit("French Language and Culture", "AP French Language and Culture", 3, "FREN 2311, FREN 2312"),
            new APCredit("German Language and Culture", "AP German Language and Culture", 3, "GERM 2311, GERM 2312"),
            new APCredit("Italian Language and Culture", "AP Italian Language and Culture", 3, "ITAL 2311, ITAL 2312"),
            new APCredit("Japanese Language and Culture", "AP Japanese Language and Culture", 3, "JAPN 2311, JAPN 2312"),
            new APCredit("Latin", "AP Latin", 3, "LATN 2311, LATN 2312"),
            new APCredit("Spanish Language and Culture", "AP Spanish Language and Culture", 3, "SPAN 2311, SPAN 2312"),

            // 4s
            new APCredit("Art History", "AP Art History", 4, "ARTS 1301"),
            new APCredit("Biology", "AP Biology", 4, "BIOL 1401"),
            new APCredit("Calculus AB", "AP Calculus AB", 4, "MATH 2413"),
            new APCredit("Calculus BC", "AP Calculus BC", 4, "MATH 2413, MATH 2414"),
            new APCredit("Chemistry", "AP Chemistry", 4, "CHEM 1311, CHEM 1111"),
            new APCredit("Chinese Language and Culture", "AP Chinese Language and Culture", 4, "CHIN 2311, CHIN 2312"),
            new APCredit("Computer Science A", "AP Computer Science A", 4, "CS 1337"),
            new APCredit("Economics: Macroeconomics", "AP Macroeconomics", 4, "ECON 2301"),
            new APCredit("Economics: Microeconomics", "AP Microeconomics", 4, "ECON 2302"),
            new APCredit("English Language and Composition", "AP English Language and Composition", 4, "RHET 1302"),
            new APCredit("English Literature and Composition", "AP English Literature and Composition", 4, "ENGL 1301"),
            new APCredit("Environmental Science", "AP Environmental Science", 4, "GEOG 1301"),
            new APCredit("European History", "AP European History", 4, "HIST 2322"),
            new APCredit("French Language and Culture", "AP French Language and Culture", 4, "FREN 2311, FREN 2312"),
            new APCredit("German Language and Culture", "AP German Language and Culture", 4, "GERM 2311, GERM 2312"),
            new APCredit("Government and Politics: Comparative", "AP Government and Politics: Comparative", 4, "GOVT 2302"),
            new APCredit("Government and Politics: United States", "AP Government and Politics: United States", 4, "GOVT 2301"),
            new APCredit("Human Geography", "AP Human Geography", 4, "GEOG 1303"),
            new APCredit("Italian Language and Culture", "AP Italian Language and Culture", 4, "ITAL 2311, ITAL 2312"),
            new APCredit("Japanese Language and Culture", "AP Japanese Language and Culture", 4, "JAPN 2311, JAPN 2312"),
            new APCredit("Latin", "AP Latin", 4, "LATN 2311, LATN 2312"),
            new APCredit("Music Theory", "AP Music Theory", 4, "MUSI 1311"),
            new APCredit("Physics 1", "AP Physics 1", 4, "PHYS 1401"),
            new APCredit("Physics 2", "AP Physics 2", 4, "PHYS 1402"),
            new APCredit("Physics C: Electricity and Magnetism", "AP Physics C: Electricity and Magnetism", 4, "PHYS 2425"),
            new APCredit("Physics C: Mechanics", "AP Physics C: Mechanics", 4, "PHYS 2426"),
            new APCredit("Psychology", "AP Psychology", 4, "PSYC 2301"),
            new APCredit("Spanish Language and Culture", "AP Spanish Language and Culture", 4, "SPAN 2311, SPAN 2312"),
            new APCredit("Statistics", "AP Statistics", 4, "STAT 1342"),
            new APCredit("Studio Art: 2-D Design", "AP Studio Art: 2-D Design", 4, "ARTS 1311"),
            new APCredit("Studio Art: 3-D Design", "AP Studio Art: 3-D Design", 4, "ARTS 1312"),
            new APCredit("Studio Art: Drawing", "AP Studio Art: Drawing", 4, "ARTS 1316"),
            new APCredit("United States History", "AP United States History", 4, "HIST 1301, HIST 1302"),
            new APCredit("World History", "AP World History", 4, "HIST 2321"),

            // 5s
            new APCredit("Biology", "AP Biology", 5, "BIOL 1401, BIOL 1402"),
            new APCredit("Calculus AB", "AP Calculus AB", 5, "MATH 2413"),
            new APCredit("Calculus BC", "AP Calculus BC", 5, "MATH 2413, MATH 2414"),
            new APCredit("Chemistry", "AP Chemistry", 5, "CHEM 1311, CHEM 1111, CHEM 1312, CHEM 1112"),
            new APCredit("Computer Science A", "AP Computer Science A", 5, "CS 1337, CS 1338"),
            new APCredit("Economics: Macroeconomics", "AP Macroeconomics", 5, "ECON 2301"),
            new APCredit("Economics: Microeconomics", "AP Microeconomics", 5, "ECON 2302"),
            new APCredit("English Language and Composition", "AP English Language and Composition", 5, "RHET 1302"),
            new APCredit("English Literature and Composition", "AP English Literature and Composition", 5, "ENGL 1301"),
            new APCredit("Environmental Science", "AP Environmental Science", 5, "GEOG 1301"),
            new APCredit("European History", "AP European History", 5, "HIST 2322"),
            new APCredit("Government and Politics: Comparative", "AP Government and Politics: Comparative", 5, "GOVT 2302"),
            new APCredit("Government and Politics: United States", "AP Government and Politics: United States", 5, "GOVT 2301"),
            new APCredit("Human Geography", "AP Human Geography", 5, "GEOG 1303"),
            new APCredit("Physics 1", "AP Physics 1", 5, "PHYS 1401"),
            new APCredit("Physics 2", "AP Physics 2", 5, "PHYS 1402"),
            new APCredit("Physics C: Electricity and Magnetism", "AP Physics C: Electricity and Magnetism", 5, "PHYS 2425"),
            new APCredit("Physics C: Mechanics", "AP Physics C: Mechanics", 5, "PHYS 2426"),
            new APCredit("Psychology", "AP Psychology", 5, "PSYC 2301"),
            new APCredit("Statistics", "AP Statistics", 5, "STAT 1342"),
            new APCredit("United States History", "AP United States History", 5, "HIST 1301, HIST 1302"),
            new APCredit("World History", "AP World History", 5, "HIST 2321"),
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