export function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: '2-digit', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('ko-KR', options);
}
