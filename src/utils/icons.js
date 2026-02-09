// Theme color helpers
export function themeColors(theme) {
  if (theme === 'B') return { p: '#00897B', l: '#26A69A', d: '#00695C', bg: '#E0F2F1' }
  return { p: '#1565C0', l: '#42A5F5', d: '#0D47A1', bg: '#EBF2FC' }
}

// Style A: Square icon (64x64, rx=16, for core/category functions)
export function squareIcon(theme, innerSvg, id) {
  const c = themeColors(theme)
  return `<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><defs><linearGradient id="${id}_g" x1="10" y1="10" x2="54" y2="54"><stop stop-color="${c.p}"/><stop offset="1" stop-color="${c.l}"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="${c.bg}"/>${innerSvg.replace(/\$P/g, c.p).replace(/\$L/g, c.l).replace(/\$D/g, c.d).replace(/\$G/g, `url(#${id}_g)`)}</svg>`
}

// ============ PATIENT HOME — Quick Funcs (Style B circle, fixed semantic colors) ============

export function iconCheckin() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#E8F5E9"/><path d="M16 27l7 7 13-15" stroke="#2E7D32" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

export function iconPayment() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#FFF3E0"/><circle cx="26" cy="26" r="15" fill="#EF6C00"/><text x="26" y="33" text-anchor="middle" fill="white" font-size="19" font-weight="800" font-family="Arial">¥</text></svg>`
}

export function iconReport() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#E3F2FD"/><rect x="12" y="10" width="19" height="26" rx="3" fill="#1565C0"/><rect x="16" y="16" width="11" height="2.5" rx="1" fill="white" opacity=".8"/><rect x="16" y="21" width="8" height="2" rx="1" fill="white" opacity=".5"/><rect x="16" y="25" width="10" height="2" rx="1" fill="white" opacity=".5"/><circle cx="36" cy="36" r="9" fill="none" stroke="#1565C0" stroke-width="3"/><line x1="42" y1="42" x2="46" y2="46" stroke="#1565C0" stroke-width="3" stroke-linecap="round"/></svg>`
}

export function iconCalendar() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#F3E5F5"/><rect x="10" y="14" width="26" height="26" rx="5" fill="#7B1FA2" opacity=".85"/><rect x="10" y="14" width="26" height="9" rx="5" fill="#7B1FA2"/><rect x="18" y="10" width="3.5" height="8" rx="1.75" fill="#7B1FA2"/><rect x="24.5" y="10" width="3.5" height="8" rx="1.75" fill="#7B1FA2"/><circle cx="19" cy="30" r="2.5" fill="white" opacity=".8"/><circle cx="27" cy="30" r="2.5" fill="white" opacity=".5"/><circle cx="19" cy="36" r="2.5" fill="white" opacity=".5"/><circle cx="27" cy="36" r="2.5" fill="white" opacity=".3"/></svg>`
}

// ============ PATIENT HOME — Main Actions (Style A square, theme-aware) ============

export function iconAppointment(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><defs><linearGradient id="apt_g" x1="8" y1="8" x2="40" y2="40"><stop stop-color="${c.p}"/><stop offset="1" stop-color="${c.l}"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="8" width="20" height="26" rx="3.5" fill="url(#apt_g)"/><rect x="14" y="13" width="12" height="2.5" rx="1.25" fill="white" opacity=".85"/><rect x="14" y="18" width="8" height="2" rx="1" fill="white" opacity=".5"/><rect x="14" y="22" width="10" height="2" rx="1" fill="white" opacity=".5"/><circle cx="34" cy="34" r="9" fill="${c.p}"/><path d="M31 34h6M34 31v6" stroke="white" stroke-width="2" stroke-linecap="round"/></svg>`
}

export function iconOnlineClinic(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><defs><linearGradient id="oc_g" x1="6" y1="8" x2="38" y2="40"><stop stop-color="${c.p}"/><stop offset="1" stop-color="${c.l}"/></linearGradient></defs><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="6" y="10" width="28" height="22" rx="4" fill="url(#oc_g)"/><circle cx="20" cy="18" r="4" fill="white" opacity=".9"/><ellipse cx="20" cy="28" rx="8" ry="4" fill="white" opacity=".45"/><circle cx="38" cy="16" r="6.5" fill="${c.p}"/><rect x="35" y="13.5" width="6" height="4" rx="1" fill="white" opacity=".85"/><circle cx="38" cy="15" r="1" fill="${c.p}"/></svg>`
}

