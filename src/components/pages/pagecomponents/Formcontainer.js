import React, {useState} from 'react';
import styled from 'styled-components'
import numeral from 'numeral'




const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 3rem 0;
max-width: 900px;
margin: auto;


h1 {
letter-spacing: 10px;
font-size: 35px;
font-weight: 600;
letter-spacing: 10px;
color: #fff;
margin-bottom: 10px;
text-transform: uppercase;

}
h3 {
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;
  margin-top: 3rem;
  background: #fff;
  padding: 3rem;
  color: grey;
  box-shadow: 0 0 1px 0 rgba(8,11,14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1);
  border-radius: 1rem;

}
form{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
}

`;
    const InputSection = styled.div`
    width: 45%;
    min-width: 350px;
    max-width: 450px;
    display: flex;
    flex-direction: column;

    label{
      text-transform: uppercase;
      font-weight: 600;
      color: white;
      margin-bottom: 0.5rem;
    }

    input{
      background: rgba(255, 255, 255, 0.3);
      height: 35px;
      border: none;
      border-radius: 10px;
      color: grey;
      text-align: center;
      font-weight: 500;
      box-shadow: 0 0 1px 0 rgba(8,11,14, 0.06), 0 6px 6px -1px rgba(8, 11, 14, 0.1);
      border-radius: 1rem;

      &:hover, &:focus{
        box-shadow: 0 0 1px 0 rgba(8,11,14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1);
        border-radius: 1rem;
      }

    }

    `;

    const SubmitButton = styled.button`
    background-color: #d8a051;
    color: #fff;
    border: none;
    width: 150px;
    height: 36px;
    font-family:'PT Sans', sans-serif;
    font-size: 14px;
    letter-spacing: 0.03em;
    line-height: 36px;
    border-radius: 2px;
    box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
    0 6px 6px -1px rgba(8, 11, 14, 0.1);
    cursor: pointer;
    margin-top: 1rem;
    transition: all 0.3s ease-in-out;


    &:hover {
      box-shadow: 0 0 1px 0 rgba(8, 11, 14, 0.06),
      0 16px 16px -1px rgba(8, 11, 14, 0.1);
    }
    `;
    const Error = styled.div`
    color: red;
    font-size: 13px;
    margin-bottom: 1rem;


    `;


    const Formcontainer = () => {
      const [propertyPrice, setPropertyPrice] = useState("");
      const [deposit, setDeposit] = useState("");
      const [repaymentPeriod, setRepaymentPeriod] = useState("");
      const [annualInterest, setAnnualInterest] = useState("");
      const [monthlyPayments, setMonthlyPayments] = useState(0.0);

      const submitCalculation = async (e) => {
        e.preventDefault();

        //Vakidate fields

        const validatedPrice = await validatefield(propertyPrice, setPropertyPrice)
        const validatedDeposit = await validatefield(deposit, setDeposit)
        const validatedRepaymentPeriod = await validatefield(repaymentPeriod, setRepaymentPeriod)
        const validatedApr = await validatefield(annualInterest, setAnnualInterest)



        //Calculatevalues
        if (validatedPrice &&
            validatedDeposit &&
            validatedRepaymentPeriod &&
            validatedApr) {
              console.log("Form is fully validaed");
              calculateValues()
            }
  }
const calculateValues = () => {

  let principal = propertyPrice - deposit;
  let monthlyInterest = annualInterest / 100 / 12;
  let numberOfPayments = repaymentPeriod * 12;
  let monthlyPrice =(principal * [monthlyInterest *(1 + monthlyInterest) ** numberOfPayments])/
  [(1+ monthlyInterest) ** numberOfPayments - 1];
  setMonthlyPayments(monthlyPrice)
  console.log({principal});


}


        const validatefield = (field, setValue) => {
          let int = parseFloat(field);

          if (field === "" || field === 0){
            setValue ({...field.values, error: "Please enter a value"});
            return false;
          } else if (isNaN(int)) {
            setValue({...field.values, error: "Please enter a number"});
            return false;
          } else {
            setValue(int);
            return true;


          }
        }



      return(
        <>
        <Container>
          <h1>Mortgage Calculator</h1>
            <form>
              <InputSection>
                <label>Property price</label>
                <Error>{propertyPrice.error}</Error>
                <input onChange={(e) => setPropertyPrice(e.target.value)} type="text" id="propertyPrice"/>
                </InputSection>
                <InputSection>
                  <label>Deposit</label>
                  <Error>{deposit.error}</Error>
                  <input onChange={(e) => setDeposit(e.target.value)} type="text" id="deposit"/>
                  </InputSection>
                <InputSection>
                  <label>Repayment Period (Years)</label>
                  <Error>{repaymentPeriod.error}</Error>
                  <input onChange={(e) => setRepaymentPeriod(e.target.value)} type="text" id="repayment"/>
                </InputSection>
                <InputSection>
                  <label>Annual Interest(%)</label>
                  <Error>{annualInterest.error}</Error>
                  <input onChange={(e) => setAnnualInterest(e.target.value)} type="text" id="interest"/>
                </InputSection>
                <SubmitButton id="calculate" onClick={(e) => submitCalculation(e)}>Calculate</SubmitButton>
            </form>
              <h3 id="payments">Monthly Repayments: {numeral(monthlyPayments).format("£0,0")}</h3>
        </Container>

</>


  )

};
export default Formcontainer
