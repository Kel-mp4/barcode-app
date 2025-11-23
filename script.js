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
    const scannerDivId = "scanner";
    const html5QrCode = new Html5Qrcode(scannerDivId);

    Html5Qrcode.getCameras().then(cameras => {
        if (cameras && cameras.length) {
            const cameraId = cameras[0].id; // use first available camera
            html5QrCode.start(
                cameraId,
                { fps: 10, qrbox: 250 },
                (decodedText, decodedResult) => {
                    document.getElementById('scanResult').innerText = "Scanned: " + decodedText;
                    addToInventory(decodedText);
                    html5QrCode.stop();
                },
                (errorMessage) => {
                    console.log("Scan error:", errorMessage);
                }
            ).catch(err => {
                alert("Failed to start camera: " + err);
            });
        } else {
            alert("No cameras found on this device.");
        }
    }).catch(err => {
        alert("Camera permission denied or not supported: " + err);
    });
}

