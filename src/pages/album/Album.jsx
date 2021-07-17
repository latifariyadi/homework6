import React from "react";
import "./album.css";
import data from "../../Data";
import Image from "../../components/image/Image";
import Heading from "../../components/heading/Heading";

function Album() {
  return (
    <div>
      <Heading heading="Create Playlist" />
      <div className="album">
        {data.map((e) => (
          <Image
            key={e.id}
            img={e.album.images[0].url}
            artist={e.artists[0].name}
            title={e.album.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Album;
