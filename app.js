// Production-ready entry point - this file is copied directly to the dist folder
// No JSX or imports allowed here - this is vanilla JS
document.addEventListener('DOMContentLoaded', function() {
  // Create a placeholder while the main app loads
  const root = document.getElementById('root');
  if (root) {
    root.innerHTML = '<div style="text-align: center; padding: 2rem;"><h1>PoKeDex</h1><p>Loading...</p></div>';
  }
}); 