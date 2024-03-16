import styled from 'styled-components';

const BoxContainerWrapper = styled.div`
  border: 2px solid transparent;
  height: 400px;
  background: url("https://i.ibb.co/L696msT/remove-background-from-1-to-1000-photos-removebg-preview.png");
  background-repeat: no-repeat;
  background-position-x: 250px;
  background-position-y: 20px;
  background-color: #ddd;
`;

const BoxContainer = () => {
  return (
    <BoxContainerWrapper className="box-container">
      <div className="content-container">
        <h2>Sale 20% Off</h2>
        <h1>On Everything</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ab dolorem quaerat reprehenderit inventore
          ducimus, perspiciatis error maxime ex molestiae distinctio vel eligendi, magnam ullam, velit et? Dicta, quisquam
          cumque.
        </p>
        <div className="shop">Shop Now</div>
        <div className="radio">
          <div className="radio1"></div>
          <div className="radio2"></div>
          <div className="radio3"></div>
        </div>
      </div>
    </BoxContainerWrapper>
  );
};

export default BoxContainer;
