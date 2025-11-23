// Generate barcode
function generateBarcode() {
  const text = document.getElementById('barcodeText').value;
  if (!text) {
    alert("Please enter a product name");
    return;
  }
  JsBarcode("#barcode", text, { format: "CODE128", lineColor: "#000", width: 2, height: 50 });
}

// Scan barcode
function startScanner() {
  const html5QrCode = new Html5Qrcode("scanner");

  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText, decodedResult) => {
      document.getElementById('scanResult').innerText = "Scanned: " + decodedText;
      html5QrCode.stop(); // stop after first scan
    },
    (errorMessage) => {
      console.log("Scan error: ", errorMessage);
    }
  ).catch(err => {
    alert("Camera access denied or not supported: " + err);
  });
}
