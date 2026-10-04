/* =========================================================
   CloudForge Status Page — app.js
   Handles: uptime counter, last-checked timestamp
   ========================================================= */

(function () {
  // Page load time is treated as the deployment start for demo purposes.
  const START = Date.now();

  const uptimeEl     = document.getElementById('uptime');
  const lastCheckedEl = document.getElementById('last-checked');

  /** Format elapsed milliseconds as  Xd Xh Xm Xs */
  function formatUptime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const days    = Math.floor(totalSeconds / 86400);
    const hours   = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    const parts = [];
    if (days)    parts.push(days    + 'd');
    if (hours)   parts.push(hours   + 'h');
    if (minutes) parts.push(minutes + 'm');
    parts.push(seconds + 's');

    return parts.join(' ');
  }

  /** Format the current time as  HH:MM:SS */
  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  }

  /** Tick — runs every second */
  function tick() {
    const now = new Date();
    uptimeEl.textContent      = formatUptime(now - START);
    lastCheckedEl.textContent = formatTime(now);
  }

  // Run immediately so there's no 1-second blank, then repeat.
  tick();
  setInterval(tick, 1000);
})();