// ============ PATIENT HOME — Category Grid (Style A square, theme-aware) ============

export function iconRegRecord(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="10" width="20" height="24" rx="3" fill="${c.p}"/><path d="M15 20l4 4 8-9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="15" y="28" width="10" height="2" rx="1" fill="white" opacity=".5"/></svg>`
}

export function iconInsurance(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><circle cx="24" cy="20" r="8" fill="${c.p}"/><path d="M20 20h8M24 16v8" stroke="white" stroke-width="2.5" stroke-linecap="round"/><rect x="14" y="32" width="20" height="6" rx="3" fill="${c.p}" opacity=".5"/></svg>`
}

export function iconLabOrder(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="8" width="20" height="26" rx="3" fill="${c.p}"/><rect x="14" y="13" width="12" height="2" rx="1" fill="white" opacity=".8"/><rect x="14" y="17.5" width="8" height="1.5" rx=".75" fill="white" opacity=".5"/><rect x="14" y="21" width="10" height="1.5" rx=".75" fill="white" opacity=".5"/><circle cx="34" cy="34" r="8" fill="${c.d}"/><rect x="31" y="31" width="6" height="6" rx="1" fill="white" opacity=".8"/></svg>`
}

export function iconEmbryoFee(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><circle cx="24" cy="24" r="13" fill="${c.p}"/><text x="24" y="30" text-anchor="middle" fill="white" font-size="15" font-weight="800" font-family="Arial">¥</text></svg>`
}

export function iconMaternity(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="12" y="10" width="18" height="24" rx="3" fill="${c.p}"/><circle cx="21" cy="18" r="4" fill="white" opacity=".7"/><ellipse cx="21" cy="28" rx="6" ry="3.5" fill="white" opacity=".4"/><circle cx="34" cy="34" r="7" fill="${c.d}"/><path d="M31.5 34h5M34 31.5v5" stroke="white" stroke-width="1.8" stroke-linecap="round"/></svg>`
}

export function iconPhysical(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="12" width="22" height="22" rx="4" fill="${c.p}" opacity=".85"/><rect x="10" y="12" width="22" height="8" rx="4" fill="${c.p}"/><rect x="17" y="8" width="3" height="8" rx="1.5" fill="${c.p}"/><rect x="22" y="8" width="3" height="8" rx="1.5" fill="${c.p}"/><circle cx="17" cy="26" r="2" fill="white" opacity=".8"/><circle cx="25" cy="26" r="2" fill="white" opacity=".5"/><circle cx="17" cy="31" r="2" fill="white" opacity=".5"/></svg>`
}

export function iconSlice(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="12" y="10" width="18" height="24" rx="3" fill="${c.p}"/><rect x="16" y="15" width="10" height="2" rx="1" fill="white" opacity=".7"/><rect x="16" y="19" width="7" height="1.5" rx=".75" fill="white" opacity=".4"/><rect x="16" y="22.5" width="9" height="1.5" rx=".75" fill="white" opacity=".4"/><circle cx="34" cy="34" r="7" fill="${c.d}"/><rect x="31.5" y="32" width="5" height="4" rx="1" fill="white" opacity=".8"/></svg>`
}

