import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // const [currentBuildID, setCurrentBuildID] = useState(null);

  // useEffect(() => {
  //   const fetchBuildID = async () => {
  //     try {
  //       // Fetch the current build ID from your server
  //       const response = await fetch('/api/build-id');
  //       const data = await response.json();
  //       console.log('Current build ====', data.buildID)
  //       setCurrentBuildID(data.buildID);
  //     } catch (error) {
  //       console.error('Error fetching build ID:', error);
  //     }
  //   };

  //   fetchBuildID();
  // }, []);

  useEffect(() => {
    const handleRouteChange = async (url) => {
      console.log('Upcoming route:', url);
      let currentBuildID = null;
      try {
        // Fetch the current build ID from your server
        const response = await fetch('/api/build-id');
        currentBuildID = await response.json();
        console.log('Current build ====', currentBuildID.buildID);
        // setCurrentBuildID(data.buildID);
      } catch (error) {
        console.error('Error fetching build ID:', error);
      }

      const prevBuildID = localStorage.getItem('PREV_BUILD_ID');
      if (prevBuildID !== currentBuildID.buildID) {
        console.log('New build detected');
        // Reload the page to get the latest changes
        router.reload();
        router.prefetch(url);
        localStorage.setItem('PREV_BUILD_ID', currentBuildID.buildID);
      } else {
        console.log('Same build');
      }
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}

export default MyApp;
