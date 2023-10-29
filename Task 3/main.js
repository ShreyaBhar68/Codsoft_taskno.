document.addEventListener("DOMContentLoaded", function () {
    const screen = document.getElementById("screen");
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            if (button.textContent === "C") {
                screen.value = "";
            } else if (button.textContent === "=") {
                try {
                    screen.value = eval(screen.value);
                } catch (error) {
                    screen.value = "Error";
                }
            } else if (button.textContent === "Del") {
                screen.value = screen.value.slice(0, -1);
            } else {
                screen.value += button.textContent;
            }
        });
    });
});