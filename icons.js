// Simple abstract line-icon set (stroke-based, geometric, no figurative drawing)
const ICON = {
  target: `<circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="10.5"/><circle cx="24" cy="24" r="3.2" fill="currentColor" stroke="none"/>`,
  sliders: `<line x1="8" y1="14" x2="40" y2="14"/><circle cx="27" cy="14" r="4.2" fill="var(--panel)"/><line x1="8" y1="24" x2="40" y2="24"/><circle cx="17" cy="24" r="4.2" fill="var(--panel)"/><line x1="8" y1="34" x2="40" y2="34"/><circle cx="32" cy="34" r="4.2" fill="var(--panel)"/>`,
  layers: `<polygon points="24,7 41,16 24,25 7,16" /><polyline points="7,24 24,33 41,24" /><polyline points="7,32 24,41 41,32" />`,
  medal: `<circle cx="24" cy="19" r="12"/><circle cx="24" cy="19" r="5.6"/><polyline points="17,29.5 13,42 24,36 35,42 31,29.5"/>`,
  list: `<line x1="18" y1="13" x2="41" y2="13"/><line x1="18" y1="24" x2="41" y2="24"/><line x1="18" y1="35" x2="41" y2="35"/><circle cx="9" cy="13" r="2.3" fill="currentColor" stroke="none"/><circle cx="9" cy="24" r="2.3" fill="currentColor" stroke="none"/><circle cx="9" cy="35" r="2.3" fill="currentColor" stroke="none"/>`,
  clock: `<circle cx="24" cy="24" r="17"/><polyline points="24,14 24,24 32,29"/>`,
  toggle: `<rect x="6" y="16" width="36" height="16" rx="8"/><circle cx="32" cy="24" r="5.5" fill="currentColor" stroke="none"/>`,
  calendar: `<rect x="7" y="11" width="34" height="30" rx="3"/><line x1="7" y1="20" x2="41" y2="20"/><line x1="15" y1="6" x2="15" y2="15"/><line x1="33" y1="6" x2="33" y2="15"/>`,
  check: `<polyline points="9,25 19,35 39,13"/>`,
  building: `<rect x="10" y="9" width="20" height="32"/><rect x="30" y="19" width="10" height="22"/><line x1="15" y1="16" x2="20" y2="16"/><line x1="15" y1="23" x2="20" y2="23"/><line x1="15" y1="30" x2="20" y2="30"/>`,
  globe: `<circle cx="24" cy="24" r="17"/><ellipse cx="24" cy="24" rx="7.2" ry="17"/><line x1="7" y1="24" x2="41" y2="24"/>`,
};

function svgIcon(name, size = 48) {
  return `<svg viewBox="0 0 48 48" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${ICON[name]}</svg>`;
}

module.exports = { svgIcon };