export function iconPathology(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><circle cx="20" cy="18" r="6" fill="${c.p}"/><circle cx="32" cy="18" r="6" fill="${c.p}" opacity=".6"/><ellipse cx="24" cy="34" rx="12" ry="6" fill="${c.p}" opacity=".5"/><circle cx="20" cy="18" r="3" fill="white" opacity=".4"/></svg>`
}

// ============ PATIENT HOME — Hospital Category (住院) ============

export function iconHospitalPay(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="8" y="14" width="26" height="18" rx="4" fill="${c.p}"/><rect x="8" y="19" width="26" height="4" fill="${c.d}"/><text x="21" y="38" text-anchor="middle" fill="${c.p}" font-size="11" font-weight="800" font-family="Arial">¥</text><circle cx="38" cy="36" r="7" fill="${c.d}"/><path d="M35 36l2.5 2.5 4-4.5" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

export function iconHospitalList(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="8" width="22" height="30" rx="3" fill="${c.p}"/><rect x="15" y="14" width="12" height="2.5" rx="1" fill="white" opacity=".8"/><rect x="15" y="19" width="9" height="2" rx="1" fill="white" opacity=".5"/><rect x="15" y="23.5" width="11" height="2" rx="1" fill="white" opacity=".5"/><rect x="15" y="28" width="7" height="2" rx="1" fill="white" opacity=".4"/><rect x="15" y="32.5" width="10" height="2" rx="1" fill="white" opacity=".3"/></svg>`
}

export function iconDischarge(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="12" width="20" height="24" rx="3" fill="${c.p}"/><path d="M16 22l4 4 8-9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M34 18l6 6-6 6" stroke="${c.p}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><line x1="28" y1="24" x2="40" y2="24" stroke="${c.p}" stroke-width="3" stroke-linecap="round"/></svg>`
}

export function iconDailyList(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="10" width="22" height="26" rx="4" fill="${c.p}" opacity=".85"/><rect x="10" y="10" width="22" height="9" rx="4" fill="${c.p}"/><rect x="17" y="6" width="3" height="8" rx="1.5" fill="${c.p}"/><rect x="22" y="6" width="3" height="8" rx="1.5" fill="${c.p}"/><rect x="15" y="24" width="12" height="2" rx="1" fill="white" opacity=".7"/><rect x="15" y="28.5" width="8" height="2" rx="1" fill="white" opacity=".5"/><rect x="15" y="33" width="10" height="2" rx="1" fill="white" opacity=".4"/></svg>`
}

// ============ PATIENT MY — Orders (Style B circle, fixed semantic) ============

export function iconOrderPay() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#FFF3E0"/><circle cx="26" cy="26" r="15" fill="#EF6C00"/><text x="26" y="33" text-anchor="middle" fill="white" font-size="19" font-weight="800" font-family="Arial">¥</text></svg>`
}

export function iconOrderChat() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#E3F2FD"/><rect x="10" y="12" width="26" height="20" rx="5" fill="#1565C0"/><path d="M18 36l-4 6v-6" fill="#1565C0"/><circle cx="19" cy="22" r="2" fill="white" opacity=".8"/><circle cx="26" cy="22" r="2" fill="white" opacity=".8"/><circle cx="33" cy="22" r="2" fill="white" opacity=".8"/></svg>`
}

export function iconOrderLab() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#E8F5E9"/><rect x="12" y="10" width="20" height="26" rx="3" fill="#2E7D32"/><rect x="16" y="16" width="12" height="2.5" rx="1" fill="white" opacity=".8"/><rect x="16" y="21" width="8" height="2" rx="1" fill="white" opacity=".5"/><rect x="16" y="25" width="10" height="2" rx="1" fill="white" opacity=".5"/><path d="M16 30l3 3 6-7" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

export function iconOrderRefund() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#FFEBEE"/><circle cx="26" cy="26" r="14" fill="#C62828"/><path d="M20 20l12 12M32 20l-12 12" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>`
}

// ============ PATIENT MY — Health Services (Style A square, theme-aware) ============

