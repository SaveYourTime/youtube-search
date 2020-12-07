import styled from 'styled-components';

const Wrapper = styled.div`
  padding-top: 1rem;
`;

export default function ListEmpty() {
  return (
    <Wrapper>
      <div className="ui placeholder segment">
        <div className="ui icon header">
          <i className="search icon" />
          Typing some keywords to search for the videos.
        </div>
      </div>
    </Wrapper>
  );
}
