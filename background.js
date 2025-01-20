chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "captureScreenshot") {
    // Capture screenshot of the current tab (visible part)
    chrome.tabs.captureVisibleTab(null, { format: "jpeg" }, (imageUri) => {
      if (chrome.runtime.lastError || !imageUri) {
        console.log("Failed to capture tab:", chrome.runtime.lastError);
        sendResponse({ success: false, error: chrome.runtime.lastError || "Failed to capture tab." });
      } else {
        console.log("Captured tab:", imageUri);
        sendResponse({ success: true, imageUri });
      }
    });
    return true; // Indicates async response
  }
});
