const API_URL = 'http://localhost:4000/Task';

export async function getTasks() {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error('Failed to fetch tasks');
  }
  return res.json();
}

export async function addTask(task) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task),
  });

  if (!res.ok) {
    throw new Error('Failed to add task');
  }

  return res.json();
}
