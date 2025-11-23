// Generate barcode
function generateBarcode() {
  const text = document.getElementById('barcodeText').value;
  if (!text) return alert("Enter a product name");
  JsBarcode("#barcode", text, { format: "CODE128", width: 2, height: 50 });
}

// Inventory
let inventory = JSON.parse(localStorage.getItem("inventory")) || [];
function addToInventory(barcode) {
  inventory.push(barcode);
  localStorage.setItem("inventory", JSON.stringify(inventory));
  displayInventory();
}

function displayInventory() {
  const list = document.getElementById("inventoryList");
  if (!list) return;
  list.innerHTML = "";
  inventory.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}
window.onload = displayInventory;

// Scanner
document.getElementById("startScan").addEventListener("click", () => {
  const scannerDiv = "scanner";
  const html5QrCode = new Html5Qrcode(scannerDiv);

  Html5Qrcode.getCameras().then(cameras => {
    if (cameras && cameras.length) {
      html5QrCode.start(
        cameras[0].id,
        { fps: 10, qrbox: 250 },
        (decodedText) => {
          document.getElementById('scanResult').innerText = "Scanned: " + decodedText;
          addToInventory(decodedText);
          html5QrCode.stop();
        },
        (errorMessage) => {
          console.log("Scan error:", errorMessage);
        }
      ).catch(err => {
        alert("Cannot start camera: " + err);
      });
    } else {
      alert("No cameras found.");
    }
  }).catch(err => {
    alert("Camera access denied: " + err);
  });
});
