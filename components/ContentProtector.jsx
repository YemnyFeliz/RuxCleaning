import { useEffect } from 'react';

function ContentProtector({ children }) {
  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    const disableKeys = (e) => {
      if (
        (e.ctrlKey && ['u', 'c', 'x', 's'].includes(e.key.toLowerCase())) ||
        (e.metaKey && ['u', 'c', 'x', 's'].includes(e.key.toLowerCase()))
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', disableRightClick);
    document.addEventListener('keydown', disableKeys);
    document.body.style.userSelect = 'none';

    return () => {
      document.removeEventListener('contextmenu', disableRightClick);
      document.removeEventListener('keydown', disableKeys);
      document.body.style.userSelect = 'auto';
    };
  }, []);

  return children;
}

export default ContentProtector;
