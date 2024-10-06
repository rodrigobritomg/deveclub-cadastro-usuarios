import { useRef } from "react"
import {
  Title,
  Container,
  TopBackgrond,
  Form,
  ContainerInputs,
  Input,
  InputLabel,
  Button,
} from "./styles"

import UsersImage from '../../assets/users.png'

function Home() {
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  function registerNewuser() {
    console.log(inputName.current.value)
  }

  return (
    <Container>

      <TopBackgrond>
        <img src={UsersImage} alt="imagem-usuario" ref={inputName} />
      </TopBackgrond>

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>

          <div>
            <InputLabel>
              Nome<span>*</span>
            </InputLabel>
            <Input type='text' placeholder='Nome do Usuário' ref={useRef} />
          </div>

          <div>
            <InputLabel>
              Idade<span>*</span>
            </InputLabel>
            <Input type='number' placeholder='Idade do Usuário' />
          </div>

        </ContainerInputs>

        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail<span>*</span>
          </InputLabel>
          <Input type='email' placeholder='E-mail do Usuário' ref={inputEmail} />
        </div>

        <Button type="button" onClick={registerNewuser}>Cadastrar Usuários</Button>

      </Form>
    </Container>
  )
}
export default Home