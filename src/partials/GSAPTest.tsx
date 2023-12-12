import gsap from 'gsap';
import { useEffect, useRef } from 'react';

function GSAPTest() {
  const container = useRef(null);
  const circle = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // all your animations go in here...
      gsap.to('.box', { rotation: '+=360', opacity: 1 });
    }, container); // <- scopes all selector text to the container element

    gsap.to(circle.current!, { rotation: '+=360', opacity: 1 });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} className="App">
      <div className="box opacity-0">selector</div>
      <div className="circle opacity-0" ref={circle}>
        Ref
      </div>
    </div>
  );
}

export default GSAPTest;
