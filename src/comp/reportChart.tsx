"use client";

import { useMemo, useState } from "react";
import { Pie, PieChart, LabelList } from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";
import { report } from "@/lib/data";

const chartConfig = {
  completed: {
    label: "Completed",
  },
  failed: {
    label: "Failed",
  },
} satisfies ChartConfig;

export function ReportChart() {
  const [selectedRange, setSelectedRange] = useState<"today" | "last7days">(
    "last7days"
  );

  const chartData = useMemo(() => {
    const completedCount = report.filter(
      (item) => item.status === "completed"
    ).length;
    const failedCount = report.filter(
      (item) => item.status === "failed"
    ).length;

    return [
      {
        status: "completed",
        count: completedCount,
        className: "completed-color",
      },
      { status: "failed", count: failedCount, className: "failed-color" },
    ];
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-start toggle-container">
        <button
          className="px-4 py-2 toggle-btn disabled cursor-not-allowed "
          disabled
        >
          Today
        </button>
        <button
          className="px-4 py-2 toggle-btn active"
          onClick={() => setSelectedRange("last7days")}
        >
          Last 7 Days
        </button>
      </div>

      <div className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={({ payload }) => {
                if (!payload || payload.length === 0) return null;
                return (
                  <div className="chart-tooltip border-0 bg-black text-white px-2 py-1 rounded-md shadow-lg">
                    {payload[0]?.value}
                  </div>
                );
              }}
            />
            <Pie data={chartData} dataKey="count" nameKey="status">
              <LabelList
                dataKey="status"
                stroke="none"
                fontSize={14}
                className="chart-color"
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
}
