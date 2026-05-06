// src/utils/storage.js

const KEY = "tasks";

// ✅ Get tasks from localStorage
export function getTasks() {
  try {
    const stored = localStorage.getItem(KEY);

    if (!stored) return [];

    return JSON.parse(stored);
  } catch (error) {
    console.error("Error reading tasks:", error);
    return [];
  }
}

// ✅ Save tasks to localStorage
export function saveTasks(tasks) {
  try {
    localStorage.setItem(KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks:", error);
  }
}