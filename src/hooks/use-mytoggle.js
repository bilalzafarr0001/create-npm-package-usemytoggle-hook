import react, { useState } from "react";

const useMyToggle = (active = false) => {
  const [isActive, setIsActive] = useState(active);

  return [isActive, setIsActive];
};

export default useMyToggle;
