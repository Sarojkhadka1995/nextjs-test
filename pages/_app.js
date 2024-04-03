import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [currentBuildID, setCurrentBuildID] = useState(null);

  useEffect(() => {
    const fetchBuildID = async () => {
      try {
        // Fetch the current build ID from your server
        const response = await fetch('/api/build-id');
        const data = await response.json();
        setCurrentBuildID(data.buildID);
      } catch (error) {
        console.error('Error fetching build ID:', error);
      }
    };

    fetchBuildID();
  }, []);

  useEffect(() => {
    const handleRouteChange = () => {
      const prevBuildID = localStorage.getItem('PREV_BUILD_ID');
      if (prevBuildID !== currentBuildID) {
        console.log("New build detected");
        // Reload the page to get the latest changes
        router.reload();
        localStorage.setItem('PREV_BUILD_ID', currentBuildID);
      } else {
        console.log("Same build");
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [currentBuildID, router.events]);

  if (!currentBuildID) {
    // Display a loading indicator while fetching the build ID
    return <div>Loading...</div>;
  }

  return <Component {...pageProps} />;
}

export default MyApp;
