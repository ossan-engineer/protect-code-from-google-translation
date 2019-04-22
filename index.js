const preDomNodes = document.querySelectorAll("pre") || [];
const figureDomNodes = document.querySelectorAll("figure") || [];
const mergedNodes = [...preDomNodes, ...figureDomNodes];

mergedNodes.forEach(mergedNode => mergedNode.classList.add("notranslate"));
