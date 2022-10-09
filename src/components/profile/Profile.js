import PropTypes from 'prop-types';
import {
  ProfleBox,
  Description,
  DescriptionTitle,
  DescriptionText,
  StatsList,
  StatsItem,
} from './profile.styled';

export const Profle = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfleBox>
      <Description>
        <img src={avatar} alt="User avatar" className="avatar" width="250px" />
        <DescriptionTitle>{username}</DescriptionTitle>
        <DescriptionText>@{tag}</DescriptionText>
        <DescriptionText>{location}</DescriptionText>
      </Description>

      <StatsList>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </StatsItem>
      </StatsList>
    </ProfleBox>
  );
};

Profle.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
