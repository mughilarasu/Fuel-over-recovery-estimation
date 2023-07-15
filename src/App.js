import * as React from "react";
import Overview from "./Components/Overview/Overview";
import ErrorBoundary from "./ErrorBoundary";
export default function App() {
  return (
    <ErrorBoundary>
      <Overview />
    </ErrorBoundary>
  );
}
