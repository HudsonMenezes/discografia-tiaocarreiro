import styled from "styled-components"

export const Container = styled.div`
  margin-top: 2rem;

  table{
    width: 100%;
    border-spacing: 0 0.5rem;
    padding: 0 2rem;
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