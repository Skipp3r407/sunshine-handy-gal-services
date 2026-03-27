"use client";

import { useMemo, useState } from "react";

const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function startOfLocalDay(d: Date) {
  const x = new Date(d);
  x.setHours(0, 0, 0, 0);
  return x;
}

export type BookingCalendarProps = {
  value: string;
  onChange: (isoDate: string) => void;
  className?: string;
};

export function BookingCalendar({ value, onChange, className }: BookingCalendarProps) {
  const initial = value
    ? new Date(`${value}T12:00:00`)
    : startOfLocalDay(new Date());
  const [visibleMonth, setVisibleMonth] = useState(
    () => new Date(initial.getFullYear(), initial.getMonth(), 1),
  );

  const { year, month, cells } = useMemo(() => {
    const y = visibleMonth.getFullYear();
    const m = visibleMonth.getMonth();
    const first = new Date(y, m, 1);
    const startPad = first.getDay();
    const lastDay = new Date(y, m + 1, 0).getDate();
    const list: (number | null)[] = [];
    for (let i = 0; i < startPad; i++) list.push(null);
    for (let d = 1; d <= lastDay; d++) list.push(d);
    return { year: y, month: m, cells: list };
  }, [visibleMonth]);

  const today = startOfLocalDay(new Date());

  function isDisabled(day: number) {
    const d = startOfLocalDay(new Date(year, month, day));
    return d < today;
  }

  function selectDay(day: number) {
    if (isDisabled(day)) return;
    const iso = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    onChange(iso);
  }

  function prevMonth() {
    setVisibleMonth((v) => new Date(v.getFullYear(), v.getMonth() - 1, 1));
  }

  function nextMonth() {
    setVisibleMonth((v) => new Date(v.getFullYear(), v.getMonth() + 1, 1));
  }

  const selectedDay = useMemo(() => {
    if (!value) return null;
    const d = new Date(`${value}T12:00:00`);
    if (d.getFullYear() !== year || d.getMonth() !== month) return null;
    return d.getDate();
  }, [value, year, month]);

  return (
    <div className={className}>
      <div className="mb-3 flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={prevMonth}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#ddd6c8] bg-white text-charcoal transition hover:border-teal-deep/40 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/25"
          aria-label="Previous month"
        >
          ‹
        </button>
        <span className="text-sm font-semibold text-charcoal">
          {MONTHS[month]} {year}
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#ddd6c8] bg-white text-charcoal transition hover:border-teal-deep/40 hover:bg-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/25"
          aria-label="Next month"
        >
          ›
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[11px] font-medium text-muted-gray sm:text-xs">
        {WEEKDAYS.map((w) => (
          <div key={w} className="py-1">
            {w}
          </div>
        ))}
        {cells.map((day, i) =>
          day === null ? (
            <div key={`empty-${i}`} />
          ) : (
            <button
              key={day}
              type="button"
              disabled={isDisabled(day)}
              onClick={() => selectDay(day)}
              className={`min-h-[2rem] rounded-lg text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep/30 disabled:cursor-not-allowed disabled:opacity-35 ${
                selectedDay === day
                  ? "bg-teal-deep text-white shadow-sm"
                  : "text-charcoal hover:bg-cream"
              }`}
            >
              {day}
            </button>
          ),
        )}
      </div>
    </div>
  );
}
