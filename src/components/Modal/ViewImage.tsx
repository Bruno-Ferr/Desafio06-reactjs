/* eslint-disable */

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Image src={imgUrl} maxW={900} maxH={600} />
        </ModalBody>
        <ModalFooter>
          <Link>
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
}
