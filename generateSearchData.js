const remark = require("remark");
const mdx = require("remark-mdx");
const strip = require("remark-mdx-to-plain-text");

const parsed = remark().use(mdx).use(strip).parse(`
# Hello, world!

This is a paragraph.

## This is a heading

This is another paragraph.

### This is a subheading

This is another paragraph.
`);

console.log(parsed);
