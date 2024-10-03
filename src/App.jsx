import { Title, Container, TopBackgrond, ContainerInputs, inputLabel, Input } from "./styles"
function Home() {

  return (
    <Container>

      <TopBackgrond>
        <img />
      </TopBackgrond>

      <form>
        <Title>Cadastrar Usuários</Title>

        <ContainerInputs>

          <div>
            <div>
              <inputLabel>
                Nome<span>*</span>
              </inputLabel>
              <Input type='text' placeholder='Nome do Usuário' />
            </div>
            
            <div>
              <inputLabel>
                Idade<span>*</span>
              </inputLabel>
              <Input type='number' placeholder='Idade do Usuário' />

            </div>

            <div>
              <inputLabel>
                E-mail<span>*</span>
              </inputLabel>
              <Input type='email' placeholder='E-mail do Usuário' />
            </div>

          </div>
          <Input type='email' placeholder='E-mail do Usuário' />


        </ContainerInputs>

        <button>Cadastrar Usuários</button>


      </form>
    </Container>
  )
}
export default Home
