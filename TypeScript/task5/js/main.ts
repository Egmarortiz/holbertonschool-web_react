export interface MajorCredits {
  credits: number;
  readonly brand: 'MajorCredits';
}

export interface MinorCredits {
  credits: number;
  readonly brand: 'MinorCredits';
}

// Helpers
const major = (n: number): MajorCredits => ({ credits: n, brand: 'MajorCredits' });
const minor = (n: number): MinorCredits => ({ credits: n, brand: 'MinorCredits' });

// Sums
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'MajorCredits' };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: 'MinorCredits' };
}

// Demo
const m1 = major(3);
const m2 = major(4);
const mi1 = minor(1);
const mi2 = minor(2);

const mTotal = sumMajorCredits(m1, m2);
const miTotal = sumMinorCredits(mi1, mi2);

console.log('Major total:', mTotal.credits); // 7
console.log('Minor total:', miTotal.credits); // 3
