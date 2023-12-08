import { ExternalLink } from '@/components/ExternalLink';
import { PostHeaderContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
export function PostHeader() {
  const navigate = useNavigate();

  function backToBlog() {
    navigate(-1);
  }

  return (
    <PostHeaderContainer>
      <></>
      <header>
        <ExternalLink
          as='button'
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          onClick={backToBlog}
          text='Voltar'
          variant='iconLeft'
        />
        <ExternalLink text='Ver no Github' target='_blank' />
      </header>

      <h1>JavaScript data types and data structures</h1>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          Carlos Almeida
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          Há 1 dia
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />8 Comentários
        </li>
      </ul>
    </PostHeaderContainer>
  );
}
