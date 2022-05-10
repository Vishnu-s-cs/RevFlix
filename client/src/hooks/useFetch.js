import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const[data0,setData0]=useState({})
  const [loading0, setLoading0] = useState(false);
  const [error0, setError0] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setLoading0(true);
      try {
        const res = await axios.get(url, {
          headers: {
            token:
            "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
          },
        });
        setData(res.data);
        setData0(res.data);
      } catch (err) {
        setError(err);
        setError0(err);
      }
      setLoading(false);
      setLoading0(false);
    };
    fetchData();
  }, [url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const res = await axios.get(url, {
        headers: {
          token:
          "Bearer "+JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      setData(res.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return { data,data0, loading,loading0, error,error0, reFetch };
};

export default useFetch;