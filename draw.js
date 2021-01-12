

function getCurrentTabUrl(callback) {
    let queryInfo = {
        active: true,
        currentWindow: true
    };

    chrome.tabs.query(queryInfo, (tabs) => {
        let tab = tabs[0];
        let url = tab.url;
        console.assert(typeof url == 'string', 'tab.url should be a string');
        callback(url);
    });
}


function startDraw() {
    chrome.tabs.executeScript({
        file: "sketch.js"
    });
}



document.addEventListener('DOMContentLoaded', () => {
    getCurrentTabUrl((url) => {
        const drawIcon = document.querySelector('#draw-button');
        drawIcon.addEventListener('click', () => {
            startDraw();
        })
    });
});