import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProfileContainer, ProfileDetails, ProfileImage } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons/faUserGroup';
import { ExternalLink } from '@/components/ExternalLink';

export function Profile() {
  return (
    <ProfileContainer>
      <>
        <ProfileImage src='https://github.com/CarlosAlmeida1.png' />

        <ProfileDetails>
          <header>
            <h1>Carlos Almeida</h1>

            <ExternalLink
              text='GITHUB'
              href='https://github.com/CarlosAlmeida1'
              target='_blank'
            />
          </header>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              Carlos Almeida
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              Instituto Federal do Paraná
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              98 seguidores
            </li>
          </ul>
        </ProfileDetails>
      </>
    </ProfileContainer>
  );
}
