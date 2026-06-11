import React, { Suspense, lazy, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const LandingApp = lazy(() => import("./pages/LandingApp"));
const DashboardApp = lazy(() => import("./pages/DashboardApp"));

const RootApp: React.FC = () => {
  const [dashboard, setDashboard] = useState(window.location.pathname.startsWith("/dashboard"));

  useEffect(() => {
    const sync = () => setDashboard(window.location.pathname.startsWith("/dashboard"));
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  return (
    <Suspense fallback={<div className="min-h-screen bg-paper" />}>
      {dashboard ? <DashboardApp /> : <LandingApp />}
    </Suspense>
  );
};

const rootEl = document.getElementById("root");
if (rootEl) {
  createRoot(rootEl).render(<RootApp />);
}
