import React from 'react';
import styled from 'styled-components';
import AccessProtection from '../../molecules/AccessProtection';
import PortfolioHeader from './PortfolioHeader';
import PortfolioSection from './PortfolioSection';

const PortFolioPageWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.page};
  margin: 0 auto;
`;

function PortFolioPage(props) {
  return (
    <AccessProtection authed={true} redirectPath={'/login'}>
      <PortFolioPageWrapper>
        <PortfolioHeader />
        <PortfolioSection />
      </PortFolioPageWrapper>
    </AccessProtection>
  );
}

export default PortFolioPage;
