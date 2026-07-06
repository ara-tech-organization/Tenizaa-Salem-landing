export function FacebookIcon({ size = 20, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M13.5 21v-8.06h2.71l.4-3.14h-3.11V7.86c0-.91.25-1.53 1.56-1.53h1.67V3.52C15.94 3.42 14.94 3.33 13.78 3.33c-2.4 0-4.04 1.47-4.04 4.16v2.31H7.02v3.14h2.72V21h3.76Z" />
    </svg>
  )
}

export function WhatsappIcon({ size = 20, ...rest }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M12.01 2C6.76 2 2.5 6.26 2.5 11.51c0 1.77.48 3.43 1.32 4.86L2 22l5.77-1.76a9.44 9.44 0 0 0 4.24 1.02h.01c5.25 0 9.51-4.26 9.51-9.51C21.53 6.5 17.27 2 12.01 2Zm5.6 13.53c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.95-.3-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.55-1.17-2.96s.73-2.1 1-2.39c.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.42-.07.65.5.24.58.82 2 .89 2.15.07.15.12.32.02.51-.09.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.61-.13.24.09 1.55.73 1.82.86.26.13.43.2.5.31.07.11.07.63-.17 1.3Z" />
    </svg>
  )
}

export function InstagramIcon({ size = 20, ...rest }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}
