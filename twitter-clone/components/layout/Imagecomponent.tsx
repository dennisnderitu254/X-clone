import Image from 'next/image';
import Screenshot20231006113904 from 'public/images/Screenshot 2023-10-06 113904.png';

const MyMap = () => {
  return (
    <div>
          <Image src={Screenshot20231006113904} alt="My image" className="rounded-lg object-contain my-2"/>

          
    </div>
  );
};

export default MyMap;