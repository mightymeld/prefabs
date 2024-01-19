const fs = require('fs');

const inputFilePath = 'src/Tailwind.jsx';
const outputFilePath = 'src/Tailwind_purple.jsx';

const tailwindContent = fs.readFileSync(inputFilePath, 'utf8');

function replaceColors(content) {
  return content.replace(/-sky/g, '-purple');
}

const transformedContent = replaceColors(tailwindContent);

fs.writeFileSync(outputFilePath, transformedContent, 'utf8');