export function iconMyReg(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="10" width="20" height="24" rx="3" fill="${c.p}"/><path d="M15 20l4 4 8-9" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/><rect x="15" y="28" width="10" height="2" rx="1" fill="white" opacity=".5"/></svg>`
}

export function iconMyWaitlist(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><circle cx="24" cy="24" r="13" fill="${c.p}"/><path d="M24 16v9l6 4" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

export function iconMyPrescription(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="8" width="22" height="28" rx="3" fill="${c.p}"/><text x="21" y="28" text-anchor="middle" fill="white" font-size="16" font-weight="800" font-family="serif">Rx</text></svg>`
}

export function iconMyTest(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="14" y="6" width="6" height="20" rx="3" fill="${c.p}" opacity=".7"/><rect x="24" y="12" width="6" height="14" rx="3" fill="${c.p}"/><rect x="34" y="8" width="6" height="18" rx="3" fill="${c.p}" opacity=".5"/><rect x="10" y="30" width="34" height="4" rx="2" fill="${c.p}" opacity=".3"/></svg>`
}

export function iconMyReport(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="8" width="20" height="28" rx="3" fill="${c.p}"/><rect x="14" y="14" width="12" height="2.5" rx="1" fill="white" opacity=".8"/><rect x="14" y="19" width="8" height="2" rx="1" fill="white" opacity=".5"/><rect x="14" y="23" width="10" height="2" rx="1" fill="white" opacity=".5"/><circle cx="36" cy="34" r="8" fill="none" stroke="${c.p}" stroke-width="3"/><line x1="41.5" y1="39.5" x2="45" y2="43" stroke="${c.p}" stroke-width="3" stroke-linecap="round"/></svg>`
}

// ============ DOCTOR WORKSTATION — Clinic Items (Style A square, theme-aware) ============

export function iconDrOnline(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="8" y="10" width="24" height="20" rx="4" fill="${c.p}"/><circle cx="20" cy="18" r="4" fill="white" opacity=".85"/><ellipse cx="20" cy="26" rx="7" ry="3.5" fill="white" opacity=".4"/><circle cx="36" cy="14" r="6" fill="${c.d}"/><rect x="33.5" y="12" width="5" height="3.5" rx="1" fill="white" opacity=".8"/><circle cx="36" cy="13.5" r=".8" fill="${c.d}"/></svg>`
}

export function iconDrTeam(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><circle cx="18" cy="16" r="5" fill="${c.p}"/><circle cx="30" cy="16" r="5" fill="${c.p}" opacity=".65"/><ellipse cx="18" cy="30" rx="8" ry="5" fill="${c.p}" opacity=".7"/><ellipse cx="30" cy="30" rx="8" ry="5" fill="${c.p}" opacity=".4"/></svg>`
}

export function iconDrLab(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="8" width="20" height="26" rx="3" fill="${c.p}"/><rect x="14" y="13" width="12" height="2.5" rx="1" fill="white" opacity=".8"/><rect x="14" y="18" width="8" height="2" rx="1" fill="white" opacity=".5"/><rect x="14" y="22" width="10" height="2" rx="1" fill="white" opacity=".5"/><circle cx="34" cy="34" r="8" fill="${c.d}"/><rect x="31" y="31" width="6" height="6" rx="1" fill="white" opacity=".8"/></svg>`
}

export function iconDrRefund(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><circle cx="24" cy="24" r="13" fill="${c.p}"/><text x="24" y="30" text-anchor="middle" fill="white" font-size="15" font-weight="800" font-family="Arial">¥</text><path d="M34 10l6 6-6 6" stroke="${c.p}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

export function iconDrRecord(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><rect x="10" y="8" width="22" height="28" rx="3" fill="${c.p}"/><rect x="15" y="14" width="12" height="2.5" rx="1" fill="white" opacity=".8"/><rect x="15" y="19" width="8" height="2" rx="1" fill="white" opacity=".5"/><rect x="15" y="23" width="10" height="2" rx="1" fill="white" opacity=".5"/><rect x="15" y="27" width="6" height="2" rx="1" fill="white" opacity=".4"/></svg>`
}

