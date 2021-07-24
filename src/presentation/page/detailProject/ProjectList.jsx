import React from "react";
import styled from "./styled";

function ProjectList() {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(8);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setError(null);
        setProjects(null);
        setLoading(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setProjects(response.data);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!projects) return null;
  return (

  );
}