import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const serviceData = [
  {
    title: "Process",
    value: "2560@ASC35",
  },
  {
    title: "VM",
    value: "Java HotSpot(TM) 64-Bit Server VM 25.201-b09 (Oracle Corporation)",
  },
  {
    title: "OS",
    value: "Windows Server 2016.v10.0",
  },
  {
    title: "Processors",
    value: "2",
  },
  {
    title: "Uptime",
    value: "44763 mins",
  },
];

function ServiceInfo() {
  return (
    <div className="service-info-card">
      <h2 className="info-heading">Service Information</h2>

      {serviceData.map((item, index) => (
        <div key={index} className="service-content-box">
          <h4 className="">
            <span>{item.title}</span>
          </h4>
          <span className="">:</span>
          <p>
            <span>{item.value}</span>
          </p>
        </div>
      ))}

      <button className="service-button">Refresh</button>
    </div>
  );
}

export default ServiceInfo;
