// import gsap from "gsap";
// import React, { useRef, useState } from "react";

// import { useGSAP } from "@gsap/react";

// const MouseCursor = () => {
//   const xTo = useRef();
//   const yTo = useRef();
//   const app = useRef();
//   const { context, contextSafe } = useGSAP(
//     () => {
//       (xTo.current = gsap.quickTo(".flair", "x", {
//         duration: 0.8,
//         ease: "power3",
//       })),
//         (yTo.current = gsap.quickTo(".flair", "y", {
//           duration: 0.8,
//           ease: "power3",
//         }));
//     },
//     { scope: app },
//   );

//   const moveShape = contextSafe((e) => {
//     xTo.current(e.clientX);
//     yTo.current(e.clientY);
//   });

//   return (
//     <div className="app" ref={app} onMouseMove={(e) => moveShape(e)}>
//       <div className="cursor fixed left-0 top-0 z-[999999] h-[3vw] w-[3vw] rounded-full bg-red-400 "></div>
//     </div>
//   );
// };

// export default MouseCursor;
