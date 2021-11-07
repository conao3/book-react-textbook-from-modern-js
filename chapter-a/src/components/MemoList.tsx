import { FC } from "react";
import styled from "styled-components";

type Props = {
    memos: string[];
    onClickDelete: (index: number) => void;
};

export const MemoList: FC<Props> = ({ memos, onClickDelete }) => {
    return (
        <SContainer>
          <p>List of memos</p>
          <ul>
            {memos.map((memo, index) => (
              <li key={memo}>
                <SMemoWrapper>
                  <span>{memo}</span>
                  <SButton onClick={() => onClickDelete(index)}>Delete</SButton>
                </SMemoWrapper>
              </li>
            ))}
          </ul>
        </SContainer>
    );
};

const SButton = styled.button`
  margin-left: 16px;
`;

const SContainer = styled.div`
  border: solid 1px #ccc;
  padding: 16px;
  margin: 8px;
`;

const SMemoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
