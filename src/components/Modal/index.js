import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text

} from "@chakra-ui/react";

const ModalCadastro = () => {
    
    const {onOpen} = useDisclosure()

    function reload(e){
      window.location.reload();
    }

    return (
      <>
  
        <Modal isOpen={onOpen} onClose={reload}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Sucesso!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>O cadastro da escola foi finalizado, você pode verificar o dado cadastrado na aba "/listar".</Text>
            </ModalBody>
            <ModalFooter justifyContent={'center'}>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalCadastro;