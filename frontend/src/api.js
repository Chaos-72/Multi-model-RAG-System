// export const API_BASE = import.meta.env.VITE_API_BASE || 'https://your-backend-url';

// export const API_BASE = 'xcxc';

// export async function uploadFile(file) {
//     const fd = new FormData();
//     fd.append('file', file);
//     const res = await fetch(`${API_BASE}/upload-file`, { method: 'POST', body: fd });
//     return res.json();
// }

// export async function uploadUrl(url) {
//     const res = await fetch(`${API_BASE}/upload-url`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ url })
//     });
//     return res.json();
// }

// export async function queryBackend(query, top_k = 3) {
//     const res = await fetch(`${API_BASE}/query`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ query, top_k })
//     });
//     return res.json();
// }


// ==================
// Updated 
// =================

import API_BASE_URL from "./config";

// Upload a file (PDF, DOCX, etc.)
export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_BASE_URL}/upload-file`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) throw new Error(`Upload failed: ${res.statusText}`);
  return await res.json();
};

// Upload a web or YouTube URL
export const uploadURL = async (url) => {
  const res = await fetch(`${API_BASE_URL}/upload-url`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url }),
  });

  if (!res.ok) throw new Error(`URL upload failed: ${res.statusText}`);
  return await res.json();
};

// Query the model (chat)
export const askQuery = async (query) => {
  const res = await fetch(`${API_BASE_URL}/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
  });

  if (!res.ok) throw new Error(`Query failed: ${res.statusText}`);
  return await res.json();
};
