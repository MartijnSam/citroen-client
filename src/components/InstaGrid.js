import React, { useEffect } from "react";

export default function InstaGrid() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apps.elfsight.com/p/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div class="elfsight-app-ff5f3389-d3c8-44ef-8af6-4f1ef8364a7d"></div>;
}
