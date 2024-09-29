function removeSecondaryColumn() {
    const secondaryColumn = document.getElementById('secondary');
    if (secondaryColumn) {
      secondaryColumn.remove();
    }
  }
  
  // Run the function when the page loads
  removeSecondaryColumn();
  
  // Use a MutationObserver to handle dynamic content loading
  const observer = new MutationObserver(removeSecondaryColumn);
  observer.observe(document.body, { childList: true, subtree: true });