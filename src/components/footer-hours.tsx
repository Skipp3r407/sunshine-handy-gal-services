"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  businessHoursDayIndex,
  businessHoursRows,
} from "@/lib/site-data";

export function FooterHours() {
  const [todayJsDay] = useState(() => new Date().getDay());

  return (
    <div className="mx-auto w-full max-w-md lg:mx-0">
      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-deep sm:text-sm">
        Hours
      </h3>
      <ul className="mt-4 divide-y divide-[#e8e4dc]" role="list">
        {businessHoursRows.map((row) => {
          const isToday = businessHoursDayIndex[row.id] === todayJsDay;

          return (
            <li
              key={row.id}
              className={cn(
                "flex items-center justify-between gap-4 py-2.5 text-sm first:pt-0 last:pb-0",
                isToday &&
                  "my-0.5 -mx-2 rounded-lg bg-teal/10 px-2 py-2.5 first:mt-0 last:mb-0",
              )}
            >
              <span
                className={cn(
                  "shrink-0 tabular-nums text-black",
                  isToday && "font-semibold text-teal-deep",
                )}
              >
                {row.labelShort}
              </span>
              <span
                className={cn(
                  "text-right text-black",
                  isToday && "font-semibold text-black",
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
