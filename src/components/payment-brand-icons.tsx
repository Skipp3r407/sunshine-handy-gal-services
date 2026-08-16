export function ZelleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#6d1ed4" />
      <path
        d="M9 10.2h14v2.4L13.2 21.8H23V24H9v-2.4l9.8-9.2H9v-2.2z"
        fill="#fff"
      />
    </svg>
  );
}

export function PayPalMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#003087" />
      <path
        d="M13.2 8.2h5.1c3.2 0 5.2 1.6 4.8 4.6-.5 3.4-2.7 5.2-6.1 5.2h-1.7l-.8 4.8H11l2.2-14.6z"
        fill="#009cde"
      />
      <path
        d="M12.4 10.4h4.4c2.2 0 3.5 1.1 3.2 3.2-.3 2.3-1.9 3.5-4.2 3.5h-1.4L14 22h-2.6l1-11.6z"
        fill="#fff"
      />
    </svg>
  );
}

export function CashAppMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden>
      <rect width="32" height="32" rx="8" fill="#00c244" />
      <path
        d="M16.2 7.4c2.8 0 4.8 1.3 5.6 3.3l-2.4 1.1c-.5-1.1-1.6-1.8-3.2-1.8-1.5 0-2.5.7-2.5 1.7 0 .9.6 1.4 2.6 1.9 3 .8 5.1 1.9 5.1 4.5 0 2.7-2.1 4.5-5.4 4.5-2.9 0-5.1-1.4-5.9-3.6l2.5-1.1c.6 1.3 1.8 2.1 3.5 2.1 1.7 0 2.8-.8 2.8-1.9 0-1-.8-1.5-2.8-2-2.8-.7-4.9-1.9-4.9-4.4 0-2.6 2.1-4.3 5-4.3z"
        fill="#fff"
      />
    </svg>
  );
}
