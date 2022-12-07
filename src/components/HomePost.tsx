import React from 'react';
import Tag from '../components/Tag';
import './HomePost.css';

interface Props {
  src?: string;
  zIndex?: number;
  title: string;
  tagList?: string[];
}
function HomePost({ src, zIndex, title }: Props) {
  const [clicked, setClicked] = React.useState(false);
  return (
    <div
      className={clicked ? 'animateYes post-container' : 'post-container'}
      style={{ zIndex }}
      onClick={(e) => {
        setClicked(!clicked);
      }}
    >
      <img className="main-image" alt="main" src={src} />
      <section>
        <div className="title-container">{title}</div>
        <div className="tag-container">
          <Tag text="태그태그" />
          <Tag text="태그태그" />
          <Tag text="태그태그" />
          <Tag text="태그태그" />
          <Tag text="태그태그" />
        </div>
      </section>
    </div>
  );
}

export default HomePost;
