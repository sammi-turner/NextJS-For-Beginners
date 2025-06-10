export const sortByDate = (a: any, b: any): number => {
  return (
    (new Date(a.frontmatter.date) as unknown as number) -
    (new Date(b.frontmatter.date) as unknown as number)
  );
};
