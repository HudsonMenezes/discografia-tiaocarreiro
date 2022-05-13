import styled from "styled-components";

export const Container = styled.div`
   /* color: rgb(98, 98, 98); */
   background: rgba(255, 255, 255, 0.4);
    max-width: 62.5rem;
    margin: 0 auto;

p{
    margin: 0 0 0 3rem;
    padding-top: 30px;
    color: #9F9F9F;
}
form{
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 10px;
    }

input {
    border: none;
    outline: none;
    border-radius: 30px;
    padding: 10px 40px;
    width: 70%;
    height: 3rem;
    font-size: 1rem;
    color: #9F9F9F;
}

button {
  border: none;
  height: 3rem;
  width: 20%;
  border-radius: 30px;
  background-color: #0A95FF;
  color: #fff;
  cursor: pointer;
  margin-left: 4px;
}

button:hover {
  background-color: #4ab1ff;
}
` 
