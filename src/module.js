/**
 * Generates a value based on the use of spaces or tab
 * @param {string} str
 * @returns {number}
 */
export const getValueIndentation = (str) =>
    str.split("").reduce((total, str) => (total += str.charCodeAt(0)), 0);

/**
 * Separate the string into lines and calculate
 * the indentation by giving a depth number from 0
 * @param {string} content
 * @returns {[number,string][]}
 */
export function getIndentation(content) {
    /**@type {number[]} */
    const deep = [];
    const lines = content.split(/\n/).map((value) => {
        const test = value.match(/^(\s*)(.*)/);
        const [, space, line] = test;
        const indentation = getValueIndentation(space);
        if (!deep.includes(indentation)) deep.push(indentation);
        return [indentation, line];
    });

    deep.sort((a, b) => (a > b ? 1 : -1));

    return lines.map(([indentation, line]) => [
        deep.indexOf(indentation),
        line,
    ]);
}
