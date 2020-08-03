const isElementInViewport = (id) => {
  // Grab the bounds of the element (i.e. position relative to edges of viewport)
  const bounds = document.getElementById(id).getBoundingClientRect();

  // Grab the viewport dimensions
  const viewportHeight = document.documentElement.clientHeight;
  const viewportWidth = document.documentElement.clientWidth;

  // check that all 4 sides of the element are inside the viewport
  const insideBounds = bounds.top >= 0 && 
                       bounds.left >= 0 && 
                       bounds.bottom <= viewportHeight && 
                       bounds.right <= viewportWidth;

  // log to console based on the answer
  return insideBounds ? console.log('viewable') : console.log("non-viewable");
}

// Invoke function every 2 secs passing the id as an argument
setInterval(isElementInViewport, 2000, "myimage")