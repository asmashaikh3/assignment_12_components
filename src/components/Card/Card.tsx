import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

interface StyledCardProps extends CardProps {
  backgroundColor?: string;
  visible?: boolean;
}

const StyledCard = styled.div<StyledCardProps>`
  padding: 28px;
  border-radius: 24px;
  background-color: ${({ disabled, backgroundColor }) => (disabled ? '#d3d3d3' : backgroundColor || 'purple')};
  border: ${({ disabled }) => (disabled ? '1px solid #ccc' : '1px solid #e0e0e0')};
  color: ${({ disabled }) => (disabled ? '#a1a1a1' : '#333')};
  box-shadow: ${({ disabled }) => (disabled ? 'none' : '0 2px 10px rgba(0, 0, 0, 0.1)')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: ${({ visible }) => (visible ? 'block' : 'none')};

  &:hover {
    box-shadow: ${({ disabled }) => (disabled ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.15)')};
    transform: ${({ disabled }) => (disabled ? 'none' : 'translateY(-2px)')};
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    padding: 18px;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    padding: 15px;
    border-radius: 4px;
  }
`;

const Card: React.FC<StyledCardProps> = ({ children, disabled, backgroundColor, visible = true }) => {
  return (
    <StyledCard disabled={disabled} backgroundColor={backgroundColor} visible={visible}>
      {children}
    </StyledCard>
  );
};

export default Card;
