'use client';

import { useRef, useState } from 'react';

const CustomCodeBlock = ({ ...props }) => {
  const preRef = useRef<HTMLPreElement>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const code = preRef.current?.textContent || '';
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative">
      <button onClick={handleCopy} className="absolute right-1 top-0">
        {copied ? '✅Copied!' : '📋Copy'}
      </button>
      <pre ref={preRef} {...props}>
        {props.children}
      </pre>
    </div>
  );
};

export default CustomCodeBlock;
