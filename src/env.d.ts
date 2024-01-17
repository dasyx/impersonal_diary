/// <reference types="astro/client" />
// global.d.ts
interface Window {
  fetchUsers: () => Promise<void>;
}
