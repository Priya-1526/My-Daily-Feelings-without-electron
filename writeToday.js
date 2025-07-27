const buttons = document.querySelectorAll(".btn");
const dashboard = document.querySelector(".dashboardDiv");
const textareas = document.querySelectorAll("textarea");
const saveBtn = document.getElementById("save-btn");

let selectedColor = null;

function countLines(textarea) {
    const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
    return Math.floor(textarea.scrollHeight / lineHeight);
}

textareas.forEach((textarea) => {
    textarea.addEventListener("input", function () {
        if (countLines(this) > 4) {
            this.value = this.value.slice(0, -1);
        }
    });

    textarea.addEventListener("keydown", function (e) {
        if (e.key === "Enter" && countLines(this) >= 4) {
            e.preventDefault();
        }
    });
});

const removeHoverClasses = () => {
    dashboard.classList.remove(
        "hover-bg1", "hover-bg2", "hover-bg3", "hover-bg4",
        "hover-bg5", "hover-bg6", "hover-bg7", "hover-bg8"
    );

    buttons.forEach((btn) => {
        btn.classList.remove(
            "hover-btn-bg1", "hover-btn-bg2", "hover-btn-bg3", "hover-btn-bg4",
            "hover-btn-bg5", "hover-btn-bg6", "hover-btn-bg7", "hover-btn-bg8",
            "selected-btn"
        );
    });
};

buttons.forEach((btn) => {
    const colorIndex = btn.id.slice(-1);

    btn.addEventListener("mouseenter", () => {
        if (!selectedColor) {
            removeHoverClasses();
            dashboard.classList.add(`hover-bg${colorIndex}`);
            buttons.forEach((b) => b.classList.add(`hover-btn-bg${colorIndex}`));
        }
    });

    btn.addEventListener("mouseleave", () => {
        if (!selectedColor) {
            removeHoverClasses();
        }
    });

    btn.addEventListener("click", () => {
        selectedColor = colorIndex;
        removeHoverClasses();
        dashboard.classList.add(`hover-bg${colorIndex}`);
        buttons.forEach((b) => {
            b.classList.add(`hover-btn-bg${colorIndex}`);
            b.classList.remove("selected-btn");
        });
        btn.classList.add("selected-btn");
    });
});


saveBtn.addEventListener("click", () => {
    saveBtn.classList.add('hidden');

    setTimeout(() => {
        html2canvas(document.body).then(canvas => {
            const link = document.createElement("a");
            link.download = `feeling-${new Date().toISOString().slice(0,10)}.png`;
            link.href = canvas.toDataURL();
            link.click();

            alert("✅ Screenshot saved!");

            setTimeout(() => {
                saveBtn.classList.remove('hidden');
                window.location.href = "index.html"; // Optional redirect
            }, 500);
        }).catch(error => {
            console.error("Screenshot error:", error);
            alert("❌ Failed to capture screenshot.");
            saveBtn.classList.remove('hidden');
        });
    }, 200);
});
