import { 
  fundoClaro, 
  conteudoClaro, 
  textoFundoClaro,
  fundoEscuro,
  conteudoEscuro,
  textoFundoEscuro,
} from './variables';

export const TemaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: '',
}

export const TemaEscuro = {
  body: fundoEscuro,
  inside: conteudoEscuro,
  text: textoFundoEscuro,
  filter: 'invert(100%)',
}