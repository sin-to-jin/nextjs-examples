import { createObjectURL } from '../../../lib/image';
import { Stage, Layer, Image } from 'react-konva';
import useImage from 'use-image';
import { isWindow } from '../../../lib/globalUtil';

const Index = () => {
  const [image] = useImage(url, 'Anonymous');
  return (
    {isWindow && (
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Image image={image} alt="preview-image" />
        </Layer>
      </Stage>
    )}
  );
};

export default Index;
