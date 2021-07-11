import useSize from "@react-hook/size";
import Image from "next/image";
import T from "prop-types";
import { useRef } from "react";

export default function ResponsiveImage({
  alt,
  className,
  height,
  src,
  width,
}) {
  const target = useRef(null);
  const [containerWidth] = useSize(target, { initialWidth: 50 });
  const size = `${containerWidth}px`;

  return (
    <div ref={target} className={className}>
      <Image
        alt={alt}
        height={height}
        layout="responsive"
        sizes={size}
        src={src}
        width={width}
      />
    </div>
  );
}

ResponsiveImage.defaultProps = {
  className: "",
};

ResponsiveImage.propTypes = {
  alt: T.string.isRequired,
  className: T.string,
  height: T.number.isRequired,
  src: T.string.isRequired,
  width: T.number.isRequired,
};
