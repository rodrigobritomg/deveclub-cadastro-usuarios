import { Title, Container, TopBackgrond, Form, ContainerInputs, Input, InputLabel, Button, } from "./pages/Home/styles"

import UsersImage from '../../assets/users.png'

function Home() {

  return (
    <Container>

      <TopBackgrond>
        <img src={UsersImage} alt="imagem-usuario" />
      </TopBackgrond>

      <Form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>

            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type='text' placeholder='Nome do Usuário' />
            </div>

            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type='number' placeholder='Idade do Usuário' />
            </div>
          
            </ContainerInputs>

            <div style={{width:'100%'}}>
              <InputLabel>
                E-mail<span>*</span>
              </InputLabel>
              <Input type='email' placeholder='E-mail do Usuário' />
            </div>
          
       <Button>Cadastrar Usuários</Button>

      </Form>
    </Container>
  )
}
export default Home