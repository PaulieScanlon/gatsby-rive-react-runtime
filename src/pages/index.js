import React, { useState, useEffect, lazy, Suspense } from 'react';
import FunTimeFallback from '../components/fun-time-fallback';

const FunTime = lazy(() => import('../components/fun-time'));

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="container">
      <div className="hero">
        {!isMounted || navigator?.connection?.saveData || !matchMedia('(min-width: 768px)').matches ? (
          <FunTimeFallback />
        ) : (
          <Suspense fallback={<FunTimeFallback />}>
            <FunTime className="fun-time-animation" />
          </Suspense>
        )}
        <div>
          <h1>Rive React Runtime</h1>
          <h2>lazy/Suspense</h2>
          <p>With gatsby-plugin-image StaticImage fallback.</p>
          <pre>
            {JSON.stringify(
              "!isMounted || navigator?.connection?.saveData || !matchMedia('(min-width: 768px)').matches",
              null,
              2
            )}
          </pre>
        </div>
      </div>
    </main>
  );
};

export default Page;
