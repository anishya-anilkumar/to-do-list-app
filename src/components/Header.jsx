export default function Header() {
  const enableNotifications = async () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
      return;
    }

    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      alert("🔔 Notifications Enabled!");
    }
  };

  return (
    <header className="header">
      <h1 className="title">To-Do List</h1>
      <p className="subtitle">Stay organized. Stay productive.</p>

      <button className="notify-btn" onClick={enableNotifications}>
        🔔 Enable Notifications
      </button>
    </header>
  );
}