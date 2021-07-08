import '../styles/auth.scss'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import { Button } from '../components/Button'


export function Home () {
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
          <button className="create-room">
            <img src={googleIconImg} alt="Logo do Google"/>
            Create your room with Google
          </button>
          <div className="separator">Or enter a room</div>
          <form>
            <input 
              type="text"
              placeholder="Enter room code"
            />
            <Button type="submit">
              Enter the room
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}