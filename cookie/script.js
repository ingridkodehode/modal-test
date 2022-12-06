const modalEL = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");

setTimeout(function () {
  modalEL.style.display = "inline";
}, 1500);

modalCloseBtn.addEventListener("click", function () {
  modalEL.style.display = "none";
});

consentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const consentFormData = new FormData(consentForm);
  const name = consentFormData.get("fullName");
  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
  </div>`;
  setTimeout(function () {
    document.getElementById("upload-text").innerText = `Making the sale...`;
  }, 1500);
  setTimeout(function () {
    document.getElementById("modal-inner").innerHTML = `
    <h2>Thanks, <span class="modal-display-name"> ${name}</span>!</h2>
    <p>We just sold your soul.</p>
    <div class="idiot-gif">
    <img src="/images/i.jpg">
    </div>
    `;
    consentForm.innerHTML = "";
  }, 3000);
});
