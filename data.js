function getData() {
    //Added just in case we want to check if a current student has taken a course
    const Status = {
        Complete: "complete",
        Current: "current",
        Failed: "failed"
    }

    class Course {
        id;
        code;
        name;
        prerequisites;
        corequisites;
        semester;

        constructor(id, code, name, prerequisites = [], corequisites = [], semester) {
            this.id = id;
            this.code = code;
            this.name = name;
            this.prerequisites = prerequisites;
            this.corequisites = corequisites;
            this.semester = semester;
        }
    }

    let courseData = {
        //commented out courses are not "required" but are still part of the degree plan
        courses: [
            //--------------------SEMESTER 1--------------------
            new Course(0, "ECS 1100", "Intro to Engr & CS", [], [], "1"),
            new Course(1, "CE 1100", "Intro to Comp Eng", [], [], "1"),
            new Course(2, "MATH 2413", "Calculus I", [], [], "1"),
            new Course(3, "CORE", "CORE", [], [], "1"),
            new Course(4, "CS 1436", "Programming Fundamentals", [], [], "1"),
            //--------------------SEMESTER 2--------------------
            new Course(5, "ENGR 2300", "Linear Algebra for Engineers", [], [], "2"),
            new Course(6, "MATH 2414", "Calculus II", ["MATH 2415"], [], "2"),
            new Course(7, "PHYS 2325/2125", "Mechanics and Lab", ["PHYS 2326/2126"], [], "2"),
            new Course(8, "CE 1337", "Computer Science I", ["CS 1436"], [], "2"),
            new Course(9, "CE 1202", "Intro to Computer Eng II", ["CE 1100"], [], "2"),
            new Course(10, "CE 2310", "Intro to Digital Systems", [], [], "2"),
            //--------------------SEMESTER 2.5--------------------
            new Course(11, "MATH 2415", "Calculus of Several Variables", ["MATH 2414"], [], "2.5"),
            //--------------------SEMESTER 3--------------------
            new Course(12, "MATH 2420", "Differential Equations", ["MATH 2415"], [], "3"),
            new Course(13, "CE 2305", "Discrete Mathematics I", ["MATH 2413"], [], "3"),
            new Course(14, "PHYS 2326/2126", "Electricity and Magnetism and Lab", ["PHYS 2325/2125"], [], "3"),
            new Course(15, "ENGR 3341", "Engineering Probability and Statistics", ["MATH 2413"], [], "3"),
            new Course(16, "CE 2336", "Computer Science II", ["CE 1337"], [], "3"),
            //--------------------SEMESTER 4--------------------
            new Course(17, "CE 3201", "Fundamentals I", ["CE 1202", "RHET 1302"], [], "4"),
            new Course(18, "CE 2301", "Electrical Network Analysis", ["MATH 2420", "PHYS 2326/2126"], [], "4"),
            new Course(19, "CE 3320", "Digital Circuits", ["CE 2310"], [], "4"),
            new Course(20, "CE 3345", "Data Structures and Introduction to Algorithmic", ["CE 2336", "CE 2305"], [], "4"),
            new Course(21, "CORE", "CORE", [], [], "4"),
            new Course(22, "CORE", "CORE", [], [], "4"),
            //--------------------SEMESTER 5--------------------
            new Course(23, "CE 3303", "Signals and Systems", ["MATH 2420"], [], "5"),
            new Course(24, "CE 3354", "Software", ["CE 2336", "CE 2305"], [], "5"),
            new Course(25, "CE 3311", "Electronics I", ["CE 2301"], [], "5"),
            new Course(26, "CE 3161", "Social Issues and Ethics in Engineering", [], [], "5"),
            new Course(27, "ECS 2390", "Professional and Technical Communication", [], [], "5"),
            new Course(28, "CE 3202", "Fundamentals II", ["CE 3201"], [], "5"),
            //--------------------SEMESTER 6--------------------
            new Course(29, "CE 4304", "Computer Architecture", ["CE 3320"], [], "6"),
            new Course(30, "CE 4370", "Embedded Systems", ["CE 3320"], [], "6"),
            new Course(31, "CE 42XX", "Technical Elective", [], [], "6"),
            new Course(32, "CORE", "CORE", [], [], "6"),
            new Course(33, "CORE", "CORE", [], [], "6"),
            new Course(34, "CORE", "CORE", [], [], "6"),
            //--------------------SEMESTER 7--------------------
            new Course(35, "CE 4388", "Senior Design I", ["CE 4370"], [], "7"),
            new Course(36, "CE 4348", "Operating Systems Concepts", ["CE 2336"], [], "7"),
            new Course(37, "MATH XXXX", "MATH Technical Elective", [], [], "7"),
            new Course(38, "XXXX", "Free Elective", [], [], "7"),
            new Course(39, "CORE", "CORE", [], [], "7"),
            //--------------------SEMESTER 8--------------------
            new Course(40, "CE 4389", "Senior Design II", ["CE 4388"], [], "8"),
            new Course(41, "CE 42XX", "CE Technical Elective", [], [], "8"),
            new Course(42, "CE 42XX", "CE Technical Elective", [], [], "8"),
            new Course(43, "XXXX", "Free Elective", [], [], "8"),
            new Course(44, "CORE", "CORE", [], [], "8")
        ],

        getCourseById: function (id) {
            return this.courses.find(course => course.id === id);
        },

        getCourseByName: function (name) {
            return this.courses.find(course => course.name === name);
        },

        getCoursesBySemester: function (semester) {
            return this.courses.filter(course => course.semester === semester);
        },

        getPrerequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.prerequisites.flatMap(prereqId => 
                [prereqId, ...this.getPrerequisiteSequence(prereqId)]
            );
        },

        getCorequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.corequisites.flatMap(coreqId => 
                [coreqId, ...this.getCorequisiteSequence(coreqId)]
            );
        },

        getPostrequisiteSequence: function (courseId) {
            const course = this.getCourseById(courseId);
            if (!course) return [];
            return course.postrequisites.flatMap(postreqId => 
                [postreqId, ...this.getPostrequisiteSequence(postreqId)]
            );
        }
    };

    return courseData;
}