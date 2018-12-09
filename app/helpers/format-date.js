import { helper } from '@ember/component/helper';
import format from 'date-fns/format'
import parse from 'date-fns/parse'

export function formatDate(params/*, hash*/) {
  return format(parse(params[0]), 'MMMM DD, YYYY');
}

export default helper(formatDate);
