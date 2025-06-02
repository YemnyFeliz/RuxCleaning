import { useEffect } from 'react';

function ContentProtector({ children }) {
  useEffect(() => {
    const disableKeys = (e) => {
      const key = e.key.toLowerCase();

      // Block common shortcuts (copy, cut, save, view source)
      if (
        (e.ctrlKey || e.metaKey) &&
        ['c', 'x', 's', 'u'].includes(key)
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', disableKeys);

    // Optional: prevent text selection
    document.body.style.userSelect = 'none';

    return () => {
      document.removeEventListener('keydown', disableKeys);
      document.body.style.userSelect = 'auto';
    };
  }, []);

  return children;
}

export default ContentProtector;

