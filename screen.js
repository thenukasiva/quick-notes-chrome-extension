var screenshot = {
    content : document.createElement("canvas"),
    data : '',
  
     init : function() {
      this.initEvents();
    },
    saveScreenshot : function() {
      var image = new Image();
      image.onload = function() {
        var canvas = screenshot.content;
        canvas.width = image.width;
        canvas.height = image.height;
        var context = canvas.getContext("2d");
        context.drawImage(image, 0, 0);
  
        var link = document.createElement('a');
        link.download = "notes.png";
        link.href = screenshot.content.toDataURL();
        link.click();
        screenshot.data = '';
      };
      image.src = screenshot.data; 
    },
    initEvents : function() {
        document.addEventListener('DOMContentLoaded', () => {
            getCurrentTabUrl((url) => {
                const save = document.querySelector('#save-page');
                save.addEventListener('click', () => {
                    chrome.tabs.captureVisibleTab(null, {format : "png"}, function(data) {
                        screenshot.data = data;
                        screenshot.saveScreenshot();
            
                    }); 
                })
            });
        });
    }
};
  screenshot.init();