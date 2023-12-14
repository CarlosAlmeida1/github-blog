import { ExternalLink } from '@/components/ExternalLink';
import { PostHeaderContainer } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons/faCalendar';
import { IPost } from '@/pages/Blog';
import { formattedDate } from '@/utils/formattedDate';

interface IPostHeaderProps {
  postData: IPost;
}

export function PostHeader({ postData }: IPostHeaderProps) {
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

      <h1>{postData.title}</h1>

      <ul>
        <li>
          <FontAwesomeIcon icon={faGithub} />
          {postData.user?.login}
        </li>
        <li>
          <FontAwesomeIcon icon={faCalendar} />
          {postData.created_at && formattedDate(postData.created_at)}
        </li>
        <li>
          <FontAwesomeIcon icon={faComment} />
          {postData.comments} Comentário(s)
        </li>
      </ul>
    </PostHeaderContainer>
  );
}
