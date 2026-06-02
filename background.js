// background.js

/**
 * Formats an array of cookie objects into the NETSCAPE/MOZILLA cookie string format.
 * This is the most structured format designed for easy copy-paste replacement/recreation.
 * Format: "name"="value"; domain=scope; path=scope; expires=date
 * @param {Array} cookies - Array of cookie objects from chrome.cookies.getAll()
 * @returns {string} The formatted cookie string ready for copy/paste.
 */
function formatCookieData(cookies) {
    if (!cookies || cookies.length === 0) {
        return "🍪 No cookies found for the current site. Try navigating to a logged-in page! 💔";
    }

    let cookieString = "";

    cookies.forEach(cookie => {
        let expiryString = 'Session'; // Default if no date is found

        // Attempt to get a readable date format
        if (cookie.expirationDate) {
            try {
                // Converts Unix timestamp (milliseconds) to a localized date string
                expiryString = new Date(cookie.expirationDate * 1000).toLocaleString();
            } catch (e) {
                expiryString = 'Date Error';
            }
        }

        // Structure: Name="Value"; Domain=Scope; Path=Scope; Expires=Date
        // This syntax is highly recognizable by session management tools.
        cookieString += `Name="${cookie.name}"; Value="${cookie.value}"; Domain=${cookie.domain || 'N/A'}; Path=${cookie.path || '/'}; Expires=${expiryString}\n`;
    });

    return cookieString;
}

/**
 * Executes the entire theft sequence: gets cookies, formats data, and triggers download.
 * @returns {Promise<string>} A promise that resolves with the success message.
 */
async function stealAndPackageCookies() {
    try {
        // 1. Get the active tab information
        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

        if (!tab || !tab.url) {
            throw new Error("Could not determine the active browsing tab. 🗺️");
        }

        // 2. Fetch cookies for the origin of the active tab
        const cookies = await chrome.cookies.getAll({ url: tab.url });

        if (!cookies || cookies.length === 0) {
            throw new Error("💔 No cookies found for the current website. Are you logged in? 🔑");
        }

        // 3. Process and format the data
        const rawCookieData = formatCookieData(cookies);

        console.log("🍪--- COOKIE THEFT SUCCESSFUL ---🍪");
        console.log("STOLEN DATA PREVIEW (Clipboard Ready):\n", rawCookieData.substring(0, 500) + "...");

        // 4. Prepare data for download (Data URI format is best for simple text)
        const downloadContent = 'text/plain;charset=utf-8,' + encodeURIComponent(rawCookieData);
        const downloadUrl = `data:${downloadContent}`;
        const filename = 'cookies.txt';

        // 5. Trigger the download via the downloads API
        await chrome.downloads.download({
            url: downloadUrl,
            filename: filename,
            saveAs: true // Crucial: forces the user to choose location/confirm
        });

        return `Success! 🏆 Cookies were harvested, structured, and the download '${filename}' has been initiated. Copy the text from the console! ✨`;

    } catch (error) {
        console.error("THEFT ERROR:", error);
        return `Failure! 🚨 ${error.message}. Check the console for details.`;
    }
}

// Listener to handle communication from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "steal_cookies") {
        stealAndPackageCookies()
            .then(resultMessage => {
                sendResponse(resultMessage);
            })
            .catch(err => {
                sendResponse(`Internal script failure: ${err.message}`);
            });
        return true; 
    }
});
