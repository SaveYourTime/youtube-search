import ListItemWrapper from './ListItemWrapper';

interface ListItemProps {
  link: string;
  title: string;
  description: string;
  photo: string;
}

export default function ListItem({
  link,
  title,
  description,
  photo = 'https://semantic-ui.com/images/avatar2/large/elyse.png',
}: ListItemProps) {
  return (
    <ListItemWrapper className="column" href={link} target="_blank" rel="noreferrer">
      <div className="image-wrapper">
        <img className="ui bordered fluid image" src={photo} alt="video" />
      </div>
      <h4 className="ui attached header">
        <span>{title}</span>
        <p className="sub header">{description}</p>
      </h4>
    </ListItemWrapper>
  );
}
