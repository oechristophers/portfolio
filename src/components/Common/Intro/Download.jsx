import Link from 'next/link';
const Download = ({ icon }) => {
  return (
    <>
      <Link href='/EkeneCv.pdf' target='_blank' className='flex flex-row z-[1000] text-LightGray items-center gap-x-4 pb-14 pt-4'>
        <span className='text-Snow'>Download Resume</span>
        <span>{icon}</span>
      </Link>
    </>
  );
};

export default Download;