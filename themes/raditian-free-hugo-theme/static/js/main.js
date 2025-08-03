document.querySelectorAll('a').forEach(link => {
  const href = link.getAttribute('href');
  if (
    href &&
    !href.includes('https://steliana-vassileva.netlify.app/') &&
    !href.includes('localhost:1313')
  ) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});