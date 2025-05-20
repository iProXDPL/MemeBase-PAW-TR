import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import MemeCard from "../features/memes/MemeCard";


function UserPage() {
  const { username } = useParams();
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUserMemes() {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:5001/api/posts?author=${username}`
        );
        if (res.status === 404) {
          navigate("/", { replace: true });
          return;
        }
        const data = await res.json();
        setMemes(data || []);
      } catch (err) {
        setMemes([]);
      } finally {
        setLoading(false);
      }
    }
    fetchUserMemes();
  }, [username, navigate]);

  return (
    <div className="flex flex-col gap-6 px-6 py-8 sm:gap-12">
      <h2 className="mb-4 text-2xl font-bold text-center">
        Memy użytkownika: {username}
      </h2>
      {loading ? (
        <p className="text-center">Ładowanie...</p>
      ) : memes.length === 0 ? (
        <p className="text-center">Brak memów użytkownika.</p>
      ) : (
        memes.map((meme) => (
          <MemeCard
            key={meme._id}
            meme={meme}
            memeUrl={`http://localhost:5001/${meme.image}`}
            textMeme={meme.description}
          />
        ))
      )}
    </div>
  );
}

export default UserPage;
