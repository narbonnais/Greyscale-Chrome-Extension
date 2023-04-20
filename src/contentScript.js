(() => {
    console.log('content script loaded');
    const style = document.createElement('style');
    style.id = 'greyscale-extension-style';
    style.textContent = 'html { filter: grayscale(100%); }';
    const existingStyle = document.getElementById('greyscale-extension-style');
  
    if (existingStyle) {
      existingStyle.remove();
    } else {
      document.head.appendChild(style);
    }
  })();
  