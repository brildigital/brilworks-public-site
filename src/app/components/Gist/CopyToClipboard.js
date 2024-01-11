import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Tooltip } from "react-tooltip";

const CopyToClipboard = ({ textRef, dataIndex }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    if (textRef.current) {
      const range = document.createRange();
      range.selectNode(textRef.current);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      // Execute the copy command
      document.execCommand("copy");
      // Clean up the selection
      window.getSelection().removeAllRanges();
      // Update state to indicate that the text has been copied
      setCopied(true);
      // Reset the copied state after a short delay
      setTimeout(() => {
        setCopied(false);
      }, 1000);
      // Display toast only once after copying
    }
  };
  return (
    <>
      <Tooltip
        globalCloseEvents={{
          clickOutsideAnchor: true,
          scroll: true,
          escape: true,
          resize: true,
        }}
        openEvents={{
          click: true,
          focus: true,
          mouseenter: true,
          mousedown: true,
        }}
        anchorSelect={`#copy-to-clipboard-${dataIndex}`}
        content={copied ? "Code copied!" : "Copy to clipboard"}
      />
      <button
        id={`copy-to-clipboard-${dataIndex}`}
        className={`absolute top-0 scale-125 ${
          isMobile ? "left-0" : "right-0"
        } `}
        onClick={copyToClipboard}
      >
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </>
  );
};
export default CopyToClipboard;
