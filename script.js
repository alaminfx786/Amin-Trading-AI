document.addEventListener("DOMContentLoaded", function () {
    console.log("Amin Trading AI Loaded");

    const signals = document.querySelectorAll(".card p");

    signals.forEach(signal => {
        signal.innerHTML = "⏳ AI Analyzing Market...";
    });

    setTimeout(() => {
        signals.forEach(signal => {
            signal.innerHTML = "🟢 Waiting for High Probability Setup";
        });
    }, 3000);
});
