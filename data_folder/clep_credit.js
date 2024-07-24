function getCLEPCreditData() {
    class CLEPCredit {
        constructor(subject, test, score, creditAwarded) {
            this.subject = subject;
            this.test = test;
            this.score = score;
            this.creditAwarded = creditAwarded;
        }
    }

    let clepCreditData = {
        credits: [
            // Foreign Languages
            new CLEPCredit("French Language","French Language: Level 1", 50, "FREN 1311/FREN 1312"),
            new CLEPCredit("French Language","French Language: Level 2", 58, "FREN 1311/FREN 1312 & FREN 2311/FREN 2312"),
            new CLEPCredit("German Language","German Language: Level 1", 50, "GERM 1311/GERM 1312"),
            new CLEPCredit("German Language","German Language: Level 2", 58, "GERM 1311/GERM 1312 & GERM 2311/GERM 2312"),
            new CLEPCredit("Spanish Language","Spanish Language: Level 1", 50, "SPAN 1311/SPAN 1312"),
            new CLEPCredit("Spanish Language","Spanish Language: Level 2", 60, "SPAN 1311†/SPAN 1312† & SPAN 2311†"),
            new CLEPCredit("Spanish with Writing","Spanish with Writing Level 1 Proficiency", 50, "SPAN 1311/SPAN 1312"),
            new CLEPCredit("Spanish with Writing","Spanish with Writing Level 2 Proficiency", 65, "SPAN 1311/SPAN 1312 & SPAN 2311/SPAN 2312"),
        
            
            // Social Science and History
            new CLEPCredit("American Government","American Government", 50, "GOVT 2305†"),
            new CLEPCredit("American History","American History I: Early Colonization to 1877", 60, "HIST 1301†"),
            new CLEPCredit("American History","American History II: 1865 to Present", 60, "HIST 1302†"),
            new CLEPCredit("Human Growth and Development","Human Growth and Development", 50, "PSY 2314†"),
            new CLEPCredit("Introduction to Educational Psychology","Introduction to Educational Psychology", 50, "3 SCH Psychology elective credit"),
            new CLEPCredit("Principles of Macroeconomics","Principles of Macroeconomics", 50, "ECON 2301†"),
            new CLEPCredit("Principles of Microeconomics","Principles of Microeconomics", 50, "ECON 2302†"),
            new CLEPCredit("Introductory Psychology","Introductory Psychology", 50, "PSY 2301†"),
            new CLEPCredit("Economics","AP MacroEconomics", 4, "ECON 2301"),
            new CLEPCredit("Economics","AP MicroEconomics", 4, "ECON 2302"),
            new CLEPCredit("Western Civilization","Western Civilization I: Ancient Near East to 1648", 50, "HUMA 1301†"),
            new CLEPCredit("Western Civilization","Western Civilization II: 1648 to Present", 50, "HUMA 1301†"),
            

            // Science and Mathematics
            new CLEPCredit("Calculus","Calculus", 50, "MATH 2312† and MATH 2413†"),
            new CLEPCredit("Calculus","Calculus", 61, "MATH 2312† and MATH 2417†"),
            new CLEPCredit("Studio Art-Drawing","AP Studio Art Drawing", 5, "ARTS 1316"),
            new CLEPCredit("College Algebra","College Algebra", 50, "MATH 1314†"),
            new CLEPCredit("Biology","Biology", 56, "BIOL 2311†/2111 and BIOL 2312†/2112"),
            new CLEPCredit("Chemistry","Chemistry", 60, "CHEM 1311†/1111"),
            new CLEPCredit("Chemistry","Chemistry", 70, "CHEM 1311†/1111 and CHEM1312†/1112"),
            new CLEPCredit("Pre-calculus","Pre-calculus", 58, "MATH 2312†"),
            
            
            // Business
            new CLEPCredit("Information Systems","Information Systems", 50, "3 SCH Business Computer Information Systems elective credit"),
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

    return clepCreditData;
}
