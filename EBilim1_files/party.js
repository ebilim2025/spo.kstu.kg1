document.addEventListener("DOMContentLoaded", function () {
    const authPageWrapper = document.querySelector(".auth-page-wrapper");
    const background_1 = document.getElementById("party_background_1");
    const background_2 = document.getElementById("party_background_2");
    const background_3 = document.getElementById("party_background_3");
    const partyHat = document.getElementById("party_hat");
    const hatImage = document.createElement("img");

    const today = new Date();
    const currentYear = today.getFullYear();

    const startNewYear = new Date(`${currentYear}-12-15`);
    const endNewYear = new Date(`${currentYear}-01-15`);
   

    const isNewYear = (today >= startNewYear ||  today <= endNewYear);
    if (isNewYear) {
        background_1.classList.add("ftco-section", "snow1");
        background_2.classList.add("snow2");
        background_3.classList.add("snow3");
        authPageWrapper.classList.remove("auth-bg-cover");
        hatImage.src = "/lib/image/shapka13.svg";
        hatImage.alt = "Santa Hat";
        hatImage.classList.add("party_hat_santa-image");
        partyHat.appendChild(hatImage);
    }

    const isKalpak = (today.getMonth() === 2 && (today.getDate() === 3 || today.getDate() === 4 || today.getDate() === 5));
    if (isKalpak) {
        hatImage.src = "/img/kalpak.png";
        hatImage.alt = "Santa Hat";
        hatImage.classList.add("party_hat_kalpak-image");
        partyHat.appendChild(hatImage);
    }

    const isValentinesDay = (today.getMonth() === 1 && today.getDate() === 14);
    if (isValentinesDay) {
        authPageWrapper.classList.remove("auth-bg-cover");
        authPageWrapper.classList.add("valentine_background");
    }
});
