export default function getListStudentIds(lists) {
  if (!Array.isArray(lists)) {
    return [];
  }
  return lists.map((student) => student.id);
}
