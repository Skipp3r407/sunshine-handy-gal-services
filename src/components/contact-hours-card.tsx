"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  businessHoursDayIndex,
  businessHoursRows,
} from "@/lib/site-data";

type ContactHoursCardProps = {
  className: string;
};

export function ContactHoursCard({ className }: ContactHoursCardProps) {
  const [todayJsDay] = useState(() => new Date().getDay());

  return (
    <section className={className}>
      <h2 className="text-base font-bold text-charcoal">Hours</h2>
      <ul className="mt-3 divide-y divide-[#efe9dc] text-sm text-muted-gray">
        {businessHoursRows.map((row) => {
          const isToday = businessHoursDayIndex[row.id] === todayJsDay;

          return (
            <li
              key={row.id}
              className={cn(
                "flex justify-between gap-4 py-2.5 first:pt-0 last:pb-0",
                isToday &&
                  "my-0.5 -mx-2 rounded-lg bg-teal/10 px-2 py-2.5 first:mt-0 last:mb-0",
              )}
            >
              <span
                className={cn(
                  "shrink-0 font-medium tabular-nums text-charcoal",
                  isToday && "font-semibold text-teal-deep",
                )}
              >
                {row.labelShort}
              </span>
              <span
                className={cn(
                  "text-right",
                  isToday && "font-semibold text-charcoal",
                )}
              >
                {row.hours}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-3 text-xs leading-relaxed text-muted-gray">
        Call or text for the soonest openings—we&apos;ll work with your schedule.
      </p>
    </section>
  );
}
