import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formattedDate = (createdAt: string) => {
  return formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
    locale: ptBR,
  });
};
