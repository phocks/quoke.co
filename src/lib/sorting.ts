// Types
import { MarkdownInstance } from "astro";
import type { QuoteFrontmatter } from "$lib/types";

import * as R from "ramda";

/**
 * Sort quotes by dateAdded
 * @param quotes - Markdown pages to sort
 * @returns - The sorted quotes
 */
export const sortQuotesDescendingByTime = (
  quotes: MarkdownInstance<QuoteFrontmatter>[]
) => {
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
    // TODO: Deal with missing dateAdded values
    const first = a?.frontmatter?.dateAdded;
    if (!first) return 1;

    const second = b.frontmatter.dateAdded;
    if (!second) return -1;

    const comparison = second.localeCompare(first);
    return comparison;
  };

  const sortByMostRecent = R.sort(diff);
  const sortedQuotes = sortByMostRecent(quotes);
  return sortedQuotes;
};
