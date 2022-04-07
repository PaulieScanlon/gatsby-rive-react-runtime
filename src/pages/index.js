import React, { useState, useEffect, lazy, Suspense } from 'react';

const FunTime = lazy(() => import('../components/fun-time'));

const Page = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <main className="container">
      <div className="hero">
        {!isMounted ? null : (
          <Suspense fallback={null}>
            <FunTime />
          </Suspense>
        )}
        <div>
          <h1>Rive React Runtime</h1>
          <h2>lazy/Suspense</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac quam ut dui facilisis malesuada et non
            justo. Mauris porttitor scelerisque augue, ut vehicula eros molestie in.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
