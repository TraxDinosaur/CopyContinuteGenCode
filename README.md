# CopyContinuteGenCode

# Copy and Continue Generation Code

This JavaScript snippet adds a "Copy" button to code blocks on webpages, allowing users to easily copy code to their clipboard. Additionally, it automatically clicks buttons with the text "Continue generating" at regular intervals and continues generating code from ChatGPT without manual intervention.

## Installation

### Method 1: Manual Injection

1. Copy the entire JavaScript code from [CopyContinuteGenCode .js](https://github.com/TraxDinosaur/CopyContinuteGenCode/blob/main/CopyContinuteGenCode.js).
2. Open the developer console (usually by pressing F12 or right-clicking on the page and selecting "Inspect").
3. Go to the "Console" tab.
4. Paste the copied code into the console and press Enter.

### Method 2: Browser Extension

1. Install a user script manager extension such as Tampermonkey (for Chrome) or Greasemonkey (for Firefox) for your browser.
2. Click on the extension icon and choose "Create a new script".
3. Delete any default code and paste the copied JavaScript code.
4. Save the script.

## Usage

Once the script is running on a webpage, it will automatically add a "Copy" button to each code block. Clicking this button will copy the code inside the block to your clipboard.

Additionally, the script will continuously search for buttons with the text "Continue generating" and click them if found. It also automatically generates code from ChatGPT without requiring manual button clicks.

## Bookmarklet

You can also use the following bookmarklet to quickly inject the script into any webpage:

```javascript
javascript:(function () {
    function addCopyButtonToCodeBlock(block) {
        var copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.style.padding = '5px 10px';
        copyButton.style.backgroundColor = '#3b3c47';
        copyButton.style.color = '#FFFFFF';
        copyButton.style.border = 'none';
        copyButton.style.borderRadius = '3px';
        copyButton.style.cursor = 'pointer';
        copyButton.style.fontFamily = 'Arial, sans-serif';
        copyButton.style.fontSize = '12px';
        copyButton.style.fontWeight = 'bold';
        copyButton.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)';
        copyButton.style.transition = 'background-color 0.3s ease, box-shadow 0.3s ease';
        copyButton.textContent = '📋 Copy';
        copyButton.addEventListener('click', function () {
            var codeText = block.querySelector('code').textContent;
            var textArea = document.createElement('textarea');
            textArea.value = codeText;
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
        });
        copyButton.addEventListener('mouseover', function () {
            copyButton.style.backgroundColor = '#0055CC';
        });
        copyButton.addEventListener('mouseout', function () {
            copyButton.style.backgroundColor = '#3b3c47';
        });
        var wrapper = document.createElement('div');
        wrapper.style.textAlign = 'right';
        wrapper.style.marginTop = '5px';
        wrapper.appendChild(copyButton);
        block.parentNode.insertBefore(wrapper, block.nextSibling);
    }

    function observeCodeBlocks(mutationsList) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach(function (node) {
                    if (node.tagName && node.tagName.toLowerCase() === 'pre') {
                        addCopyButtonToCodeBlock(node);
                    }
                });
            }
        });
    }

    function addCopyButtonToCodeBlocks() {
        var codeBlocks = document.querySelectorAll('pre');
        codeBlocks.forEach(function (block) {
            addCopyButtonToCodeBlock(block);
        });
    }

    function clickButtonWithText() {
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(button => {
            if (button.textContent === 'Continue generating') {
                button.click();
            }
        });
    }

    function init() {
        addCopyButtonToCodeBlocks();
        var observer = new MutationObserver(observeCodeBlocks);
        observer.observe(document.body, { childList: true, subtree: true });
        setInterval(clickButtonWithText, 1000);
    }

    init();
})();
```

To use the bookmarklet, create a new bookmark in your browser and paste the above code into the URL field.

## Example

To see this script in action, visit a webpage with code blocks (e.g., a programming tutorial or documentation) and ensure that the script is running.

## Compatibility

This script should work on most modern web browsers that support JavaScript.

## Disclaimer

Use this script responsibly and only on websites where you have permission to run custom scripts. The author takes no responsibility for any misuse or damage caused by this script.

## License

This project is licensed under the [CC BY-SA 4.0 License](https://github.com/TraxDinosaur/CopyContinuteGenCode/blob/main/LICENSE).
