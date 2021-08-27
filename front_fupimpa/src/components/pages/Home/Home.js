import { Atividades } from '../../common/atividades/Atividades';
import '../../common/colors/colors.css';
import { MenuLeft } from '../../common/menuleft/MenuLeft';
import { NavBar } from '../../common/navbar/NavBar';
import './Home.css';
import filtro from './filtro.svg';


export function Home() {
    return (
        <div className="background-home branco back-preto">

            <NavBar></NavBar>
            <div className="container-home">
                <MenuLeft></MenuLeft>
                <Atividades></Atividades>
            </div>
            <div className='container-filtro'>
                <div class="botao-filtrar">
                    <div class="container-dropdown back-preto">
                        <a className="link-filtro branco" href="">Concluidas</a>
                        <a className="link-filtro branco" href="">Corrigidas</a>
                        <a className="link-filtro branco" href="">Iniciadas</a>
                    </div>
                    <img src={filtro} className="filtro-dropdown" alt="Botao filtrar"  ></img>


                </div>
            </div>
        </div>
    );
}