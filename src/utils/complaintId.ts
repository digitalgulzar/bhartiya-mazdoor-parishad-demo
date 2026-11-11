import { getStoredComplaints } from './storage';

export function generateNextComplaintId(): string {
  const currentYear = new Date().getFullYear();
  const all = getStoredComplaints();
  
  // Find highest serial in existing IDs formatted as BMP-DEMO-YYYY-XXXX
  let maxSerial = 5; // since initial has 1 to 5
  all.forEach(c => {
    const match = c.id.match(/BMP-DEMO-\d{4}-(\d+)/);
    if (match && match[1]) {
      const num = parseInt(match[1], 10);
      if (!isNaN(num) && num > maxSerial) {
        maxSerial = num;
      }
    }
  });

  const nextSerial = maxSerial + 1;
  const padded = String(nextSerial).padStart(4, '0');
  return `BMP-DEMO-${currentYear}-${padded}`;
}
