import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContentWrapper = styled.div`
padding: 5px;
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: space-between;
  margin-inline: 8px;
  
  .phone {
    font-size: 20px;
    color: black;
  }
`;

const Header = styled.div`
  color: black;
  width: 100%;
  font-size: 28px;
  font-weight: 700;
  padding: 5px 0;
  
`;

const AddressCard = ({ city, address, phone }) => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header>{city.toUpperCase()}</Header>
        <p>{address}</p>
        <p className="phone">tel.{phone}</p>
      </ContentWrapper>
    </Wrapper>
  );
};

export default AddressCard;
