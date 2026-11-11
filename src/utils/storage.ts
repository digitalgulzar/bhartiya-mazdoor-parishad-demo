import { Complaint, INITIAL_COMPLAINTS } from '../data/demoComplaints';

const COMPLAINTS_KEY = 'bmp_demo_complaints_v1';
const PACKAGE_KEY = 'bmp_demo_active_package_v1';
const LANG_KEY = 'bmp_demo_language_v1';
const ADMIN_SESSION_KEY = 'bmp_demo_admin_auth_v1';

export function getStoredComplaints(): Complaint[] {
  try {
    const raw = localStorage.getItem(COMPLAINTS_KEY);
    if (!raw) {
      localStorage.setItem(COMPLAINTS_KEY, JSON.stringify(INITIAL_COMPLAINTS));
      return INITIAL_COMPLAINTS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_COMPLAINTS;
  } catch (e) {
    console.error('Failed to parse complaints from localStorage', e);
    return INITIAL_COMPLAINTS;
  }
}

export function saveStoredComplaints(complaints: Complaint[]): void {
  try {
    localStorage.setItem(COMPLAINTS_KEY, JSON.stringify(complaints));
  } catch (e) {
    console.error('Failed to save complaints to localStorage', e);
  }
}

export function getComplaintById(id: string): Complaint | undefined {
  const all = getStoredComplaints();
  const cleaned = id.trim().toUpperCase();
  return all.find(c => c.id.toUpperCase() === cleaned);
}

export function addNewComplaint(complaint: Complaint): void {
  const all = getStoredComplaints();
  const updated = [complaint, ...all];
  saveStoredComplaints(updated);
}

export function updateComplaintRecord(id: string, updates: Partial<Complaint>): Complaint | null {
  const all = getStoredComplaints();
  const index = all.findIndex(c => c.id.toUpperCase() === id.trim().toUpperCase());
  if (index === -1) return null;

  const current = all[index];
  const updated: Complaint = {
    ...current,
    ...updates,
    lastUpdatedAt: new Date().toISOString()
  };

  all[index] = updated;
  saveStoredComplaints(all);
  return updated;
}

export function resetDemoDataToDefault(): Complaint[] {
  try {
    localStorage.setItem(COMPLAINTS_KEY, JSON.stringify(INITIAL_COMPLAINTS));
  } catch (e) {
    console.error(e);
  }
  return INITIAL_COMPLAINTS;
}

export function getStoredPackage(): 'pkg1' | 'pkg2' | 'pkg3' {
  const p = localStorage.getItem(PACKAGE_KEY);
  if (p === 'pkg1' || p === 'pkg2' || p === 'pkg3') {
    return p;
  }
  return 'pkg3'; // Default to full package demo so client can see the entire depth
}

export function setStoredPackage(pkg: 'pkg1' | 'pkg2' | 'pkg3'): void {
  localStorage.setItem(PACKAGE_KEY, pkg);
}

export function getStoredLanguage(): 'hi' | 'en' {
  const lang = localStorage.getItem(LANG_KEY);
  return lang === 'en' ? 'en' : 'hi';
}

export function setStoredLanguage(lang: 'hi' | 'en'): void {
  localStorage.setItem(LANG_KEY, lang);
}

export interface AdminAuth {
  isAuthenticated: boolean;
  username: string;
  role: 'p2_admin' | 'national_admin';
  displayName: string;
}

export function getStoredAdminAuth(): AdminAuth | null {
  try {
    const raw = localStorage.getItem(ADMIN_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setStoredAdminAuth(auth: AdminAuth | null): void {
  if (!auth) {
    localStorage.removeItem(ADMIN_SESSION_KEY);
  } else {
    localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(auth));
  }
}
