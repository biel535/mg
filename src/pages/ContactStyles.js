import styled from 'styled-components';

const StyledContactForm = styled.div`
   width: 380px;
  margin: 0 auto; 

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start; 
    justify-self: center
    width: 100%;
    font-size: 16px;
    margin-bottom: 2rem;


    input {
      width: 100%;
      height: 3rem;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }


    label {
      margin-top:  0.5rem;
      margin-bottom: 1.5rem;
    }
    textarea {
      width: 100%;
      height: 6rem;
    
    }
    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #79afd6;
      color: white;
      border: none;
    }
  }
`;

export default StyledContactForm;
