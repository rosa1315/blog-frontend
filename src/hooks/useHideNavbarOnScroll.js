import { useEffect } from 'react';

const useHideNavbarOnScroll = () => {
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const navbar = document.getElementById('navbar');
      if (!navbar) return; // 👈 Evita error si navbar no existe

      if (window.scrollY > lastScrollY) {
        // hacia abajo
        navbar.style.top = "-80px";
      } else {
        // hacia arriba
        navbar.style.top = "0";
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
};

export default useHideNavbarOnScroll;

