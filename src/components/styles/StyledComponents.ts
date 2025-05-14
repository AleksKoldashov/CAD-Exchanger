import { Form } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type JustifyContentOptions = 'flex-start' | 'center' | 'space-around' | 'space-between' | 'space-evenly';
type  FlexDirectionOptions = 'column' | 'row'
interface ContainerProps {
  justifyContent?: JustifyContentOptions;
  flexDirection?:FlexDirectionOptions;
  Height?: string;
}

export const Title = styled.h1`
  font-size: 48px;
`;
export const LogoText = styled.h6`
  font-size: 12px;
  color: initial;
`;
export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  align-items: center;
  gap: 16px; 
  background-color: #ddd;
  padding: 20px;
  height: ${(props) => props.Height || 'initial'};;
`;

export const CustomNavLink = styled(Link)`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: #333;
  color: #fff;
  border-radius: 16px;
  font-size: 16px;
  width: 250px;
  cursor: pointer;
  text-decoration: none;
  height: 35px;
  &:hover {
    background-color: #555;
    color: #fff;
    transition: background-color 0.3s ease;
  }
`;

export const CustomButton = styled.button`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: #333;
  color: #fff;
  border-radius: 16px;
  font-size: 16px;
  width: 250px;
  cursor: pointer;
  height: 35px;
  outline: none;
  &:hover {
    background-color: #555;
    color: #fff;
    transition: background-color 0.3s ease;
  }
`;

export const CustomForm = styled(Form)`
  background-color: white;
  border: 1px solid #555;
  width: 300px;
  height: 600px;
  padding: 15px;
  border-radius: 4px;
`;