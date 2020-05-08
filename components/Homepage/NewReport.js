import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const Body = styled.div`
  background-color: #bce0fd;
  color: #2699fb;
  border: 1px solid #bce0fd;
  border-radius: 10px;
  padding: 20px 20px;
  margin-bottom: 60px;
`;
const Text = styled.p`
  font-size: 16px;
  text-align: left;
`;

const Report = () => {
  return (
    <Body>
      <Heading>Make a New Report</Heading>
      <Text>Update us with your current emergencies in your area.</Text>
    </Body>
  );
};

export default Report;