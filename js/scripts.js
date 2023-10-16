// elements selection
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// functions

// events
function generateQrCode() {
    const qrCodeInputValue = qrCodeInput.value;
    if(!qrCodeInputValue) return;

    qrCodeBtn.innerText = "Generating code...";

    // API call
    //goqr.me/api

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;
    
    qrCodeImg.addEventListener("load", ()=> {
        container.classList.add("active");
        qrCodeBtn.innerText = "QR Code generated!";
    });
    
}

qrCodeBtn.addEventListener("click",  ()=> {
    generateQrCode();
});

qrCodeInput.addEventListener("keydown",  (e)=> {
    if(e.code === "Enter"){
        generateQrCode();
    }
});
