const status = document.getElementById("status");
document.getElementById("record").addEventListener("click", async () => {
  const payload = { savedAt: new Date().toISOString(), product: "date-meeting-qr-mini-tools" };
  if (globalThis.chrome?.storage?.local) {
    await chrome.storage.local.set({ "date-meeting-qr-mini-tools-last-note": payload });
  }
  status.textContent = "saved";
});
