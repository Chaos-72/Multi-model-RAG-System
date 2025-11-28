import React, { useState } from "react";
import { askQuery } from "../api";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatResponse() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!query.trim()) return;
    try {
      setLoading(true);
      const res = await askQuery(query);
      console.log("Response length:", res.answer?.length, "chars");
      console.log("Response content:", res.answer?.slice(0, 300));
      setResponse(res.answer);
    } catch (err) {
      setResponse(`${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      <h4 className="text-start">Chat with Resource</h4>
      <div className="mt-4 row ">
        <div className="col-12 col-lg-11 col-md-11 col-sm-12 mb-3 "
          style={{ paddingRight: '0' }}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-dark w-100 p-3 border-end-0"
            style={{ border: "1px solid grey", color: "white" }}
            placeholder="e.g. What is this document about?"
          />
        </div>

        <div className="col-12 col-lg-1 col-md-1 col-sm-12 .span mb-3 text-start d-flex align-items-center justify-content-center " style={{ cursor: 'pointer', paddingLeft: '0' }}>
          <button onClick={handleAsk} disabled={loading} className="btn-ask text-uppercase">
            {loading ? "Loading..." : "Ask AI"}
          </button>
        </div>
      </div>

      {/* Response */}
      <div>
        <div className="bg-dark response-border mt-4">


          {/* Old doesn't handle markdown */}
          {/* <textarea
            className="bg-dark p-3 w-100"
            style={{ border: "1px solid grey", color: "grey", resize: "none" }}
            rows={6}
            readOnly
            value={response}
          ></textarea> */}

          {/* New handle markdown */}

          <div
            className="markdown-body"
          >
            <ReactMarkdown
              children={response}
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ node, ...props }) => <h4 className="fw-bold mt-3 text-warning" {...props} />,
                h2: ({ node, ...props }) => <h5 className="fw-bold mt-2 text-warning" {...props} />,
                strong: ({ node, ...props }) => <strong className="text-light" {...props} />,
                p: ({ node, ...props }) => <p className="mb-2" {...props} />,
                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                code: ({ node, ...props }) => (
                  <code
                    className="bg-secondary text-white px-1 rounded"
                    style={{ fontFamily: "monospace" }}
                    {...props}
                  />
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 