import React, { useState } from "react";
import { BlurhashCanvas, Blurhash } from "react-blurhash";

function BlurhashImage({ src, hash, width, height, alt }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ position: "relative", width:'100%', height:'100%'}}>
      <BlurhashCanvas hash={hash} punch={1}>
        {isLoading && (
          <img
            src={src}
            alt={alt}
            width='100%'
            height='100%'	
            style={{ display: "none" }}
            onLoad={handleImageLoad}
          />
        )}
      </BlurhashCanvas>
      <img
        src={src}
        alt={alt}
        width='100%'
        height='100%'
        style={{ position: "absolute", top: 0, left: 0, display: isLoading ? "none" : "block", objectFit: 'cover',borderRadius: '10px 0 0 10px'}}
        onLoad={handleImageLoad}
      />
      {isLoading && <Blurhash hash={hash} width={width} height={height} />}
    </div>
  );
}

export default BlurhashImage;
