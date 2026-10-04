// Kavvi totals from a read-only count query on the production database (no personal data).
// Refresh before publishing, and use the same numbers in the CV.
export const kavvi = {
  asOf: '4 Oct 2026',
  launched: '19 Sep 2026',
  students: 155,
  subjects: 165,
  lessons: 541,
  concepts: 2666,
  payers: 3,
  topVideoViews: '33K',
};

export const fmt = (n: number) => new Intl.NumberFormat('en-US').format(n);
