document.addEventListener("DOMContentLoaded", function () {
    const commentsContainer = document.querySelector(".comments-container");

    const comments = [
        //need more data!!!
        { text: "UTD has been a transformative experience for me. The courses were challenging but rewarding.", name: "Alumni A", img: "assets/utd_png.png" },
        { text: "The faculty at UTD are exceptional. They are always willing to help and provide valuable insights.", name: "Alumni B", img: "assets/utd_png.png" },
        { text: "I made lifelong friends and connections at UTD. It was an amazing journey.", name: "Alumni C", img: "assets/utd_png.png" },
        { text: "The campus facilities are top-notch and provide everything a student could need.", name: "Alumni D", img: "assets/utd_png.png" },
        { text: "UTD's focus on research and innovation helped me in my career.", name: "Alumni E", img: "assets/utd_png.png" },
        { text: "The diverse student body made my experience at UTD enriching.", name: "Alumni F", img: "assets/utd_png.png" },
        { text: "UTD's career services were invaluable in helping me secure my first job.", name: "Alumni G", img: "assets/utd_png.png" },
        { text: "The projects and hands-on learning experiences at UTD are unparalleled.", name: "Alumni H", img: "assets/utd_png.png" },
        { text: "UTD's focus on technology and innovation is impressive.", name: "Alumni I", img: "assets/utd_png.png" },
        { text: "The support from faculty and staff at UTD was amazing.", name: "Alumni J", img: "assets/utd_png.png" },
        { text: "UTD offers a great balance between academics and extracurricular activities.", name: "Alumni K", img: "assets/utd_png.png" },
        { text: "I appreciated the opportunities for networking and professional growth at UTD.", name: "Alumni L", img: "assets/utd_png.png" },
        { text: "The collaborative environment at UTD helped me grow both personally and professionally.", name: "Alumni M", img: "assets/utd_png.png" },
        { text: "UTD's state-of-the-art labs and facilities are incredible.", name: "Alumni N", img: "assets/utd_png.png" },
        { text: "The community at UTD is very supportive and encouraging.", name: "Alumni O", img: "assets/utd_png.png" }
    ];

    comments.forEach((comment, index) => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = `
            <img src="${comment.img}" alt="${comment.name}" class="profile-pic">
            <div class="comment-text">
                <p>"${comment.text}"</p>
                <p>- ${comment.name}</p>
            </div>
        `;
        commentsContainer.appendChild(commentDiv);
    });

    let currentComment = 0;

    function showNextComment() {
        const commentElements = document.querySelectorAll(".comment");
        if (currentComment < commentElements.length) {
            commentElements.forEach(comment => comment.classList.remove("comment-visible"));
            commentElements[currentComment].classList.add("comment-visible");
            currentComment++;
        } else {
            currentComment = 0;
            commentElements.forEach(comment => comment.classList.remove("comment-visible"));
            commentElements[currentComment].classList.add("comment-visible");
            currentComment++;
        }
    }

    setInterval(showNextComment, 5000); // Change comment every 5 seconds

    // Ensure comments are centered and responsive on resize
    window.addEventListener('resize', () => {
        const commentElements = document.querySelectorAll(".comment");
        commentElements.forEach(comment => {
            comment.style.width = "90%";
            comment.style.maxWidth = "800px";
        });
    });

    // Initial resize call to set sizes correctly
    window.dispatchEvent(new Event('resize'));
});
