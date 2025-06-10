export const sortByDate = (
  a: { frontmatter: { date: string | number | Date } },
  b: { frontmatter: { date: string | number | Date } }
): number => {
  return (
    (new Date(a.frontmatter.date) as unknown as number) -
    (new Date(b.frontmatter.date) as unknown as number)
  );
};
