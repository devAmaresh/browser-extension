let prompt = "";
document.addEventListener("DOMContentLoaded", () => {
  const statusEl = document.getElementById("status");
  const captureButton = document.getElementById("capture");

  // Retrieve settings from localStorage
  const apiKey = localStorage.getItem("apiKey");
  const popupColor = localStorage.getItem("popupColor");
  const savedPrompt = localStorage.getItem("customPrompt");

  if (savedPrompt) {
    prompt = savedPrompt; 
  } else {
    prompt = "You are a helpful assistant. Kindly give answers.";
  }
  if (popupColor) {
    document.body.style.backgroundColor = popupColor; // Apply saved color to the popup
    captureButton.style.backgroundColor = popupColor; // Apply saved color to the button
  }

  if (!apiKey) {
    statusEl.textContent = "Please configure your API key in the settings.";
    captureButton.disabled = true; // Disable capture button if API key is not set
    return;
  }

  // Enable capture button if the API key exists
  captureButton.disabled = false;

  captureButton.addEventListener("click", async () => {
    try {
      await captureAndProcessScreenshot(apiKey); // Pass the API key to the function
    } catch (error) {
      console.error("Error:", error);
    }
  });
});

// Listen for keyboard events
document.addEventListener("keydown", async (event) => {
  // Check if Ctrl + * is pressed
  if (event.ctrlKey && event.key === "*") {
    const apiKey = localStorage.getItem("apiKey"); // Get the API key dynamically
    if (!apiKey) {
      console.error("API key is not set.");
      return;
    }

    try {
      await captureAndProcessScreenshot(apiKey); // Pass the API key to the function
    } catch (error) {
      console.error("Error:", error);
    }
  }
});

// Function to capture and process the screenshot
async function captureAndProcessScreenshot(apiKey) {
  const statusEl = document.getElementById("status");

  try {
    statusEl.textContent = "Capturing...";

    // Request background.js to capture the current tab
    const { success, imageUri, error } = await chrome.runtime.sendMessage({
      action: "captureScreenshot",
    });

    if (!success) {
      throw new Error(error || "Unknown error while capturing the tab.");
    }

    statusEl.textContent = "Processing...";

    // Convert the image URI to a base64 format if needed
    let base64Image;
    let mimeType;

    if (imageUri.startsWith("data:image/")) {
      const mimeTypeMatch = imageUri.match(/data:(image\/[a-zA-Z]+);base64,/);
      if (mimeTypeMatch) {
        mimeType = mimeTypeMatch[1];
        base64Image = imageUri.split(",")[1];
      } else {
        throw new Error("Invalid image URI format.");
      }
    } else {
      throw new Error("Image URI is not in a valid format.");
    }

    const response = await getGeminiResponse(base64Image, mimeType, apiKey);
    const markdownContent =
      response.candidates[0]?.content?.parts[0]?.text ||
      "No content available.";

    // Convert Markdown to HTML
    const converter = new showdown.Converter();
    const htmlContent = converter.makeHtml(markdownContent);

    statusEl.innerHTML = htmlContent;
  } catch (error) {
    console.error("Error:", error);
    statusEl.textContent = "An error occurred: " + error.message;
  }
}

// Function to call the Gemini API
async function getGeminiResponse(base64Image, mimeType, apiKey) {
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

  const payload = {
    contents: [
      {
        parts: [
          { text: prompt },
          {
            inline_data: {
              mime_type: mimeType,
              data: base64Image,
            },
          },
        ],
      },
    ],
  };

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    return await response.json();
  } catch (error) {
    console.error("Error while calling the API:", error);
    throw error;
  }
}
