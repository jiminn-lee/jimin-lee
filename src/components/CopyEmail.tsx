import { useEffect, useRef, useState } from "react";

export function CopyEmail({ address }: { address: string }) {
  const [status, setStatus] = useState("");
  const resetTimer = useRef<number>(undefined);

  useEffect(() => () => window.clearTimeout(resetTimer.current), []);

  async function copyEmail() {
    let message: string;
    try {
      await navigator.clipboard.writeText(address);
      message = "Copied";
    } catch {
      message = "Couldn't copy";
    }

    window.clearTimeout(resetTimer.current);
    setStatus(message);
    resetTimer.current = window.setTimeout(() => setStatus(""), 3000);
  }

  return (
    <>
      <button type="button" className="profile-link cursor-pointer underline" onClick={copyEmail}>
        {status || "Email"}
      </button>
      <span role="status" className="sr-only">{status === "Copied" ? "Email address copied" : status}</span>
    </>
  );
}
