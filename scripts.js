// Form Validation
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill out all required fields.");
        return false;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email.");
        return false;
    }

    return true;
}

function toggleDesc(id, btn) {
    var desc = document.getElementById(id);

    if (desc.style.display === "none") {
        desc.style.display = "block";
        btn.innerText = "Hide";
    } else {
        desc.style.display = "none";
        btn.innerText = "Show";
    }
}

// Add Date to Footer
function addDate() {
    var footer = document.getElementById("footer");

    if (footer) {
        var p = document.createElement("p");
        var date = new Date();
        var text = document.createTextNode("Page loaded on: " + date);

        p.appendChild(text);
        footer.appendChild(p);
    }
}

window.onload = function () {

    var quote = document.getElementById("quote");

    if (quote) {
        quote.addEventListener("mouseover", function () {
            quote.style.backgroundColor = "#f3e5f5";
            quote.style.fontStyle = "italic";
        });

        quote.addEventListener("mouseout", function () {
            quote.style.backgroundColor = "transparent";
            quote.style.fontStyle = "normal";
        });
    }

    addDate();
};