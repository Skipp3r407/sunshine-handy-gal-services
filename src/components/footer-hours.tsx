"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  businessHoursDayIndex,
  businessHoursRows,
} from "@/lib/site-data";

export function FooterHours() {
  const [todayJsDay, setTodayJsDay] = useState<number | null>(null);

  useEffect(() => {
    setTodayJsDay(new Date().getDay());
  }, []);

  return (
    <div className="mx-auto w-full max-w-md lg:mx-0">
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-aqua sm:text-sm">
        Hours
      </h3>
      <ul className="mt-4 divide-y divide-white/10" role="list">
        {businessHoursRows.map((row) => {
          const isToday =
            todayJsDay !== null &&
            businessHoursDayIndex[row.id] === todayJsDay;

          return (
            <li
              key={row.id}
              className={cn(
                "flex items-center justify-between gap-4 py-2.5 text-sm first:pt-0 last:pb-0",
                isToday &&
                  "my-0.5 -mx-2 rounded-lg bg-white/[0.06] px-2 py-2.5 first:mt-0 last:mb-0",
              )}
            >
              <span
                className={cn(
                  "shrink-0 tabular-nums",
                  isToday ? "font-semibold text-aqua" : "text-white/65",
                )}
              >
                {row.labelShort}
              </span>
              <span
                className={cn(
                  "text-right text-white/70",
                  isToday && "font-semibold text-white",
                )}
              >
                {row.hours}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
