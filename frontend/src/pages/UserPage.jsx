import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import MemeCard from "../features/memes/MemeCard";

const BASE_URL = import.meta.env.VITE_BASE_URL;

function UserPage() {
  const { username } = useParams();
  const [memes, setMemes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchUserMemes = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/api/posts?author=${username}`);
      if (res.status === 404) {
        navigate("/", { replace: true });
        return;
      }
      const data = await res.json();
      setMemes(data || []);
    } catch (err) {
      console.log(err.message);
      setMemes([]);
    } finally {
      setLoading(false);
    }
  }, [username, navigate]);

  useEffect(() => {
    fetchUserMemes();
  }, [fetchUserMemes]);

  return (
    <div className="flex flex-col gap-6 px-6 py-8 sm:gap-12">
      <h2 className="mb-4 text-center text-2xl font-bold">
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
            memeUrl={meme.image}
            textMeme={meme.description}
            onInteraction={fetchUserMemes}
          />
        ))
      )}
    </div>
  );
}

export default UserPage;
