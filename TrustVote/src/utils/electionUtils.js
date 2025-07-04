export const generatePin = () => Math.random().toString(36).substring(2, 8).toUpperCase();

export const generateQR = (pin) => `QR_${pin}`;

export const getElectionStatus = (election) => {
  const now = new Date();
  const start = new Date(election.startDate);
  const end = new Date(election.endDate);
  
  if (now < start) return 'upcoming';
  if (now > end) return 'completed';
  return 'active';
};