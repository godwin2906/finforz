import { useState, useEffect } from "react";
import { InflightMessages } from "./comp/inflightMessage";
import Layout from "./comp/layout";
import ServiceInfo from "./comp/serviceInfo";
import ExchangeAudit from "./comp/exchangeAudit";
import StickyHeader from "./comp/stickyheader";
import "./styles/dashboard.css";
import "./styles/layout.css";
import "./styles/serviceinfo.css";
import "./styles/inflightmessage.css";
import "./styles/report.css";
import "./styles/exchange.css";
import "./styles/header.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="dashboard-parent">
        {isMobile ? (
          <div className="screen-warning">
            ⚠️ Please view on a larger screen (above 1024px) for the best
            experience!
          </div>
        ) : (
          <>
            <StickyHeader />
            <Layout
              left={<ServiceInfo />}
              right={<ExchangeAudit />}
              bottom={<InflightMessages />}
            />
          </>
        )}
      </section>
    </>
  );
}

export default App;