export function iconDrPrenatal(theme) {
  const c = themeColors(theme)
  return `<svg width="48" height="48" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="12" fill="${c.bg}"/><circle cx="24" cy="18" r="7" fill="${c.p}"/><circle cx="24" cy="18" r="3.5" fill="white" opacity=".4"/><ellipse cx="24" cy="34" rx="12" ry="6" fill="${c.p}" opacity=".5"/><path d="M18 28c0-3 2.7-5 6-5s6 2 6 5" stroke="${c.p}" stroke-width="2" fill="none"/></svg>`
}

// ============ DOCTOR WORKSTATION — Quick Items (Style B circle, fixed semantic) ============

export function iconDrReview() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#FFF8E1"/><path d="M26 12l4 8 9 1.3-6.5 6.3 1.5 9L26 32l-8 4.6 1.5-9L13 21.3l9-1.3z" fill="#F9A825"/></svg>`
}

export function iconDrQR() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#E3F2FD"/><rect x="12" y="12" width="11" height="11" rx="2" fill="#1565C0"/><rect x="14.5" y="14.5" width="6" height="6" rx="1" fill="white"/><rect x="29" y="12" width="11" height="11" rx="2" fill="#1565C0"/><rect x="31.5" y="14.5" width="6" height="6" rx="1" fill="white"/><rect x="12" y="29" width="11" height="11" rx="2" fill="#1565C0"/><rect x="14.5" y="31.5" width="6" height="6" rx="1" fill="white"/><rect x="30" y="30" width="4" height="4" rx="1" fill="#1565C0" opacity=".6"/><rect x="36" y="36" width="4" height="4" rx="1" fill="#1565C0" opacity=".6"/><rect x="30" y="36" width="4" height="4" rx="1" fill="#1565C0" opacity=".3"/></svg>`
}

export function iconDrHistory() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#FFF3E0"/><rect x="12" y="10" width="20" height="26" rx="3" fill="#EF6C00"/><rect x="16" y="16" width="12" height="2.5" rx="1" fill="white" opacity=".8"/><rect x="16" y="21" width="8" height="2" rx="1" fill="white" opacity=".5"/><rect x="16" y="25" width="10" height="2" rx="1" fill="white" opacity=".5"/><circle cx="36" cy="36" r="8" fill="none" stroke="#EF6C00" stroke-width="2.5"/><path d="M36 31v5.5l3.5 2" stroke="#EF6C00" stroke-width="2" stroke-linecap="round"/></svg>`
}

export function iconDrRx() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#F3E5F5"/><rect x="12" y="10" width="22" height="28" rx="3" fill="#7B1FA2"/><text x="23" y="30" text-anchor="middle" fill="white" font-size="16" font-weight="800" font-family="serif">Rx</text></svg>`
}

export function iconDrHospital() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#E8F5E9"/><rect x="14" y="14" width="24" height="22" rx="4" fill="#2E7D32"/><path d="M22 22h8M26 18v8" stroke="white" stroke-width="3" stroke-linecap="round"/><rect x="22" y="30" width="8" height="6" rx="1" fill="white" opacity=".6"/></svg>`
}

export function iconDrFollowup() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#E3F2FD"/><rect x="14" y="12" width="18" height="28" rx="4" fill="#1565C0"/><rect x="18" y="14" width="10" height="2" rx="1" fill="white" opacity=".5"/><circle cx="23" cy="26" r="5" fill="white" opacity=".3"/><rect x="20" y="34" width="6" height="3" rx="1.5" fill="white" opacity=".6"/></svg>`
}

export function iconDrPulse() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#E0F2F1"/><path d="M8 26h10l4-10 5 20 5-14 4 4h8" stroke="#00897B" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`
}

