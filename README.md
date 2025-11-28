[![LangChain](https://img.shields.io/badge/LangChain-Latest-brightgreen)](https://python.langchain.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.0_flash-ffca28?logo=googlegemini)](https://ai.google.dev/)
[![React](https://img.shields.io/badge/React-19+-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.0_flash-ffca28?logo=googlegemini)](https://ai.google.dev/)
[![NVIDIA NIM](https://img.shields.io/badge/NVIDIA_NIM-Embeddings-76B900?logo=nvidia&logoColor=white)](https://www.nvidia.com/en-us/ai/)


# **Spectra – Multimodal RAG System**

A powerful multimodal Retrieval-Augmented Generation (RAG) system capable of understanding **text, PDFs, and images**, retrieving relevant context, and generating grounded answers using LLMs (Gemini or NVIDIA NIM).

---

## 🚀 **Features**

### **1. Multimodal Input Support**

* Text files
* PDFs
* Images (PNG/JPG)
* Combined multimodal retrieval

### **2. Advanced RAG Pipeline**

* Chunking + preprocessing
* Text & image embeddings
* Vector database storage (FAISS/Chroma)
* Hybrid retrieval
* Context-aware response generation

### **3. Multiple LLM Providers**

* **Google Gemini (Vision + Text)**
* **NVIDIA NIM / OpenAI-Compatible models**

### **4. Modern Frontend**

Built using:

* React
* Vite
* Tailwind
* Markdown rendering

### **5. Python Backend**

* FastAPI 
* LangChain - Handles embedding, vector DB, and query pipeline
* Clean API endpoints for uploading, embedding, and chatting

---

## 🛠️ **Tech Stack**

| Layer            | Technology                            |
| ---------------- | ------------------------------------- |
| **Frontend**     | React, Vite, Tailwind, react-dropzone |
| **Backend**      | Python, FastAPI, LangChain            |
| **Models**       | Gemini / NVIDIA NIM                   |
| **Vector Store** | FAISS / Chroma                        |
| **Embeddings**   | Multimodal (text + image)             |

---

## 📦 **Setup**

### **1. Clone the repository**

```bash
git clone https://github.com/Chaos-72/Multi-model-RAG-System.git
cd Multi-model-RAG-System
```

### **2. Create your environment file**

Copy `example.env` → rename to `.env` and fill keys:

```
GOOGLE_API_KEY=your-real-key
# OR
NVIDIA_API_KEY=your-real-key
```

---

## ▶️ **Run the Backend**

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

*(If running from notebook, open the `.ipynb` inside `backend/`.)*

---

## ▶️ **Run the Frontend**

```bash
cd frontend
npm install
npm run dev
```

---

## 📁 **Project Structure**

```
root
│── backend/
│     └── Multimodal RAG Backend.ipynb
│── frontend/
│     ├── src/
│     ├── public/
│     ├── package.json
│     └── vite.config.js
│── example.env
│── .gitignore
│── README.md
```
