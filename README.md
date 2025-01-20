# 🌐 Web Page Content Summarizer Chrome Extension 🚀

This Chrome extension allows you to capture the content of a web page, process it using advanced AI models (like Gemini 1.5 Flash), and retrieve helpful summaries or answers. It is especially useful for tasks like answering quizzes or summarizing the rendered content on websites. 📚✨

## 🎉 Features

### 📸 Capture Web Page Content

- Take a screenshot of the current web page with a single click or keyboard shortcut. 📷
- Automatically convert the screenshot into a base64 image for processing. 🔄

### 🤖 AI-Powered Summarization

- Use the Gemini 1.5 Flash model to extract text-based insights from the captured screenshot. 🧠
- Dynamically pass custom prompts to tailor the output to your needs. 🎯

### ⚙️ Customizable Settings

- Set your API key to connect with the Gemini API. 🔑
- Customize the popup's background color for a personalized look. 🌈
- Define the prompt that guides the AI's behavior (default: "You are a helpful assistant. Kindly give answers."). 📝

### ⌨️ Keyboard Shortcuts

- Use `Ctrl + *` to trigger the capture process without clicking the button. ⚡

## 🛠️ Installation

1. Clone or download this repository. 💾
2. Open Chrome and navigate to `chrome://extensions/`. 🔍
3. Enable Developer Mode in the top-right corner. 🛠️
4. Click **Load unpacked** and select the folder containing this extension. 📂
5. The extension should now appear in your Chrome toolbar. 🔝

## 📝 How to Use

### ⚙️ Initial Setup

1. Click on the extension icon to open the popup. 🎨
2. Navigate to the **Settings** section:
   - Enter your API key (required for connecting to the Gemini API). 🔑
   - Customize the popup color and prompt as needed. 🎨
   - Click **Save Settings**. 💾

### 🔍 Capturing and Summarizing

1. Open a web page you want to analyze. 🌐
2. Click the **Capture** button in the popup. 📸
3. Wait for the extension to:
   - Capture the page content. 🔒
   - Send it to the Gemini API for processing. 🧠
   - Display the summarized content or answers in the popup. 📑

### ⏩ Keyboard Shortcut

- Press `Ctrl + *` to quickly capture the current page and summarize it without opening the popup. 🚀

### 🎯 Example Use Case

Imagine you're taking an online quiz and need assistance answering a question based on the content displayed on the web page. Here's how this extension helps:

1. Open the quiz page in Chrome. 💻
2. Click **Capture** or use the keyboard shortcut. 📸
3. The extension extracts the content from the page and generates a helpful response, making it easier to complete your quiz. 🎓

## ⚙️ Configuration Options

### 🛠️ Settings Page

- **API Key**: Required for API calls to the Gemini model. 🔑
- **Popup Color**: Change the background color of the popup for a personalized experience. 🎨
- **Custom Prompt**: Enter a prompt to customize the AI's behavior, such as:
  - "Summarize the key points of the page." 📑
  - "Identify and answer the quiz questions." 📝

## 🧑‍💻 Technical Details

### 🗝️ Key Components

- **popup.html**: The user interface for the extension. 🌐
- **popup.js**: Manages UI interactions, captures screenshots, and communicates with the Gemini API. 🧩
- **background.js**: Handles the screenshot capturing process. 📸
- **content.js**: Injects scripts into the current page if needed. 📝

### 🧠 API Integration

The extension uses the Gemini API for processing captured screenshots and generating responses. 🤖

### 📦 Dependencies

- **Showdown.js**: Converts Markdown to HTML for displaying AI-generated content in the popup. 📜

## ⚠️ Troubleshooting

### ❗ API Key Not Set

- Ensure you have entered a valid API key in the settings page. 🔑
- The extension will display an error message if the key is missing. 🚫

### ⚠️ Invalid Image URI

- Ensure the page allows screenshot capturing (e.g., some DRM-protected pages may block this). 🚷

### ⚠️ No Content Available

- Try refining the custom prompt to make it more specific. 🔍

## 🚀 Future Enhancements

- Add support for multi-language content summarization. 🌍
- Introduce OCR for extracting text directly from images. 🖼️
- Enable saving AI responses as notes or exporting them as files. 💾
- Integrate additional AI models for more robust analysis. 🤖

## 📝 License

This project is open-source and available under the MIT License. Feel free to use, modify, and distribute it. 🎉

## 🤝 Contributions

We welcome contributions to improve this extension! To contribute:

1. Fork this repository. 🍴
2. Create a new branch for your feature or bug fix. 🧩
3. Submit a pull request with detailed descriptions of your changes. ✨

## 📬 Contact

For questions, feedback, or support, please reach out via GitHub Issues. 🗣️

#### Developed by [Amaresh](https://amareshh.vercel.app) 💻

Enjoy using the Web Page Content Summarizer Chrome Extension! 🎉
