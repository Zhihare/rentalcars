import styled from 'styled-components'

export const WrapperCatalog = styled.div`
display:grid;
justify-content: center;
grid-template-columns: 274px;
gap: 50px;
margin-top: 50px;


@media(min-width: 600px){
justify-content: center;
grid-template-columns: repeat(2, 274px);
gap: 50px 29px;
}

@media(min-width: 900px){
justify-content: center;
 grid-template-columns: repeat(3, 274px);
gap: 50px 29px;
}

@media(min-width: 1200px){
justify-content: center;
 grid-template-columns: repeat(4, 274px);
gap: 50px 29px;
}
`

export const WrapperItem = styled.div`
max-width: 274px;

`


export const ImgCatalog = styled.img`
width: 100%;
height: 268px;
object-fit: cover;

border-radius: 14px;
background: linear-gradient(180.00deg, rgba(18, 20, 23, 0.5) 2.5%,rgba(18, 20, 23, 0) 41.071%),rgb(243, 243, 242);

margin-bottom: 14px;

`

export const TitleContainer = styled.div`
display: flex;
margin-bottom: 8px;
justify-content: space-between;

h2{
font-size: 16px;
font-weight: 500;
line-height: 24px;
color: #121417;
}

span{
	color: var(--button-color);
}

`

export const OptionsItem = styled.p`
	height: 20px;
	overflow: hidden;
   color: rgba(18, 20, 23, 0.5);
   font-size: 12px;
   font-weight: 400;
   line-height: 18px;


   span{
	border-left: 1px solid rgb(110 112 116 / 50%);
	padding: 0 6px;
   }

   span:first-child{
	border: none;
	padding-left: 0;
}
`

export const ButtonItem = styled.button`

margin-top: 24px;
width: 100%;
height: 44px;
padding: 12px;
border-radius: 12px;
font-family: Manrope;
font-size: 14px;
font-weight: 600;
line-height: 20px;

background: var(--button-color);
color: #FFFFFF;


&:hover{
	background: var(--button-color-hover);
}

`