"use client";

import { useEffect } from "react";

export function DevConsoleGreeting() {
  useEffect(() => {
    // The Guard: Prevents re-logging on every page navigation within the same session
    if (sessionStorage.getItem("dev_console_greeted")) return;
    sessionStorage.setItem("dev_console_greeted", "true");

    const primaryColor = "#2563eb"; // Matches your IDE status bar
    const darkColor = "#1e1e1e";

    // Main Badge
    console.log(
      `%c Christine Ryan %c Demo-Focused Software Engineer `,
      `color: white; background: ${primaryColor}; padding: 4px 8px; border-radius: 4px 0 0 4px; font-family: monospace; font-weight: bold; font-size: 12px;`,
      `color: ${primaryColor}; background: ${darkColor}; padding: 4px 8px; border-radius: 0 4px 4px 0; font-family: monospace; font-size: 12px; border: 1px solid ${primaryColor};`
    );

    // Collapsed System Details
    console.groupCollapsed("%c[System] Details (Click to Expand)", "color: #71717a; font-family: monospace; font-weight: normal;");
    
    console.log(
      "%cLocation:  %cCampbell, CA", 
      "color: #8b5cf6; font-weight: bold; font-family: monospace;", 
      "color: #71717a; font-family: monospace;"
    );

    console.log(
      "%cProject:   %cletsA(ppl)I (Job Discovery Engine)", 
      "color: #8b5cf6; font-weight: bold; font-family: monospace;", 
      "color: #71717a; font-family: monospace;"
    );

    console.log(
      "%cStatus:    %cDefinition Resolved", 
      "color: #8b5cf6; font-weight: bold; font-family: monospace;", 
      "color: #71717a; font-family: monospace;"
    );

    console.log(
      "%cHint:      %cPress 'F12' or 'Enter' on the home page", 
      "color: #f59e0b; font-weight: bold; font-family: monospace;", 
      "color: #71717a; font-family: monospace; font-style: italic;"
    );

    console.groupEnd();
  }, []);

  return null;
}