// utils/time.js

export function formatTime(ms) {
  // If time is up
  if (ms <= 0) return "Expired";

  const days = Math.floor(ms / 86400000);
  const hours = Math.floor((ms % 86400000) / 3600000);
  const mins = Math.floor((ms % 3600000) / 60000);
  const secs = Math.floor((ms % 60000) / 1000);

  let parts = [];

  if (days > 0) parts.push(`${days}d`);
  if (hours > 0) parts.push(`${hours}h`);
  if (mins > 0) parts.push(`${mins}m`);

  // Always show seconds
  parts.push(`${secs}s`);

  return parts.join(" ");
}