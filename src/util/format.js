import Intl from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export default function (value) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}
