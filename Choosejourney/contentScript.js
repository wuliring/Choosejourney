chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === "fillTextarea") {
        const concatenatedTexts = message.data;
        console.log("Received message with action 'fillTextarea'. Data:", concatenatedTexts);
        const findInputElement = () => {
            console.log("Searching for input elements...");
            const allInputs = Array.from(document.querySelectorAll('textarea, input[type="text"], div[contenteditable="true"]'))
                .filter(el => el.offsetParent !== null);
            if (allInputs.length === 0) {
                console.error("No visible text input fields found on the page.");
                return null;
            }
            console.log("Input elements found:", allInputs);
            return allInputs[0];
        };
        const inputElement = findInputElement();
        if (!inputElement) {
            sendResponse({ status: "failed", message: "No visible text input fields found" });
            return;
        }
        console.log("Selected input element:", inputElement);
        const focusInput = () => {
            console.log("Focusing on the input element...");
            return new Promise((resolve) => {
                inputElement.focus();
                setTimeout(() => {
                    if (document.activeElement === inputElement) {
                        console.log("Input element focused.");
                        resolve();
                    } else {
                        console.warn("Failed to focus, retrying...");
                        inputElement.focus();
                        setTimeout(resolve, 100);
                    }
                }, 100);
            });
        };
        const setInputValue = () => {
            console.log("Setting input value...");
            return new Promise((resolve) => {
                if (inputElement.tagName.toLowerCase() === 'textarea' || inputElement.tagName.toLowerCase() === 'input') {
                    inputElement.value = concatenatedTexts;
                    console.log("Set value for textarea or input:", concatenatedTexts);
                    const inputEvent = new Event('input', { bubbles: true });
                    inputElement.dispatchEvent(inputEvent);
                } else if (inputElement.getAttribute('contenteditable') === 'true') {
                    inputElement.innerHTML = concatenatedTexts;
                    console.log("Set value for contenteditable element:", concatenatedTexts);
                    const inputEvent = new Event('input', { bubbles: true });
                    inputElement.dispatchEvent(inputEvent);
                }
                resolve();
            });
        };
        focusInput()
            .then(setInputValue)
            .then(focusInput)
            .then(() => {
                console.log("All steps completed successfully.");
                sendResponse({ status: "success" });
            })
            .catch((error) => {
                console.error("An error occurred during the process:", error);
                sendResponse({ status: "failed", message: "An error occurred" });
            });
    }
    return true;
});
