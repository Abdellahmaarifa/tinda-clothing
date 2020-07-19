import styled from 'styled-components';
import CollectionMenu from '../../components/collection-menu/collection-menu.component';

export const CollectionPageContainer = styled.div`
    display: flex;
    justify-content:space-around;

`;

export const SectionMenuContainer = styled(CollectionMenu)`
      width:25%;
      height:100vh;
`;

export const ColletcionItemsContainer = styled.div`
      width:100%;
      flex-direction: column;
`;

