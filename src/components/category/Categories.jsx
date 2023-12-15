import {
  Container,
  Tag
} from "./Categories.style";
import {
  useNavigate
} from "react-router-dom";
import {
  useState,
  useEffect
} from "react";
function Categories() {
  const [tagUrl,
    setTagUrl] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    const tags = document.querySelectorAll(".tag");

    tags.forEach((tag) => {
      tag.addEventListener("click", () => {
        setTagUrl(tag.innerText.toLowerCase());

      });
    });
  });




  return (
    <Container>
              <Tag href={`/category/${tagUrl}`} className="tag">Trending</Tag>

      <Tag href={`/category/${tagUrl}`} className="tag">Comedy</Tag>

      <Tag href={`/category/${tagUrl}`} className="tag">Music</Tag>
      <Tag href={`/category/${tagUrl}`} className="tag">Movies</Tag>
      <Tag href={`/category/${tagUrl}`} className="tag">Action</Tag>

      <Tag href={`/category/${tagUrl}`} className="tag">Trailer</Tag>
      <Tag href={`/category/${tagUrl}`} className="tag">Animation</Tag>
      <Tag href={`/category/${tagUrl}`} className="tag">Programming</Tag>
      <Tag href={`/category/${tagUrl}`} className="tag">Gospel</Tag>
      <Tag href={`/category/${tagUrl}`} className="tag">Motivational</Tag>
      <Tag href={`/category/${tagUrl}`} className="tag">Gaming</Tag>

      <Tag href={`/category/${tagUrl}`} className="tag">Sports</Tag>

      <Tag href={`/category/${tagUrl}`} className="tag">Vlog</Tag>
    </Container>
  );
}

export default Categories;