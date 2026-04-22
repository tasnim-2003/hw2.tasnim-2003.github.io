// ================= FORM VALIDATION =================
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    return true;
}


// ================= PROJECTS TOGGLE =================
function toggleDescription(id) {
    var desc = document.getElementById(id);

    if (desc.style.display === "none") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}


// ================= CV EVENTS =================
function setupBlockquoteEvents() {
    var block = document.querySelector("blockquote");

    if (block) {
        block.addEventListener("mouseover", function () {
            block.style.backgroundColor = "#fce4ec";
            block.style.fontStyle = "italic";
        });

        block.addEventListener("mouseout", function () {
            block.style.backgroundColor = "";
            block.style.fontStyle = "normal";
        });
    }
}


// ================= HOMEPAGE DATE =================
function addLoadDate() {
    var footer = document.querySelector("footer");

    if (footer) {
        var p = document.createElement("p");

        var now = new Date();

        var text = document.createTextNode("Page loaded on: " + now);

        p.appendChild(text);
        footer.appendChild(p);
    }
}


// ================= RUN WHEN PAGE LOADS =================
window.onload = function () {
    addLoadDate();
    setupBlockquoteEvents();
};
