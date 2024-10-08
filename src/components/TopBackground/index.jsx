import UsersImage from '../../assets/users.png'
import { Backgrond } from './styles'

function TopBackgrond() {

    return (
        <Backgrond>
            <img src={UsersImage} alt="imagem-usuario" />
        </Backgrond>
    )
}

export default TopBackgrond