import styled from 'styled-components';

const ListItemWrapper = styled.a`
  display: flex !important;
  flex-direction: column;

  & .image-wrapper {
    margin: 0 -1px;

    img {
      object-fit: cover;
    }
  }

  & h4.ui.attached.header {
    flex: 1;
    word-break: break-all;

    span {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    p.sub.header {
      margin-top: 8px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }
`;

export default ListItemWrapper;
