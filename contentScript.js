const replaceEnote = (string) => string.replace(/pull request/ig, 'e-note');
document.body.innerHTML = replaceEnote(document.body.innerHTML);
document.title = replaceEnote(document.title);
