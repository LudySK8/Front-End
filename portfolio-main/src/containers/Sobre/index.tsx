import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Oiii! Eu chamo Ludmyla Toledo, sou estudante do curso de desenvolvedor
      Full Stack Java da EBAC 💗💻.
    </Paragrafo>
    <GithubSecao>
      <img src="https://camo.githubusercontent.com/9d1b42267c36e347d34fbd0b4731019b84c76ef86f4926463731d5858da56eea/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d4c756479534b382673686f775f69636f6e733d74727565267468656d653d64726163756c61" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ogiansouza&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
