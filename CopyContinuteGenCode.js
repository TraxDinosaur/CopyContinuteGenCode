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
