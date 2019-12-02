const preDomNodes = document.querySelectorAll('pre') || [];
const figureDomNodes = document.querySelectorAll('figure') || [];
const iframeDomNodes = document.querySelectorAll('iframe') || [];
const mergedNodes = [...preDomNodes, ...figureDomNodes, ...iframeDomNodes];

mergedNodes.forEach(mergedNode => mergedNode.classList.add('notranslate'));
