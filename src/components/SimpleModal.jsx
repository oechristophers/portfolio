import { useEffect } from 'react';
import { Modal, ModalBody, ModalContent, ModalTrigger } from './ui/animated-modal';

export default function SimpleModal() {
  useEffect(() => {
    // Disable scrolling on modal mount
    document.body.style.overflow = 'hidden';

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <Modal >
      <ModalTrigger className="dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
        <div className="mb-4">
          <button className="button"> SEND MESSAGE </button>
        </div>
      </ModalTrigger>
      <ModalBody className="fixed border-2 border-[#ffffff6b] rounded-xl w-[80%] md:w-[100vw] place-items-center bg-black md:bg-[#00000088] h-screen overflow-y-hidden mt-[60rem]">
        <ModalContent >
          <div className="flex flex-col my-auto items-center justify-center">
            <h1 className="text-Green font-bold text-2xl">In Progress</h1>
            <a
              className="underline text-Snow"
              target="_blank"
              href="https://github.com/oechristophers/"
              rel="noopener noreferrer"
            >
              Find me on Github!
            </a>
          </div>
        </ModalContent>
       
      </ModalBody>
    </Modal>
  );
}
