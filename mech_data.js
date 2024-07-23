function getData() {
    // Added just in case we want to check if a current student has taken a course
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
        description;

        constructor(id, code, name, prerequisites = [], corequisites = [], semester, description = "") {
            this.id = id;
            this.code = code;
            this.name = name;
            this.prerequisites = prerequisites;
            this.corequisites = corequisites;
            this.semester = semester;
            this.description = description;
        }
    }

    let courseData = {
        // Commented out courses are not "required" but are still part of the degree plan
        courses: [

            //new Course(id, code, name, prereq [], coreq[], semester, desc [])
            //--------------------SEMESTER 1--------------------
            new Course(0, "MECH 1100", "Introduction to MECH 1", [], [], "1", []),
            new Course(1, "ECS 1100", "Intro to Eng and CS", [], [], "1", []),
            new Course(2, "MATH 2417", "Calculus 1", [], [], "1", []),
            new Course(3, "CHEM 1311/1111", "Gen Chemistry 1", [], [], "1", []),
            new Course(4, "CS 1325", "Introduction to programming", [], ["MATH 2417"], "1", []),
            new Course(5, "CORE", "CORE", [], [], "1", []),
            //--------------------SEMESTER 2--------------------
            new Course(6, "MECH 1208", "Introduction to MECH 2", ["MECH 1100"], ["MATH 2419", "PHYS 2325/2125"], "2", []),
            new Course(7, "PHYS 2325/2125", "Mechanics/ lab", ["MATH 2417"], ["MATH 2419"], "2", []),
            new Course(8, "MATH 2419", "Calculus 2", ["MATH 2417"], [], "2", []),
            new Course(9, "ENGR 2300", "Applied Linear Algebra", [], ["MATH 2419"], "2", []),
            new Course(10, "CORE", "CORE", [], [], "2", []),
            //--------------------SEMESTER 3--------------------
            new Course(11, "MECH 2310", "Statics", ["PHYS 2325/2125", "MATH 2419", "MECH 1208"], [], "3", []),
            new Course(12, "MATH 2420", "Differential Equations", ["MATH 2419"], [], "3", []),
            new Course(13, "ENGR 3300", "Advanced Engineering Math", ["ENGR 2300", "MATH 2419"], ["MATH 2420"], "3", []),
            new Course(14, "PHYS 2326/2126", "Electricity and Magnetism/ lab", ["PHYS 2325/2125", "MATH 2419"], [], "3", []),
            new Course(15, "CORE", "CORE", [], [], "3", []),
            //--------------------SEMESTER 4--------------------
            new Course(16, "MECH 2330", "Dynamics", ["MECH 2310"], ["ENGR 2300", "MATH 2420"], "4", []),
            new Course(17, "MECH 3310", "Thermodynamics", ["MECH 1208", "ENGR 3300", "PHYS 2325/2125"], ["CHEM 1311/1111"], "4", []),
            new Course(18, "MECH 2320/2120", "Mechanics of Materials/ lab", ["MATH 2419", "MECH 2310"], [], "4", [] ),
            new Course(19, "ENGR 3341", "Probability and Statistics", ["MATH 2419"], ["MATH 2420"], "4", []),
            new Course(20, "CORE", "CORE", [], [], "4", []),
            //--------------------SEMESTER 5--------------------
            new Course(21, "MECH 3315", "Fluid Mechanics", ["ENGR 3300", "MECH 2330"], ["MECH 3310"], "5", [] ),
            new Course(22, "MECH 3305/3105", "Computer Aided Design/ lab", ["ENGR 2300"], ["CS 1325"], "5", []  ),
            new Course(23, "MECH 3350", "Kinematics and Dynamics", ["ENGR 2300", "MATH 2420", "ENGR 3300", "MECH 2330"], [], "5", []),
            new Course(24, "ECS 2390", "Professional and Technical Comm.", ["RHET 1302"], [], "5", []),
            new Course(25, "CORE", "CORE", [], [], "5", []),
            //--------------------SEMESTER 6--------------------
            new Course(26, "MECH 3340", "Systems Dynamics Modeling & Analysis", ["MECH 3315"], [], "6", []),
            new Course(27, "MECH 3320", "Heat Transfer", ["MECH 3315", "MECH 3310"], [], "6", []),
            new Course(28, "MECH 3351", "Design of Mechanical Systems", ["ENGR 3300", "MECH 2320/2120"], ["MECH 3350"], "6", []),
            new Course(29, "MECH 3150", "Kinematics & Dynamics lab", ["MECH 3350"], [], "6", []),
            new Course(30, "MECH 3115", "Fluid Mechanics Lab", ["MECH 3315"], [], "6", []),
            new Course(31, "CORE", "CORE", [], [], "6", []),
            new Course(32, "CORE", "CORE", [], [], "6", []),
            //--------------------SEMESTER 7--------------------
            new Course(33, "MECH 4381", "Senior Design 1", ["MECH 3351", "MECH 3340", "MECH 3320", "ECS 2390", "MECH 3305/3105"], [], "7", []),
            new Course(34, "MECH 3120", "Heat Transfer Lab", ["MECH 3320"], [], "7", []),
            new Course(35, "MECH 4310/4140", "Systems and Controls/ lab", ["MECH 3340"], [], "7", []),
            new Course(36, "Technical Elective", "Technical Elective", [], [], "7", []),
            new Course(37, "CORE", "CORE", [], [], "7", []),
            //--------------------SEMESTER 8--------------------
            new Course(38, "MECH 4382", "Senior Design 2", ["MECH 4381"], [], "8", []),
            new Course(39, "Free Elective or MATH 2413", "Free Elective or MATH 2413", [], [], "8", []),
            new Course(40, "Technical Elective", "Technical Elective", [], [], "8", []),
            new Course(41, "Technical Elective", "Technical Elective", [], [], "8", []),
            new Course(42, "Technical Elective", "Technical Elective", [], [], "8", []),

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
