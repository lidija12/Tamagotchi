const API_BASE = import.meta.env.VITE_API_URL || "/api";

async function apiFetch(path, options = {}) {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || `Request failed with status ${response.status}`);
  }

  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export const petApi = {
  getPet: () => apiFetch("/pet"),
  updatePet: (id, updates) => apiFetch(`/pet/${id}`, { method: "PATCH", body: JSON.stringify(updates) }),
  getActions: (petId, { limit, type } = {}) => {
    const search = new URLSearchParams();
    if (limit) search.set("limit", String(limit));
    if (type) search.set("type", type);
    return apiFetch(`/pet/${petId}/actions${search.toString() ? `?${search.toString()}` : ""}`);
  },
  createAction: (petId, payload) => apiFetch(`/pet/${petId}/actions`, { method: "POST", body: JSON.stringify(payload) }),
};
