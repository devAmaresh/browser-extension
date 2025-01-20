document.addEventListener("DOMContentLoaded", () => {
  const apiKeyInput = document.getElementById("apiKey");
  const popupColorInput = document.getElementById("popupColor");
  const customPromptInput = document.getElementById("customPrompt");
  const saveButton = document.getElementById("saveSettings");
  const statusMessage = document.getElementById("statusMessage");

  // Load existing settings from localStorage
  const savedApiKey = localStorage.getItem("apiKey");
  const savedPopupColor = localStorage.getItem("popupColor");
  const savedCustomPrompt = localStorage.getItem("customPrompt");

  if (savedApiKey) apiKeyInput.value = savedApiKey;
  if (savedPopupColor) popupColorInput.value = savedPopupColor;
  if (savedCustomPrompt) customPromptInput.value = savedCustomPrompt;

  // Save settings to localStorage
  saveButton.addEventListener("click", () => {
    const apiKey = apiKeyInput.value.trim();
    const popupColor = popupColorInput.value;
    const customPrompt = customPromptInput.value.trim();

    if (!apiKey) {
      statusMessage.textContent = "API Key cannot be empty!";
      statusMessage.style.color = "red";
      return;
    }

    localStorage.setItem("apiKey", apiKey);
    localStorage.setItem("popupColor", popupColor);
    localStorage.setItem("customPrompt", customPrompt);

    statusMessage.textContent = "Settings saved successfully!";
    statusMessage.style.color = "green";
  });
});
