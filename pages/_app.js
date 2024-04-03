// pages/_app.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      // Check if a new build has occurred based on the build ID
      const prevBuildID = localStorage.getItem('PREV_BUILD_ID');
      const currentBuildID = process.env.NEXT_PUBLIC_BUILD_ID;

      if (prevBuildID !== currentBuildID) {
        console.log("New build")
        // Reset router cache to invalidate prefetched routes
        // window.location.reload();
        router.refresh();
        localStorage.setItem('PREV_BUILD_ID', currentBuildID);
      } else {
        console.log("SAme build")
      }
    };

    // Listen for route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Remove the event listener when component unmounts
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;



// pages/_app.js

// import { useEffect } from 'react';
// import { useRouter } from 'next/router';

// function MyApp({ Component, pageProps }) {
//   const router = useRouter();

//   useEffect(() => {
//     const handleRouteChange = () => {
//       // Check if the build ID has changed
//       const prevBuildId = localStorage.getItem('prevBuildId');
//       const currentBuildId = process.env.NEXT_PUBLIC_BUILD_ID;

//       if (prevBuildId && prevBuildId !== currentBuildId) {
//         // Clear router cache to invalidate prefetched routes
//         router.prefetch('/test2'); // Example of a route to prefetch
//         // You can prefetch other routes as needed

//         // Update the stored build ID
//         localStorage.setItem('prevBuildId', currentBuildId);
//       }
//     };

//     // Listen for route changes
//     router.events.on('routeChangeComplete', handleRouteChange);

//     // Remove the event listener when component unmounts
//     return () => {
//       router.events.off('routeChangeComplete', handleRouteChange);
//     };
//   }, [router.events]);

//   return <Component {...pageProps} />;
// }

// export default MyApp;
