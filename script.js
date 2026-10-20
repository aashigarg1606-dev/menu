/* =========================
   EXAM COUNTDOWN
========================= */

const examDate =
    new Date("October 12, 2026 09:00:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = examDate - now;


    if (difference <= 0) {

        document.getElementById("countdown").innerHTML =
            "MT-1 HAS STARTED!";

        return;
    }


    const days =
        Math.floor(
            difference / (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (difference % (1000 * 60 * 60))
            / (1000 * 60)
        );


    const seconds =
        Math.floor(
            (difference % (1000 * 60))
            / 1000
        );


    document.getElementById("countdown").innerHTML =
        `${days} DAYS ${hours} HOURS ${minutes} MINUTES ${seconds} SECONDS`;
}


updateCountdown();

setInterval(updateCountdown, 1000);



/* =========================
   PYQ LIBRARY
========================= */


function showPYQ(subject) {

    const results =
        document.getElementById("pyq-results");


    results.innerHTML = `

        <h2>${subject} PYQs</h2>


        <div class="pyq-card">

            <h3>MT-1 — Previous Year Questions</h3>

            <p>
                Previous-year questions and study material
                for ${subject} will appear here.
            </p>

            <button>
                VIEW QUESTIONS
            </button>

        </div>


        <div class="pyq-card">

            <h3>MT-2 — Previous Year Questions</h3>

            <p>
                Previous-year questions and study material
                for ${subject} will appear here.
            </p>

            <button>
                VIEW QUESTIONS
            </button>

        </div>

    `;
}
/* =========================
   DOUBT HUB
========================= */

let selectedSubject = "";


function selectSubject(subject) {

    selectedSubject = subject;

    alert("Selected subject: " + subject);
}


function postDoubt() {

    const title =
        document.getElementById("doubtTitle").value;

    const description =
        document.getElementById("doubtDescription").value;


    if (selectedSubject === "") {

        alert("Please select a subject first.");

        return;
    }


    if (title === "" || description === "") {

        alert("Please enter your doubt.");

        return;
    }


    const results =
        document.getElementById("doubt-results");


    const newDoubt =
        document.createElement("div");


    newDoubt.className = "doubt-card";


    newDoubt.innerHTML = `

        <span class="subject-tag">
            ${selectedSubject}
        </span>

        <h3>
            ${title}
        </h3>

        <p>
            ${description}
        </p>

        <button>
            VIEW SOLUTION
        </button>

    `;


    results.appendChild(newDoubt);


    document.getElementById("doubtTitle").value = "";

    document.getElementById("doubtDescription").value = "";

}
/* =========================
   VIDEO SOLUTIONS
========================= */

function showVideos(subject) {

    const results =
        document.getElementById("video-results");


    results.innerHTML = `

        <h2>${subject} Video Solutions</h2>


        <div class="video-card">

            <h3>
                ${subject} — Important Concepts
            </h3>

            <p>
                Step-by-step explanation for important
                topics and exam preparation.
            </p>

            <button>
                ▶ WATCH VIDEO
            </button>

        </div>


        <div class="video-card">

            <h3>
                ${subject} — PYQ Solutions
            </h3>

            <p>
                Detailed solutions to previous-year
                questions.
            </p>

            <button>
                ▶ WATCH VIDEO
            </button>

        </div>

    `;
}
/* =========================
   EXAM MODE
========================= */

function startExamMode() {

    const message =
        document.getElementById("exam-message");

    message.innerHTML = `
        <p>
            🎯 EXAM MODE ACTIVATED
        </p>

        <p>
            Stay focused. You've got this!
        </p>
    `;

}
/* =========================
   PROFILE
========================= */

function editProfile() {

    const name = prompt("Enter your name:");

    if (name === null || name.trim() === "") {
        return;
    }

    alert("Profile updated for " + name);

}