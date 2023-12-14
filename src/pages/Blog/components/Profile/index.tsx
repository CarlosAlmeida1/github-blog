import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { ExternalLink } from '@/components/ExternalLink';
import { useCallback, useEffect, useState } from 'react';
import { api } from '@/api/axios';
import { ProfileContainer, ProfileDetails, ProfileImage } from './styles';

const username = import.meta.env.VITE_GITHUB_USERNAME;

interface ProfileData {
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  company?: string;
  login: string;
}

export function Profile() {
  const [profileData, setProfileData] = useState({} as ProfileData);

  const getProfileData = useCallback(async () => {
    try {
      const response = await api.get(`/users/${username}`);
      setProfileData(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [profileData]);

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <ProfileContainer>
      <>
        <ProfileImage src={profileData.avatar_url} />

        <ProfileDetails>
          <header>
            <h1>{profileData.name}</h1>

            <ExternalLink
              text='GITHUB'
              href='https://github.com/CarlosAlmeida1'
              target='_blank'
            />
          </header>

          <p>{profileData.bio}</p>

          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              {profileData.login}
            </li>
            <li>
              <FontAwesomeIcon icon={faBuilding} />
              {profileData.company}
            </li>
            <li>
              <FontAwesomeIcon icon={faUserGroup} />
              {profileData.followers} seguidores
            </li>
          </ul>
        </ProfileDetails>
      </>
    </ProfileContainer>
  );
}
