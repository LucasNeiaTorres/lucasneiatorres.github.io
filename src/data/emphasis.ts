/**
 * Marcação mínima para a prosa dos arquivos de conteúdo: *assim* destaca no
 * acento. Existe para o acento ser escolhido no texto, e não no markup — e é
 * de propósito que só haja um marcador: o acento tem de continuar raro.
 */
const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const mark = (s: string): string =>
  escapeHtml(s).replace(/\*([^*]+)\*/g, '<b class="acc">$1</b>');
