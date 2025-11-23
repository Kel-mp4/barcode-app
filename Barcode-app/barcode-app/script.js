// Generate barcode
function generateBarcode() {
  const text = document.getElementById('barcodeText').value;
  JsBarcode("#barcode", text, { format: "CODE128" });
}

// Scan barcode
function startScanner() {
  const html5QrCode = new Html5Qrcode("scanner");
  html5QrCode.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText, decodedResult) => {
      document.getElementById('scanResult').innerText = "Scanned: " + decodedText;
      html5QrCode.stop();
    },
    (errorMessage) => {
      console.log("Scan error: ", errorMessage);
    }
  );
}
