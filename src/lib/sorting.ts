// Types
import { MarkdownInstance } from "astro";
import type { QuoteFrontmatter } from "$lib/types";

import * as R from "ramda";

/**
 * A comparitor function to pass to Ramda. TODO: actually turn to dates.
 * @param {QuoteFrontmatter} a - The first quote to compare
 * @param {QuoteFrontmatter} b - The second quote to compare
 * @returns {number} - The result of the comparison (1 or -1)
 */
const diff = (
  a: MarkdownInstance<QuoteFrontmatter>,
  b: MarkdownInstance<QuoteFrontmatter>
) => {
  // TODO: Deal with missing dateAdded
  const first = a.frontmatter.dateAdded;
  const second = b.frontmatter.dateAdded;
  const comparison = second.localeCompare(first);
  return comparison;
};

/**
 * Sort quotes by dateAdded
 * @param quotes - Markdown pages to sort
 * @returns - The sorted quotes
 */
export const sortQuotesDescendingByTime = (
  quotes: MarkdownInstance<QuoteFrontmatter>[]
) => {
  const sortByMostRecent = R.sort(diff);
  const sortedQuotes = sortByMostRecent(quotes);
  return sortedQuotes;
};
