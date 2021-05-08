# @uppercod/indentation

allows to know the indentation per line associated with each line a depth factor, the calculation is indifferent to the use of tab or space so it is constant.

## install

```
npm install @uppercod/indentation
```

## Usage

```js
import { getIndentation } from "@uppercod/indentation";

const yaml = `
root
    - every
`;

console.log(getIndetation(yaml)); // [[0,'root'],[1,'- every']];
```
