
chrome.tabs.onUpdated.addListener((tabId, info, tab) => {
    console.log(tab);
    if (tab.url.includes('chat.openai.com')) {
        console.log('Целевая страница была найдена');

        if (info.status === 'complete') {
            console.log('Страница загружена. Внедряю скрипт...');

            chrome.tabs.executeScript(tabId, { file: 'inject.js' });
            chrome.tabs.insertCSS(tabId, {file: 'inject.css'});
        }
    }
});