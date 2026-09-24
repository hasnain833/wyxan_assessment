export interface SeedVisit {
  person: string;
  address: string;
  method: 'typed' | 'link' | 'back' | 'forward' | 'history' | 'search';
  timestamp: Date;
}

// Generate an hour of deterministic browsing history (from 19:00 to 20:00)
const baseTime = new Date('2026-09-22T19:00:00.000Z').getTime();
const minute = (m: number) => new Date(baseTime + m * 60 * 1000);

export const SEED_VISITS: SeedVisit[] = [
  // === Ada: Has been nearly everywhere (extensive explorer, 25 visits) ===
  { person: 'Ada', address: 'tidepool.zz', method: 'typed', timestamp: minute(1) },
  { person: 'Ada', address: 'foxglove.zz', method: 'link', timestamp: minute(3) },
  { person: 'Ada', address: 'candlewick.zz', method: 'link', timestamp: minute(5) },
  { person: 'Ada', address: 'terranova.zz', method: 'link', timestamp: minute(7) },
  { person: 'Ada', address: 'candlewick.zz', method: 'back', timestamp: minute(9) },
  { person: 'Ada', address: 'terranova.zz', method: 'forward', timestamp: minute(10) },
  { person: 'Ada', address: 'lighthouse.zz', method: 'link', timestamp: minute(12) },
  { person: 'Ada', address: 'pendulum.zz', method: 'link', timestamp: minute(15) },
  { person: 'Ada', address: 'brickwork.zz', method: 'link', timestamp: minute(18) },
  { person: 'Ada', address: 'nightowl.zz', method: 'link', timestamp: minute(21) },
  { person: 'Ada', address: 'inkwell.zz', method: 'typed', timestamp: minute(25) },
  { person: 'Ada', address: 'raincatcher.zz', method: 'link', timestamp: minute(28) },
  { person: 'Ada', address: 'terranova.zz', method: 'link', timestamp: minute(31) },
  { person: 'Ada', address: 'foxglove.zz', method: 'link', timestamp: minute(34) },
  { person: 'Ada', address: 'tidepool.zz', method: 'link', timestamp: minute(36) },
  { person: 'Ada', address: 'deepblue.zz', method: 'link', timestamp: minute(39) }, // attempted broken link
  { person: 'Ada', address: 'tidepool.zz', method: 'back', timestamp: minute(40) },
  { person: 'Ada', address: 'lighthouse.zz', method: 'history', timestamp: minute(44) },
  { person: 'Ada', address: 'pendulum.zz', method: 'link', timestamp: minute(46) },
  { person: 'Ada', address: 'stardust.zz', method: 'link', timestamp: minute(48) }, // attempted broken link
  { person: 'Ada', address: 'nightowl.zz', method: 'back', timestamp: minute(49) },
  { person: 'Ada', address: 'inkwell.zz', method: 'search', timestamp: minute(52) },
  { person: 'Ada', address: 'candlewick.zz', method: 'link', timestamp: minute(55) },
  { person: 'Ada', address: 'tidepool.zz', method: 'history', timestamp: minute(58) },

  // === Clara: Deep trail explorer (4+ deep trail and retraces) ===
  { person: 'Clara', address: 'nightowl.zz', method: 'typed', timestamp: minute(4) },
  { person: 'Clara', address: 'brickwork.zz', method: 'link', timestamp: minute(8) },
  { person: 'Clara', address: 'terranova.zz', method: 'link', timestamp: minute(13) },
  { person: 'Clara', address: 'candlewick.zz', method: 'link', timestamp: minute(17) },
  { person: 'Clara', address: 'inkwell.zz', method: 'link', timestamp: minute(22) },
  { person: 'Clara', address: 'candlewick.zz', method: 'back', timestamp: minute(25) },
  { person: 'Clara', address: 'terranova.zz', method: 'back', timestamp: minute(27) },
  { person: 'Clara', address: 'brickwork.zz', method: 'back', timestamp: minute(29) },
  { person: 'Clara', address: 'nightowl.zz', method: 'back', timestamp: minute(31) },
  { person: 'Clara', address: 'pendulum.zz', method: 'link', timestamp: minute(35) },
  { person: 'Clara', address: 'lighthouse.zz', method: 'link', timestamp: minute(39) },
  { person: 'Clara', address: 'tidepool.zz', method: 'link', timestamp: minute(43) },

  // === Beck: Casual repeat visitor ===
  { person: 'Beck', address: 'tidepool.zz', method: 'typed', timestamp: minute(6) },
  { person: 'Beck', address: 'foxglove.zz', method: 'link', timestamp: minute(11) },
  { person: 'Beck', address: 'tidepool.zz', method: 'back', timestamp: minute(14) },
  { person: 'Beck', address: 'lighthouse.zz', method: 'link', timestamp: minute(20) },
  { person: 'Beck', address: 'tidepool.zz', method: 'typed', timestamp: minute(32) },
  { person: 'Beck', address: 'foxglove.zz', method: 'link', timestamp: minute(37) },
  { person: 'Beck', address: 'candlewick.zz', method: 'link', timestamp: minute(42) },
  { person: 'Beck', address: 'tidepool.zz', method: 'history', timestamp: minute(53) },

  // === Dante: Search-driven researcher ===
  { person: 'Dante', address: 'pendulum.zz', method: 'search', timestamp: minute(16) },
  { person: 'Dante', address: 'lighthouse.zz', method: 'link', timestamp: minute(23) },
  { person: 'Dante', address: 'raincatcher.zz', method: 'search', timestamp: minute(33) },
  { person: 'Dante', address: 'inkwell.zz', method: 'link', timestamp: minute(38) },
  { person: 'Dante', address: 'brickwork.zz', method: 'search', timestamp: minute(47) },
  { person: 'Dante', address: 'terranova.zz', method: 'link', timestamp: minute(54) },

  // === Erin: Quiet, focused visits ===
  { person: 'Erin', address: 'inkwell.zz', method: 'typed', timestamp: minute(19) },
  { person: 'Erin', address: 'raincatcher.zz', method: 'link', timestamp: minute(26) },
  { person: 'Erin', address: 'lostcove.zz', method: 'link', timestamp: minute(30) }, // broken link
  { person: 'Erin', address: 'inkwell.zz', method: 'back', timestamp: minute(32) },
  { person: 'Erin', address: 'foxglove.zz', method: 'search', timestamp: minute(50) },
];
