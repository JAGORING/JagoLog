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
    <div style={{ position: 'relative' }}>
      <button onClick={handleCopy} style={{ position: 'absolute', right: '5px', top: '0px' }}>
        {copied ? '✅Copied!' : '📋Copy'}
      </button>
      <pre ref={preRef} {...props}>
        {props.children}
      </pre>
    </div>
  );
};

export default CustomCodeBlock;