export function iconDrSpace() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#ECEFF1"/><rect x="12" y="14" width="22" height="18" rx="3" fill="#546E7A"/><rect x="16" y="18" width="6" height="5" rx="1" fill="white" opacity=".5"/><rect x="24" y="18" width="6" height="5" rx="1" fill="white" opacity=".3"/><rect x="16" y="25" width="6" height="5" rx="1" fill="white" opacity=".3"/><rect x="24" y="25" width="6" height="5" rx="1" fill="white" opacity=".2"/><rect x="14" y="34" width="18" height="3" rx="1.5" fill="#546E7A" opacity=".5"/></svg>`
}

// ============ DOCTOR MY — Func Items (Style B circle, fixed semantic) ============

export function iconDrSettings() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#E8F5E9"/><circle cx="26" cy="26" r="8" fill="none" stroke="#2E7D32" stroke-width="3"/><circle cx="26" cy="26" r="3" fill="#2E7D32"/><path d="M26 12v6M26 34v6M12 26h6M34 26h6M16 16l4.2 4.2M31.8 31.8l4.2 4.2M36 16l-4.2 4.2M20.2 31.8l-4.2 4.2" stroke="#2E7D32" stroke-width="2.5" stroke-linecap="round"/></svg>`
}

export function iconDrOrders() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#E3F2FD"/><rect x="12" y="10" width="22" height="28" rx="3" fill="#1565C0"/><rect x="16" y="16" width="14" height="2.5" rx="1" fill="white" opacity=".8"/><rect x="16" y="21" width="10" height="2" rx="1" fill="white" opacity=".5"/><rect x="16" y="25" width="12" height="2" rx="1" fill="white" opacity=".5"/><rect x="16" y="29" width="8" height="2" rx="1" fill="white" opacity=".4"/></svg>`
}

export function iconDrMyQR() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#F3E5F5"/><rect x="12" y="12" width="11" height="11" rx="2" fill="#7B1FA2"/><rect x="14.5" y="14.5" width="6" height="6" rx="1" fill="white"/><rect x="29" y="12" width="11" height="11" rx="2" fill="#7B1FA2"/><rect x="31.5" y="14.5" width="6" height="6" rx="1" fill="white"/><rect x="12" y="29" width="11" height="11" rx="2" fill="#7B1FA2"/><rect x="14.5" y="31.5" width="6" height="6" rx="1" fill="white"/><rect x="30" y="30" width="4" height="4" rx="1" fill="#7B1FA2" opacity=".6"/><rect x="36" y="36" width="4" height="4" rx="1" fill="#7B1FA2" opacity=".6"/></svg>`
}

export function iconDrTeamSettings() {
  return `<svg width="52" height="52" viewBox="0 0 52 52" fill="none"><circle cx="26" cy="26" r="26" fill="#FFF3E0"/><circle cx="20" cy="18" r="5" fill="#EF6C00"/><circle cx="32" cy="18" r="5" fill="#EF6C00" opacity=".6"/><ellipse cx="26" cy="34" rx="14" ry="6" fill="#EF6C00" opacity=".5"/></svg>`
}

// ============ TAB BAR ICONS (solid filled, 24x24 viewBox) ============

export function tabHome(color) {
  return `<svg width="26" height="26" viewBox="0 0 24 24" fill="${color}"><path d="M4 21V9l8-6 8 6v12h-6v-6h-4v6H4z"/></svg>`
}

export function tabHealth(color) {
  return `<svg width="26" height="26" viewBox="0 0 24 24" fill="${color}"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`
}

export function tabMessage(color) {
  return `<svg width="26" height="26" viewBox="0 0 24 24" fill="${color}"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>`
}

export function tabMy(color) {
  return `<svg width="26" height="26" viewBox="0 0 24 24" fill="${color}"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>`
}

export function tabWorkstation(color) {
  return `<svg width="26" height="26" viewBox="0 0 24 24" fill="${color}"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/></svg>`
}

export function tabPatients(color) {
  return `<svg width="26" height="26" viewBox="0 0 24 24" fill="${color}"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>`
}
