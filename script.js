
const userProfile = {
    name: "Yerassyl",
    birthYear: 2005,
    isDeveloper: false,
    hobbies: ["Music", "Sports"],
    headline: "Learning Front-End Development"
};

$(document).ready(function() {
    console.log("jQuery is ready!");
    console.log(userProfile);

    $("h1").css("letter-spacing", "0.3px");
    $(".section-title").css("padding-bottom", "5px");
    $("#greeting").text("Hello, I'm " + userProfile.name);
    $("#headline").text(userProfile.headline);
    $("#birthYear").text(userProfile.birthYear);
    $("#age").text(new Date().getFullYear() - userProfile.birthYear);
    $("#developer").text(userProfile.isDeveloper ? "Yes" : "No");
    $("#hobbies").text(userProfile.hobbies.join(", "));
    $("#nameInput").val(userProfile.name);
    $("#liveName").text(userProfile.name);

    $("#lightBtn").on("click", function() {
        $("body").removeClass("dark");
        $("#headline").css("color", "#2879dc");
    });

    $("#darkBtn").on("click", function() {
        $("body").addClass("dark");
        $("#headline").css("color", "#9ccaff");
    });

    $("#headline").css("color", "#2879dc");

    $("#hideBtn").on("click", function() {
        $("#aboutDetails").hide();
    });

    $("#showBtn").on("click", function() {
        $("#aboutDetails").show();
    });

    $("#toggleBtn").on("click", function() {
        $("#aboutDetails").toggle();
    });

    $("#fadeInBtn").on("click", function() {
        $(".gallery-image").fadeIn(400);
    });

    $("#fadeOutBtn").on("click", function() {
        $(".gallery-image").fadeOut(400);
    });

    $("#fadeToggleBtn").on("click", function() {
        $(".gallery-image").fadeToggle(400);
    });

    $(".accordion-title").on("click", function() {
        $(this).parent().next(".accordion-panel").slideToggle(300);
    });

    $("#slideUpBtn").on("click", function() {
        $(".accordion-panel").slideUp(300);
    });

    $("#slideDownBtn").on("click", function() {
        $(".accordion-panel").slideDown(300);
    });

    function addSkill(atStart) {
        const skill = $("#newSkill").val().trim();

        if (skill === "") {
            $("#skillMessage").text("Please enter a skill.");
            return;
        }

        const item = $("<li>").text(skill);

        if (atStart) {
            $("#skillList").prepend(item);
        } else {
            $("#skillList").append(item);
        }

        $("#newSkill").val("");
        $("#skillMessage").text("Skill added.");
    }

    $("#addSkillBtn").on("click", function() {
        addSkill(false);
    });

    $("#prependSkillBtn").on("click", function() {
        addSkill(true);
    });

    $("#removeSkillBtn").on("click", function() {
        $("#skillList li").last().remove();
        $("#skillMessage").text("Last skill removed.");
    });

    let projectLink = false;

    $("#changeLinkBtn").on("click", function() {
        projectLink = !projectLink;

        $("#socialLink").attr("href", projectLink
            ? "https://github.com/Yerassyl077/assignment5-javascript"
            : "https://github.com/Yerassyl077");

        $("#socialLink").text(projectLink ? "My Assignment 5" : "My GitHub Profile");
    });

    $("#nameInput, #emailInput").on("input", function() {
        $("#liveName").text($("#nameInput").val());
        $("#liveEmail").text($("#emailInput").val());
    });

    $("#contactForm").on("submit", function(event) {
        event.preventDefault();

        userProfile.name = $("#nameInput").val().trim();
        $("#greeting").text("Hello, I'm " + userProfile.name);
        $("#formMessage").text("Name updated on this page.");
    });

    let barsVisible = false;

    $("#animateBtn").on("click", function() {
        barsVisible = !barsVisible;

        $(".skill-fill").each(function() {
            const target = barsVisible ? $(this).attr("data-level") + "%" : "0%";
            $(this).stop(true).animate({ width: target }, 700);
        });

        $(this).text(barsVisible ? "Reset My Skills" : "Animate My Skills");
    });
});
