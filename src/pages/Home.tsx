import '../styles/auth.scss'

import { useHistory } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'


export function Home () {

  const history = useHistory()

  function navigateToNewRoom () {
    history.push('/rooms/new')
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
        <strong>Create live Q&amp;A rooms</strong>
        <p>Ask your audience's questions in real-time</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask"/>
          <button onClick={navigateToNewRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do Google"/>
            Crie sua sala com Google
          </button>
          <div className="separator">Ou entre em um sala</div>
          <form>
            <input 
              type="text"
              placeholder="Digite código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}