[![LangChain](https://img.shields.io/badge/LangChain-Latest-brightgreen)](https://python.langchain.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.0_flash-ffca28?logo=googlegemini)](https://ai.google.dev/)
[![React](https://img.shields.io/badge/React-19+-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-2.0_flash-ffca28?logo=googlegemini)](https://ai.google.dev/)
[![NVIDIA NIM](https://img.shields.io/badge/NVIDIA_NIM-Embeddings-76B900?logo=nvidia&logoColor=white)](https://www.nvidia.com/en-us/ai/)


# **Spectra – Multimodal RAG System**


## Project Goal

The goal of this project was to build an intelligent chatbot capable of understanding and answering questions from complex PDF documents using a **Retrieval-Augmented Generation (RAG)** approach.

The system was designed to go beyond simple text-based retrieval by exploring **multimodal capabilities**, enabling it to process both textual content and visual elements such as images and diagrams. Additionally, the project aimed to evolve into a user-friendly application with features like document upload, conversational interaction, and context-aware responses with citations.

---

## Workflow

The project was developed in a structured manner, starting with a basic RAG pipeline and progressively incorporating multimodal capabilities and system improvements.

### 1. Document Ingestion and Processing

A pipeline was built to extract content from PDF documents using **PyMuPDF (fitz)**. The system retrieves both text and embedded images from each page.

To ensure efficient processing, the extracted text was split into smaller chunks using **RecursiveCharacterTextSplitter**, maintaining contextual continuity through overlapping segments. This step is crucial for improving retrieval quality and handling large documents.

---

### 2. Embedding Strategy

The system converts extracted content into vector representations for similarity-based retrieval.

* **Text and image embeddings** were initially generated using the **CLIP model**, allowing both modalities to exist in a shared embedding space.
* This enabled cross-modal retrieval (e.g., retrieving images using text queries).

However, during experimentation, it was observed that CLIP is not optimal for long-form text, leading to a shift in focus toward improving text embedding strategies for better semantic understanding.

---

### 3. Vector Storage and Retrieval

All embeddings were stored in a **FAISS vector database**, enabling efficient similarity search.

During query time:

1. The user query is converted into an embedding.
2. The system retrieves the most relevant chunks using vector similarity.
3. Both text and image-related results are considered for context building.

This retrieval mechanism ensures that only relevant information is passed to the language model.

---

### 4. Context Construction and Multimodal Handling

The retrieved results are formatted into a structured context, including:

* Text excerpts with metadata (e.g., page numbers)
* Images encoded in base64 format

This context is carefully constructed to provide meaningful input to the generative model, enabling it to reason over both textual and visual information.

---

### 5. Response Generation

The system uses **Google Gemini (via `ChatGoogleGenerativeAI`)** to generate answers.

The model receives:

* The user’s query
* Retrieved contextual information

It produces responses grounded in the document content. Additionally, retrieved snippets are logged and displayed, allowing traceability and supporting citation-based answers.

---

### 6. Debugging and Optimization

Several challenges were identified and addressed during development:

* Fixing embedding-related errors and inconsistencies
* Handling poor retrieval quality due to unsuitable embedding models
* Managing noisy PDF text (headers, footers, fragmented content)
* Improving prompt structure for better response generation
* Experimenting with extraction of vector graphics (SVG) for diagrams

These efforts helped improve system reliability and highlighted limitations in multimodal processing.

---

### 7. Transition Toward Application Layer

After stabilizing the core pipeline, the focus shifted toward building a more practical system by planning:

* A modern UI with document upload (drag-and-drop)
* Chat-based interaction similar to conversational AI systems
* Persistent chat history linked to user accounts
* Responses with proper citations for better explainability

---

## Final Outcome

The final system is a working **RAG-based chatbot** capable of processing PDF documents and answering user queries using retrieved contextual information.

It successfully demonstrates:

* End-to-end document understanding pipeline
* Efficient retrieval using vector similarity search
* Context-aware answer generation using a large language model

While the multimodal component is still evolving, the project provided strong insights into handling images and diagrams within document-based QA systems. It also helped identify practical challenges such as embedding limitations, noisy data, and complexity in extracting meaningful visual content.

Overall, the project establishes a solid foundation for building advanced AI-powered document assistants and can be further enhanced into a production-ready system with improved embeddings, better preprocessing, scalable infrastructure, and a polished user interface.

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
