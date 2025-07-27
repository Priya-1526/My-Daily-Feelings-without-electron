# 🌈 Daily Feelings

**Daily Feelings** is a simple and beautiful web app that lets users reflect on their emotions, write down what influenced their feelings, and set positive intentions for tomorrow — all in an interactive and colorful UI.

> ✨ “Today, I feel…” — because expressing your emotions matters.

---

## 🔗 Live Demo

👉 [Click here to try it live](https://priya-1526.github.io/My-Daily-Feelings-without-electron/)
*(No login required, works in browser)*

---

## 📸 Screenshot Saving Feature (Browser Version)

This version uses `html2canvas` to let you save a **screenshot** of your selected feeling and text as an image (`.png`). It does **not** require Electron or any installation.

---

## 🌟 Features

- 🎨 Interactive mood selection with emoji buttons
- 📝 Text input for:
  - What made you feel that way
  - What you wish for yourself tomorrow
- 🖼️ One-click **Save as Image** button
- 💡 Line-limit enforced to keep notes brief and mindful
- 🎨 Background and button colors change based on selected mood

---

## 🛠️ Tech Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- [`html2canvas`](https://html2canvas.hertzen.com/) for screenshot generation

---

## 📁 File Structure
📦 DailyFeelings
├── index.html // Landing page (Today, I feel...)
├── writeToday.html // Dashboard to input emotions
├── styles.css // All styles
├── index.js // Text animation logic
├── writeToday.js // Main logic for selection, textarea & screenshot
├── emoji/ // Folder containing emoji images
└── README.md // You're reading this!
