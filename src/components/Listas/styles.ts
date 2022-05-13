import styled from "styled-components"

export const Container = styled.div`
    background: rgba(255, 255, 255, 0.4);
    max-width: 62.5rem;
    margin: 0 auto;
    padding: 1rem 2rem;
    height: 60vh;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;
}

  th{
    font-weight: 600;
    text-align: left;
    line-height: 1.5rem;
}
  

  td{
    padding: .275rem 0;
    
    &:last-child{
      text-align: right;
    }
  }
`