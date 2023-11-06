import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function useLocationListener() {
  const location = useLocation();
  const [isCatalog, setIsCatalog] = useState(0);

  useEffect(() => {
    const { id } = useParams();

    setIsCatalog(+id);
  }, [location]);

  return isCatalog;
}

export default useLocationListener;
