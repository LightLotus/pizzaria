import { useState, useEffect } from "react";
const SamplePage = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return <div className="mt-[10%] h-[100vh]">I've rendered {count} times!</div>;
};

export default SamplePage;
