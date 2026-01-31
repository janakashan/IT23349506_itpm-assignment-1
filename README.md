# Specs

This is a directory for test plans.
# Playwright UI & Functional Testing – SwiftTranslator

This project contains automated **UI, positive functional, and negative functional test cases**
for the **SwiftTranslator (Singlish to Sinhala)** web application using **Playwright**.

The project is developed as part of an academic software testing assignment and demonstrates:
- UI testing
- Functional testing
- Robustness testing
- Cross-browser testing

---

## 🛠 Technologies Used

- **Playwright**
- **JavaScript (ES Modules)**
- **Node.js**
- **Chromium, Firefox, WebKit browsers**

---

## 📂 Project Structure

playwright-project/
│
├── tests/
│ ├── pos_functional.spec.js # Positive functional test cases
│ ├── neg_functional.spec.js # Negative / robustness test cases
│ └── ui.spec.js # UI test cases
│
├── playwright.config.js # Playwright configuration
├── package.json # Project dependencies
├── .gitignore # Ignored files and folders
└── README.md # Project documentation


---

## 🧪 Test Coverage

### ✅ Positive Functional Tests
- Singlish to Sinhala conversion
- Daily language usage
- Simple and polite sentences
- Accuracy validation

### ❌ Negative Functional Tests
- Incorrect spelling handling
- Symbols and numbers only
- Empty input validation
- Robustness validation

### 🖥 UI Tests
- Real-time Sinhala output update while typing
- UI responsiveness and usability

---

## 🌐 Browsers Tested

- Chromium (Chrome)
- Firefox
- WebKit (Safari)

All tests run across multiple browsers using Playwright projects.

---

## 🚀 How to Run the Tests

### 1️⃣ Install dependencies
```bash
npm install
npx playwright test
npx playwright show-report

## 👤 Author

- **Name:** Janaka  
- **Course:** Software Engineering / Software Testing  
- **Institution:** [Your University / Institute Name]  
- **Assignment:** Automated UI & Functional Testing using Playwright  
- **Tool Used:** Playwright (JavaScript)
