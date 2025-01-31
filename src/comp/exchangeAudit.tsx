import Report from "./report";
import { ReportChart } from "./reportChart";

function ExchangeAudit() {
  return (
    <div className="exchange-audi-parent">
      <h2 className="info-heading">Exchange Audit State - Last 7 Days</h2>
      <div className="audit-flex-box w-full">
        <div className="w-[40%]">
            <ReportChart/>
        </div>
        <div className="w-[60%]">
            <Report/>
        </div>
      </div>
    </div>
  );
}

export default ExchangeAudit;
