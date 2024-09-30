function removeSecondaryColumn() {
  const secondaryColumn = document.getElementById('secondary');
  if (secondaryColumn) {
    secondaryColumn.remove();
    console.log('Secondary column removed');
  } else {
    console.log('Secondary column not found');
  }
}

function waitForElement(selector, callback, checkFrequencyInMs, timeoutInMs) {
  const startTimeInMs = Date.now();
  (function loopSearch() {
    if (document.querySelector(selector) != null) {
      callback();
      return;
    }
    else {
      setTimeout(function () {
        if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
          return;
        loopSearch();
      }, checkFrequencyInMs);
    }
  })();
}

// Wait for the 'columns' div to appear before attempting to remove the secondary column
waitForElement('#columns', removeSecondaryColumn, 100, 10000);

// Use a MutationObserver to handle potential re-renders or dynamic content changes
const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    if (mutation.type === 'childList') {
      removeSecondaryColumn();
    }
  }
});

observer.observe(document.body, { childList: true, subtree: true });

// Also attempt removal on window load event
window.addEventListener('load', removeSecondaryColumn);